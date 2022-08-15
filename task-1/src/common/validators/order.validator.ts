import { pipe } from 'fp-ts/lib/function';
import { isNumber } from 'fp-ts/lib/number';
import { not } from 'fp-ts/lib/Predicate';
import { isEmpty, isString } from 'fp-ts/lib/string';

import { IOrder } from '../interfaces';
import { concatValidators } from '../utils';
import { isIsoDate } from './iso-date.validator';

const isName = ({ name }: Partial<IOrder>) =>
  pipe(name, concatValidators(isString, not(isEmpty)));

const isPrice = ({ price }: Partial<IOrder>) =>
  pipe(price, concatValidators(isNumber));

const isDate = ({ date }: Partial<IOrder>) =>
  pipe(date, concatValidators(isString, isIsoDate));

export const isOrder = (order: Partial<IOrder>): order is IOrder =>
  pipe(order, concatValidators(isName, isPrice, isDate));
