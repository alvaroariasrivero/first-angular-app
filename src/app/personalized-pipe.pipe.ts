import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalizedPipe'
})
export class PersonalizedPipePipe implements PipeTransform {

  transform(value: string | undefined): string {
    return value?.toUpperCase() || "";
  };

}
