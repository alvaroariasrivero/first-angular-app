import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

  counter: number = 0;
  message: string = "";
  showCounter: boolean = true;

  increaseCounter() {
    if(this.counter <11){
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
    if(this.counter === 11){
      this.message = "Ya no puedes sumar más";
      this.showCounter = false;
    }else{
      this.message = "";
      this.showCounter = true;
    }
  };

  // Datos para enviar al hijo
  messageToSon: string = "Mensaje desde el padre";

  // Datos recibidos desde el hijo

  messageFromSon: string = "";

  receiveMessage($event: string){
    this.messageFromSon = $event;
  };

}
