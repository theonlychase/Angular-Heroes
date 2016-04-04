import { Component, Input, OnInit } from 'angular2/core'; //import Component and Input Decorators
import { Hero } from "./hero"; //the hero property is an input.
//The HeroDetail Component must be told what hero to display. Who will tell it? The parent AppComponent
import { RouteParams } from 'angular2/router';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit { //export the class to make it available to other components
    @Input()
    hero: Hero;
    
    constructor( //inject RouteParams and HeroService into the constructor as private variables
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
            
    }
    
    ngOnInit() {
        let id = +this._routeParams.get('id'); //We extract the 'id' by calling the RouteParams.get method.
        this._heroService.getHero(id) //The hero id is a number. Route Parameters are always strings. We convert the route parameter value to a number with the JS (+) operator. 
            .then(hero => this.hero = hero);
    }
    
    goBack() { //This is acceptable for the demo. Going back too far could take us out of the application. 
        window.history.back(); 
    }
        
}

//Since adding parameters, the way we get there hero now will change. We will no longer receive the hero in a parent component property binding. The new HeroDetailComponent should take
//the id parameter from the routers 'RouteParams' service and use the HeroService to fetch the hero with that id from storage.