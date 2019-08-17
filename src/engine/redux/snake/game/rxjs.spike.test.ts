// TODO: learn rxjs for real
import {of, interval} from 'rxjs';
import {catchError, map, take} from 'rxjs/operators';

describe("spike", function () {
    it("test", () => {
        //emit error

        const inter = interval(100);
        const source = inter.pipe(map(val => {
            if (val > 3) {
                throw new Error(`This is an error ${val}!`)
            } else {
                return val;
            }
        }));
        //gracefully handle error, returning observable with error message
        const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
        //output: 'I caught: This is an error'
        // const subscribe = source.subscribe(val => console.log(val));

        // inter.pipe(take(30)).subscribe(val=>console.log(val));
        return new Promise(resolve =>
            inter.pipe(
                // take(30)
            )
                .subscribe({
                    next: console.log,
                    complete: resolve
                })
        );
    });
});