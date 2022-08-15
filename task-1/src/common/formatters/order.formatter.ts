import { IOrder } from '../interfaces';
import { capitalize } from './capitalize.formatter';
import { formatPrice } from './price.formatter';

export const formatOrder = (order: IOrder) =>
  `${capitalize(order.name)} - ${formatPrice(order.price)}`;
