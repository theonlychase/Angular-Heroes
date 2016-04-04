import {Component, Input} from 'angular2/core'; //import Component and Input Decorators
import {Hero} from "./hero"; //the hero property is an input.
//The HeroDetail Component must be told what hero to display. Who will tell it? The parent AppComponent

@Component({
    selector: 'my-hero-detail',
    template:`
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
    </div>
    `
})
export class HeroDetailComponent { //export the class to make it available to other components
    @Input()
    hero: Hero;
}