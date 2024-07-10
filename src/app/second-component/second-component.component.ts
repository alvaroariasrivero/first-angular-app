import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {

  // Datos que recibe de first-cimponent
  @Input() receivingFromParent: string = "";

  // Datos que envía a first-component
  @Output() messageFromSon = new EventEmitter<string>();

  outputMessage: string = "";

  sendMessage(){
    this.messageFromSon.emit(this.outputMessage);    
  };

}
