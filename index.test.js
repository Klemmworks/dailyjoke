const dailyJoke = require('./index');

test('Fetches a truthy joke object', () => {
  expect(dailyJoke()).toBeTruthy();
});

test('Fetched joke has expected properties', () => {
  expect(dailyJoke()).toHaveProperty('for');
  expect(dailyJoke()).toHaveProperty('punchline');
});
