Number.zeroIfNull = function (value: number | null): number {
  return value ?? 0;
};

Number.maxIfNull = function (value: number | null): number {
  return value ?? Number.MAX_SAFE_INTEGER;
};
