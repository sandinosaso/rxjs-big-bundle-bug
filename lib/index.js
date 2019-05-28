import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
let x = Observable.create();
x.pipe(
  map((v) => v++)
)