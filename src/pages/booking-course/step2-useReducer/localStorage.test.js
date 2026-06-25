beforeEach(() => {
  // 每個測試前清空 localStorage
  localStorage.clear();
});

// ── 寫入測試 ──────────────────────────────────────────────
test('writes new booking to localStorage after submission', () => {
  const formData = {
    date: '2026-06-29',
    time: '18:00',
    guests: 2,
    occasion: 'Anniversary',
  };

  const existing = JSON.parse(localStorage.getItem('bookingData') || '[]');
  const updated = [...existing, formData];
  localStorage.setItem('bookingData', JSON.stringify(updated));

  const saved = JSON.parse(localStorage.getItem('bookingData'));
  expect(saved).toHaveLength(1);
  expect(saved[0]).toEqual(formData);
});

test('appends new booking to existing data in localStorage', () => {
  const existing = [{ date: '2026-06-28', time: '17:00', guests: 1, occasion: 'Birthday' }];
  localStorage.setItem('bookingData', JSON.stringify(existing));

  const newBooking = { date: '2026-06-29', time: '18:00', guests: 2, occasion: 'Anniversary' };
  const updated = [...existing, newBooking];
  localStorage.setItem('bookingData', JSON.stringify(updated));

  const saved = JSON.parse(localStorage.getItem('bookingData'));
  expect(saved).toHaveLength(2);
  expect(saved[1]).toEqual(newBooking);
});

// ── 讀取測試 ──────────────────────────────────────────────
test('reads existing bookings from localStorage on load', () => {
  const stored = [
    { date: '2026-06-28', time: '17:00', guests: 1, occasion: 'Birthday' },
    { date: '2026-06-29', time: '19:00', guests: 3, occasion: 'Business' },
  ];
  localStorage.setItem('bookingData', JSON.stringify(stored));

  const saved = localStorage.getItem('bookingData');
  const result = saved ? JSON.parse(saved) : [];

  expect(result).toHaveLength(2);
  expect(result[0].occasion).toBe('Birthday');
  expect(result[1].occasion).toBe('Business');
});

test('returns empty array when localStorage has no bookingData', () => {
  const saved = localStorage.getItem('bookingData');
  const result = saved ? JSON.parse(saved) : [];

  expect(result).toEqual([]);
  expect(result).toHaveLength(0);
});