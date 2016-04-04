import { Component, OnInit } from 'angular2/core'; //OnInit initializes the heroes
import { Router } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    
    constructor(
        private _router: Router,
        private _heroService: HeroService) { }
    
    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }
    
    gotoDetail(hero: Hero) { 
        let link = ['HeroDetail', {id: hero.id}]; //Set a route 'link' parameters array
        this._router.navigate(link); //pass the array to the router's navigate method
    } 
    //We wrote 'link' parameters arrays in the AppComponenet for the navigation links. Those arrays had only one element, the name of the destination route. 
    //This array has 2 elements -> 1. The name of the destination route. 2. A route parameter object with an 'id' field set to the value of the selected hero's 'id'.
    //The two array items align with the 'name' and ':id' token in the parameratized HeroDetail route configuration we added to the AppComponent earlier.  
 }