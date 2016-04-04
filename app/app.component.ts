import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';


@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="#hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `, //The two components won't coordinate until we bind the selectedHero property of the AppComponent to the HeroDetailComponent element's 
       //hero property
       //The [hero] property is the 'target' of a property binding. Angular insists that we declare a 'target' property to be an 'input'
       //property. Because of this binding, the HeroDetailComponent should receive the [hero] from the App Component and display that hero's
       //detail beneath the list. The detail should update every time the user picks a new hero.
    styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
directives: [HeroDetailComponent], //Browser & Angular ignores the html tag unless we specify it here. 
providers: [HeroService] //Angular Dependency Injector - Here, we teach the injector how to make a HeroService by registering a HeroService provider. 
//the providers array tells angular to create a fresh instance of the HeroService when it creates a new AppComponent. 
})
export class AppComponent { 
    title = "Tour of Heroes";
    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero };
    heroes = Hero[];
    constructor(private _heroService: HeroService) {} //the constructor itself does nothing. The parameter simultaneously defines a private _herpservice property and defines it as a heroService
                                                      //injection site. (Prefix private variables with an underscore(_) to warn readers of our code that this variable is not part of the components API)
                                                      //Now Angular will know to supply an instance of the HeroService when it creates a new AppConponent
    getHeroes() {
        this.heroes = this._heroService.getHeroes();
    }                                                  
}