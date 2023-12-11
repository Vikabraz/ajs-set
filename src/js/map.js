export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'ошибка 1'],
      [(2, 'ошибка 2')],
      [(3, 'ошибка 3')],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    throw new Error('Unknown error');
  }
}
