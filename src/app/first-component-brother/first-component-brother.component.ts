import { Component, OnInit } from '@angular/core';
import { LearningServiceService } from '../learning-service.service';

@Component({
  selector: 'app-first-component-brother',
  templateUrl: './first-component-brother.component.html',
  styleUrl: './first-component-brother.component.css'
})
export class FirstComponentBrotherComponent implements OnInit {

  //Inyección de servicio
  constructor(
    private _learningService: LearningServiceService
  ) {};

  youngerBrotherName: string = '';

  ngOnInit(): void {
    this._learningService.setYoungerBrother('Pedro');
    this.youngerBrotherName = this._learningService.getYoungerBrother();
  };

  salute(){
    this._learningService.salute(this._learningService.getOlderBrother() || '');
    console.log(this._learningService.howAreChild());
  };
}
