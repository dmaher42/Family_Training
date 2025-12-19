export function normalizePlan(plan) {
  if (!plan || typeof plan !== "object") {
    return { meta: {}, weeks: [] };
  }

  const baseMeta = plan.meta ? { ...plan.meta } : {};
  const normalizedWeeks = [];

  const buildWeek = (week, index) => {
    const days = Array.isArray(week?.days)
      ? week.days
      : Array.isArray(week?.sessions)
        ? week.sessions
        : Array.isArray(week?.items)
          ? week.items
          : [];

    return {
      id: week?.id || `week-${index + 1}`,
      label: week?.label || week?.title || week?.name || `Week ${index + 1}`,
      days,
    };
  };

  if (Array.isArray(plan.weeks)) {
    plan.weeks.forEach((week, index) => {
      normalizedWeeks.push(buildWeek(week, index));
    });
  } else {
    const singleWeekDays = Array.isArray(plan.sessions)
      ? plan.sessions
      : Array.isArray(plan.days)
        ? plan.days
        : plan.days && typeof plan.days === "object"
          ? Object.values(plan.days)
          : [];

    normalizedWeeks.push({
      id: "week-1",
      label: "Training Week",
      days: singleWeekDays,
    });
  }

  return {
    ...plan,
    meta: baseMeta,
    weeks: normalizedWeeks,
  };
}
