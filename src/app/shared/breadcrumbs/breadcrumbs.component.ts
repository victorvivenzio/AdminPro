import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
    title: string;
    constructor(
        private router: Router,
        private pageTitle: Title,
        private meta: Meta
    ) {
        this.getDataRoute()
            .subscribe(event => {
                this.title = event.title;
                this.pageTitle.setTitle(`Admin - ${event.title}`);
                const metaTag: MetaDefinition = {
                    name: 'description',
                    content: this.title,
                };
                this.meta.updateTag(metaTag);
                console.log(event);
            });
    }

    ngOnInit() {
    }
    getDataRoute() {
        return this.router.events
            .pipe(
                filter(event => event instanceof ActivationEnd),
                filter((event: ActivationEnd) => event.snapshot.firstChild === null),
                map( (event: ActivationEnd) => event.snapshot.data )
            );
    }

}
