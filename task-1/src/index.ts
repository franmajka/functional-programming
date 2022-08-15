import { partition } from 'fp-ts/lib/Array';
import { pipe, flow } from 'fp-ts/lib/function';
import { groupBy } from 'fp-ts/lib/ReadonlyNonEmptyArray';
import { map as arrMap } from 'fp-ts/lib/ReadonlyArray';
import { map as recordMap } from 'fp-ts/lib/ReadonlyRecord';

import { formatOrder } from './common/formatters';
import { isOrder } from './common/validators';

import { orders } from './orders';

const getOrdersTable = flow(partition(isOrder), ({ left, right }) => ({
  invalid: left,
  table: pipe(
    right,
    groupBy(({ date }) => date),
    recordMap(arrMap(formatOrder)),
  ),
}));

const { invalid, table } = getOrdersTable(orders);

console.table(table);
console.log(invalid);
