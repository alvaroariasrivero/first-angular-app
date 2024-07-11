import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FormsModule } from '@angular/forms';
import { FirstComponentBrotherComponent } from './first-component-brother/first-component-brother.component';
import { BrotherStylesDirective } from './brother-styles.directive';
import { PersonalizedPipePipe } from './personalized-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    FirstComponentBrotherComponent,
    BrotherStylesDirective,
    PersonalizedPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
