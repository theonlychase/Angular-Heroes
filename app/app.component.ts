import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';

@RouteConfig([ //Only 3 route definitions as of now
    {
        path: '/heroes', //URL
        name: 'Heroes', //Official name of the route. Must begin with capital letter to avoid confusion with path name
        component: HeroesComponent //component that the router should create when navigating to this route
    }
])

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <a [routerLink]="['Heroes']">Heroes</a>
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