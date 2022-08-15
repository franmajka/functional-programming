import { concatAll, Monoid } from 'fp-ts/lib/Monoid';
import { Predicate } from 'fp-ts/lib/Predicate';

export const monoidPredicateAll: Monoid<Predicate<unknown>> = {
  empty: () => true,
  concat: (x, y) => _ => x(_) && y(_),
};

export const concatValidators = (...validators: Predicate<unknown>[]) =>
  concatAll(monoidPredicateAll)(validators);
