const COMPLETED_DAYS_KEY = "completed_days_v1";
const SKIPPED_DAYS_KEY = "skipped_days_v1";
const WEEK_STATUS_KEY = "weekly_status_v1";

const buildKey = (baseKey, planId) => `${baseKey}:${planId}`;

const readJson = (key) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : null;
};

const writeJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export function loadCompletedDays(planId) {
  return readJson(buildKey(COMPLETED_DAYS_KEY, planId)) || [];
}

export function saveCompletedDays(planId, days) {
  writeJson(buildKey(COMPLETED_DAYS_KEY, planId), days);
}

export function loadSkippedDays(planId) {
  return readJson(buildKey(SKIPPED_DAYS_KEY, planId)) || [];
}

export function saveSkippedDays(planId, days) {
  writeJson(buildKey(SKIPPED_DAYS_KEY, planId), days);
}

export function loadWeeklyStatus(planId) {
  return readJson(buildKey(WEEK_STATUS_KEY, planId)) || {};
}

export function saveWeeklyStatus(planId, status) {
  writeJson(buildKey(WEEK_STATUS_KEY, planId), status);
}
