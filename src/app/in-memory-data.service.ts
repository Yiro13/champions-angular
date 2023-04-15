import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'FC Bayern München', power: 85},
      { id: 10, name: 'SL Benfica', power: 70},
      { id: 14, name: 'Chelsea FC', power: 80},
      { id: 15, name: 'FC Internazionale Milano', power: 75},
      { id: 16, name: 'Manchester City FC', power: 85},
      { id: 17, name: 'AC Milan', power: 72},
      { id: 18, name: 'SSC Napoli', power: 90},
      { id: 19, name: 'Real Madrid', power: 92},
      { id: 20, name: 'Club Brugge', power: 65},
      { id: 21, name: 'Borusia Dortmund', power: 81},
      { id: 22, name: 'Eintracht Frankfurt', power: 79},
      { id: 23, name: 'RB Leipzig', power: 73},
      { id: 24, name: 'Liverpool FC', power: 84},
      { id: 25, name: 'Paris Saint-Germain', power: 81},
      { id: 26, name: 'FC Porto', power: 80},
      { id: 27, name: 'Tottenham Hotspur', power: 80},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}