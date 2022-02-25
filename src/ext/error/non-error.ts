/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import * as inspect from 'object-inspect';

export class NonError extends Error {
  public constructor(input: unknown) {
    super(inspect(input));

    this.name = 'NonError';

    Error.captureStackTrace(this, NonError);
  }
}
