import { Component, OnInit, inject } from '@angular/core';
import { LearningServiceService } from '../learning-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {

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

  // Inyección de servicios

  olderBrotherName: string = '';

  // constructor(
  //   private _learningService: LearningServiceService
  // ) {};

  // En lugar del constructor, también se puede inyectar de esta forma, pero hay que importar inject
  private _learningService = inject(LearningServiceService);

  ngOnInit(): void {
    this._learningService.setOlderBrother('Juan');
    this.olderBrotherName = this._learningService.getOlderBrother();
  };

  salute(){
    this._learningService.salute(this._learningService.getYoungerBrother() || '');
  };

}
