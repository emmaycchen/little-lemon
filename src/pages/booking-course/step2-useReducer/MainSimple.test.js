import { initializeTimes, updateTimes } from './bookingUtils';

// mock window.fetchAPI，讓測試環境有這個函式
beforeAll(() => {
  window.fetchAPI = (date) => {
    return ['17:00', '18:00', '19:00', '20:00'];
  };
});

// 測試 1：initializeTimes 回傳非空陣列
test('initializeTimes returns a non-empty array of available times', () => {
  const result = initializeTimes();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

// 測試 2：updateTimes 收到 UPDATE_TIMES 和日期後回傳可用時段
test('updateTimes returns available times for the selected date', () => {
  const currentState = [];
  const action = { type: 'UPDATE_TIMES', date: '2026-06-29' };
  const result = updateTimes(currentState, action);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

// 測試 3：updateTimes 收到未知 action 回傳原本 state
test('updateTimes returns current state for unknown action type', () => {
  const currentState = ['17:00', '18:00'];
  const action = { type: 'UNKNOWN_ACTION' };
  const result = updateTimes(currentState, action);
  expect(result).toEqual(currentState);
});