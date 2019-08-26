import { PreloadingStrategy, Route } from '@angular/router';
import { Observable,of } from 'rxjs';


//this is custome preloading 
export class CustomPreloading implements PreloadingStrategy {
    preload(route: Route, loadFunction: Function): Observable<any> {
        if (route.data && route.data.preload) {
            return loadFunction();
        } else {
            return of(null);
        }
    }
}