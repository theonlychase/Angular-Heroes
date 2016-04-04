import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from '.hero-detail.component';

@RouteConfig([ //Only 3 route definitions as of now
    {
        path: '/heroes', //URL
        name: 'Heroes', //Official name of the route. Must begin with capital letter to avoid confusion with path name
        component: HeroesComponent //component that the router should create when navigating to this route
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true //dislays this URL when the browser doesn't match an exsiting route
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [
        ROUTER_DIRECTIVES,
        // HeroesComponent - removed because we don't want this component showing the heroes.
    ],
    providers: [
        ROUTER_PROVIDERS, 
        HeroService
    ]
})
export class AppComponent {
    title = "Tour of Heroes";
}