import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-promises',
    templateUrl: './promises.component.html',
    styles: []
})
export class PromisesComponent implements OnInit {
    constructor() {
        this.counterThree().then(
            () => {
                console.log('Termino');
            }
        )
            .catch(error => console.log( 'Error', error ));
    }

    ngOnInit() {
    }
    counterThree(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let counter = 0;
            const interval = setInterval(() => {
                counter += 1;
                if (counter === 3) {
                    resolve(true);
                    clearInterval(interval);
                }
            }, 1000);
        });
    }
}
