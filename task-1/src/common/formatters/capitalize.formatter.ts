import { flow } from 'fp-ts/lib/function';
import { concatAll } from 'fp-ts/lib/Monoid';
import { Monoid, split, toUpperCase } from 'fp-ts/lib/string';

export const capitalize = flow(
  split(Monoid.empty),
  ([first, ...rest]) => [toUpperCase(first), ...rest],
  concatAll(Monoid),
);
