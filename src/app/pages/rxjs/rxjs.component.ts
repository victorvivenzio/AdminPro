import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { filter, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor() {
    this.subscription = this.counterObs()
        .pipe(
            retry(1)
        ).subscribe(
        counter => {
          console.log(counter);
        },
        error => {
          console.error('Error', error);
        },
        () => {
          console.log('complete');
        }
      );
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  counterObs(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let counter = 0;
      const interval = setInterval( () => {
        counter++;
        const data = {
          counter
        };
        observer.next(data);
        // if (counter === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }
        // if (counter === 2) {
        //   clearInterval(interval);
        //   observer.error('Peru');
        // }
      }, 1000);
    }).pipe(
        map( resp => resp.counter ),
        filter( (value, index) => {
          if (value % 2 === 0) {
            return false;
          } else {
            return true;
          }
        })
    );
  }

}
