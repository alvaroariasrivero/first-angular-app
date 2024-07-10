import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearningServiceService {

  olderBrother?: string;
  youngerBrother?: string;

  getOlderBrother(): string{
    return this.olderBrother || '';
  };

  setOlderBrother(brother: string){
    this.olderBrother = brother;
  };

  getYoungerBrother(): string{
    return this.youngerBrother || '';
  };

  setYoungerBrother(brother: string){
    this.youngerBrother = brother;
  };

  salute(brother: string){
    console.log(`Hola ${brother}`);
  };

  howAreChild():string{
    return '¿Cómo está tu hijo?'
  }

  constructor() { }
}
