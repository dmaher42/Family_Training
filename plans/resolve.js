
export function resolvePlanForWeek(plan, weekNumber, opts = {}) {
  const weekIdx = weekNumber - 1;

  // 1. Determine Context

  // Phase
  const phase = plan.phases.find(p => weekNumber <= p.maxWeek) || plan.phases[plan.phases.length - 1];
  const phaseName = phase.name;

  // Variant (A, B, C)
  const variants = ["A", "B", "C"];
  const variantIndex = weekIdx % 3;
  const variant = variants[variantIndex];

  // Context Object
  const ctx = {
    phase: phaseName,
    variant: variant,
    strengthRounds: opts.strengthRounds || 3,
    reps: opts.reps || 3, // Default for speedSets if not provided
    seasonTag: phaseName, // Default to phase name
    ...opts
  };

  // Populate variations
  if (plan.variations) {
    Object.keys(plan.variations).forEach(key => {
      const val = plan.variations[key];
      // If it's an array, pick by variantIndex
      if (Array.isArray(val)) {
        // Special handling for known keys if needed, or generic
        if (key === 'speedSets') {
          ctx.speedSet = val[variantIndex];
        } else if (key === 'finish') {
          ctx.finishDrill = val[variantIndex];
        } else {
          // e.g. squat -> squatVar
          // The prompt implies we should map keys like 'squat' to 'squatVar' for {ref: 'squatVar'}
          // But looking at the plan, the ref is 'squatVar' and the key in variations is 'squat'.
          // So we'll map `key + 'Var'`
          ctx[`${key}Var`] = val[variantIndex];
          // Also keep original key just in case
          ctx[key] = val[variantIndex];
        }
      }
    });
  }

  // Aerobic / RunWalk Logic (Isla specific)
  if (plan.aerobic) {
      ctx.aerobicWarmup = plan.aerobic.warmup;
      ctx.aerobicCoolDown = plan.aerobic.coolDown;
      ctx.aerobicSteadyNote = plan.aerobic.steadyNote;

      // Heuristic for times based on phase if not explicit
      // Base: 20-30, Build: 30-40, Sharpen: 40-50?
      // Or checking 'blocks' in plan to see if they are fixed.
      // They are "{aerobicMain} min".
      // I'll define a simple progression.
      const times = { Base: 25, Build: 30, Sharpen: 35 };
      ctx.aerobicMain = times[phaseName] || 30;
      ctx.crossTrainerTime = times[phaseName] || 30;

      ctx.aerobicTag = phaseName === 'Base' ? 'Base Building' : (phaseName === 'Build' ? 'Building' : 'Sharpening');
  }

  if (plan.runWalk) {
     // Map phase to runWalk key
     // Keys: inSeason, build, sharpen.
     let key = phaseName.toLowerCase();
     if (key === 'base') key = 'build'; // Fallback
     if (!plan.runWalk[key]) key = 'build';

     ctx.runWalk = plan.runWalk[key];
  }

  if (plan.funConditioning) {
      ctx.funBlockTitle = plan.funConditioning.titleOffSeason;
      ctx.funRule = plan.funConditioning.rule;
  }

  // 2. Interpolation Helper
  const interpolate = (str, context) => {
    if (typeof str !== 'string') return str;
    return str.replace(/\{(\w+)\}/g, (_, k) => {
        const val = context[k];
        return val !== undefined ? val : `{${k}}`;
    });
  };

  // 3. Expand Days
  const resolvedDays = [];
  const dayKeys = plan.days ? Object.keys(plan.days) : [];

  // Sort keys to ensure day1, day2... order
  dayKeys.sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''));
      const numB = parseInt(b.replace(/\D/g, ''));
      return numA - numB;
  });

  dayKeys.forEach(key => {
      const dayTpl = plan.days[key];

      // Interpolate top-level fields
      const focus = interpolate(dayTpl.focus, ctx);
      const tag = interpolate(dayTpl.tagTemplate || "", ctx);

      // Process blocks
      const blocks = (dayTpl.blocks || []).map(block => {
          const blockTitle = interpolate(block.title, ctx);
          const items = [];

          (block.items || []).forEach(item => {
              if (item.text) {
                  // Standard text item
                  items.push({
                      text: interpolate(item.text, ctx),
                      exKey: item.exKey // Preserve if present
                  });
              } else if (item.ref) {
                  // e.g. { ref: "squatVar" }
                  const val = ctx[item.ref];
                  let resolvedText = "";

                  if (val) {
                      resolvedText = interpolate(val, ctx);
                  } else {
                       // Unresolved: format as TODO
                      resolvedText = `TODO: ${item.ref}`;
                  }

                  // exKey resolution for Refs
                  // Rule: if ref ends with "Var", try to find base key in plan.exerciseKeys
                  let exKey = undefined;
                  if (item.ref.endsWith("Var") && plan.exerciseKeys) {
                      const baseKey = item.ref.replace("Var", "");
                      if (plan.exerciseKeys[baseKey]) {
                          exKey = plan.exerciseKeys[baseKey];
                      }
                  }

                  items.push({
                      text: resolvedText,
                      exKey: exKey
                  });

              } else if (item.listRef) {
                  // e.g. { listRef: "speedSet" }
                  // ctx.speedSet is array of { text, exKey }
                  const list = ctx[item.listRef];
                  if (Array.isArray(list)) {
                      list.forEach(li => {
                          items.push({
                              text: interpolate(li.text, ctx),
                              exKey: li.exKey
                          });
                      });
                  }
              }
          });

          return {
              title: blockTitle,
              items: items
          };
      });

      resolvedDays.push({
          id: key, // e.g. day1
          day: dayTpl.day,
          focus: focus,
          tag: tag,
          blocks: blocks
      });
  });

  return {
    meta: plan.meta,
    weekLabel: `Week ${weekNumber} • ${phaseName}`,
    weekNote: phase.note,
    days: resolvedDays
  };
}
