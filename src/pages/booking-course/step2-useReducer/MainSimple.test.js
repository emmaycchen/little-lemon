import { render, screen } from '@testing-library/react';

// 直接從 MainSimple.js 把兩個 function 拉出來測試
// 注意：這兩個 function 要從 MainSimple.js export 才能 import 進來
import { initializeTimes, updateTimes } from './MainSimple';

// 測試 1：initializeTimes 回傳正確的初始時段
test('initializeTimes returns an array of available times', () => {
    const result = initializeTimes();
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

// 測試 2：updateTimes 收到 UPDATE_TIMES action 後回傳相同的時段
test('updateTimes returns the same available times regardless of date', () => {
    const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2024-07-01' };
    const result = updateTimes(currentState, action);
    expect(result).toEqual(currentState);
});

// 測試 3：updateTimes 收到未知 action 時回傳原本的 state（不改變）
test('updateTimes returns the same state for unknown action type', () => {
    const currentState = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const result = updateTimes(currentState, action);
    expect(result).toEqual(currentState);
});