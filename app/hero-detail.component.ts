import {Component, Input} from 'angular2/core'; //import Component and Input Decorators

@Component({
    selector: 'my-hero-detail',
    template:`
    <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details!</h2>
        <div><label>id: </label>{{selectedHero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="selectedHero.name" placeholder="name">
        </div>
    </div>
    `
})
export class HeroDetailComponent { //export the class to make it available to other components
    
}