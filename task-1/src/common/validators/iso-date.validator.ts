export const isIsoDate = (str: string) =>
  /^\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])$/.test(str);
