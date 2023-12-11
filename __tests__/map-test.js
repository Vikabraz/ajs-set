import ErrorRepository from '../src/js/map';

test('new error', () => {
  const mist = new ErrorRepository();
  expect(() => mist.translate(99)).toThrow('Unknown error');
});

test(' error', () => {
  const mist = new ErrorRepository();
  expect(mist.translate(1)).toBe('ошибка 1');
});
