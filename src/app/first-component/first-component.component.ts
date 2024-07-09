import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

  counter: number = 0;
  message: string = "";

  increaseCounter() {
    if(this.counter <10){
      this.counter++;
      this.checkCounter();
    }
  };

  decreaseCounter() {
    if (this.counter >0) {
      this.counter--;
      this.checkCounter();
    }
  };

  checkCounter() {
    if(this.counter === 10){
      this.message = "Ya no puedes sumar más";
    }else{
      this.message = "";
    }
  };

}
