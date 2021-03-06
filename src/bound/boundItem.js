import Bounds from '../Bounds';
import marks from '../marks/index';

export default function(item, func, opt) {
  var type = marks[item.mark.marktype],
      bound = func || type.bound;
  if (type.nested) item = item.mark;
  if (!item.bounds) item.bounds = new Bounds();

  return bound(item.bounds, item, opt);
}
