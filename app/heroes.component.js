System.register(['angular2/core', 'angular2/router', './hero-detail.component', './hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_detail_component_1, hero_service_1;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_router, _heroService) {
                    this._router = _router;
                    this._heroService = _heroService;
                    this.title = "Tour of Heroes";
                } //the constructor itself does nothing. The parameter simultaneously defines a private _herpservice property and defines it as a heroService
                HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                ;
                //injection site. (Prefix private variables with an underscore(_) to warn readers of our code that this variable is not part of the components API)
                //Now Angular will know to supply an instance of the HeroService when it creates a new AppConponent
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; }); //Acting on the promise. When the promise resolves successfully, we will have the list of heroes.
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-heroes',
                        templateUrl: 'app/heroes.component.html',
                        //The two components won't coordinate until we bind the selectedHero property of the AppComponent to the HeroDetailComponent element's 
                        //hero property
                        //The [hero] property is the 'target' of a property binding. Angular insists that we declare a 'target' property to be an 'input'
                        //property. Because of this binding, the HeroDetailComponent should receive the [hero] from the App Component and display that hero's
                        //detail beneath the list. The detail should update every time the user picks a new hero.
                        styleUrls: ['app/heroes.component.css'],
                        directives: [hero_detail_component_1.HeroDetailComponent] //Browser & Angular ignores the html tag unless we specify it here. 
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map