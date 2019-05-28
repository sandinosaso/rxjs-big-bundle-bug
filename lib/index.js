import { Observable } from 'rxjs/internal/Observable';
import { mergeMap, map, tap } from 'rxjs/operators';
let x = Observable.create();
x.pipe(
  mergeMap(() => x),
  tap(() => console.log('wow')),
  map((v) => v++)
)