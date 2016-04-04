import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    template: 'app/heroes.component.html',
       //The two components won't coordinate until we bind the selectedHero property of the AppComponent to the HeroDetailComponent element's 
       //hero property
       //The [hero] property is the 'target' of a property binding. Angular insists that we declare a 'target' property to be an 'input'
       //property. Because of this binding, the HeroDetailComponent should receive the [hero] from the App Component and display that hero's
       //detail beneath the list. The detail should update every time the user picks a new hero.
    styleUrls: ['app.heroes.component.css'],
    directives: [HeroDetailComponent] //Browser & Angular ignores the html tag unless we specify it here. 
                                      // providers: [] //Angular Dependency Injector - Here, we teach the injector how to make a HeroService by registering a HeroService provider. 
                                      //the providers array tells angular to create a fresh instance of the HeroService when it creates a new AppComponent. 
})
export class HeroesComponent implements OnInit { //Component Lifecycle - At creation, After each change, eventual destruction. Angular calls it at the right time. 
    title = "Tour of Heroes";
    heroes: Hero[];
    selectedHero: Hero;
    
    onSelect(hero: Hero) { this.selectedHero = hero };
    
    constructor(
        private _router: Router,
        private _heroService: HeroService) {} //the constructor itself does nothing. The parameter simultaneously defines a private _herpservice property and defines it as a heroService
                                                      //injection site. (Prefix private variables with an underscore(_) to warn readers of our code that this variable is not part of the components API)
                                                      //Now Angular will know to supply an instance of the HeroService when it creates a new AppConponent
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes); //Acting on the promise. When the promise resolves successfully, we will have the list of heroes.
    }
    
    ngOnInit() {
        this.getHeroes();
    }                                                  
}