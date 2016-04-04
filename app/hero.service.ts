import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable() //Typescript sees the @Injectable decorator and emits metadata about our service, metadata that Angular may need to
              //inject other dependencies into this service. 
export class HeroService {
    getHeroes() {
        return HEROES;
    }
}