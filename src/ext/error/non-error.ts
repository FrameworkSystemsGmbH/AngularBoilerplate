import * as inspect from 'object-inspect';

export class NonError extends Error {
  public constructor(input: unknown) {
    super(inspect(input));

    const err: Error = new Error();

    this.name = 'NonError';
    this.stack = err.stack;
  }
}
