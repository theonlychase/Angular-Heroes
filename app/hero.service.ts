import {Injectable} from 'angular2/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';


@Injectable() //Typescript sees the @Injectable decorator and emits metadata about our service, metadata that Angular may need to
              //inject other dependencies into this service. 
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES); //we are still mocking the data. We're simulating the behavior of an ultra-fast, zero-latency server, by returning an immediately resolved promise with our mock heroes as the result
    }
}