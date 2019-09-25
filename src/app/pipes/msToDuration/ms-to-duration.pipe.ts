import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToDuration'
})
export class MsToDurationPipe implements PipeTransform {

  transform(ms: number): string {

    let seconds: string | number = ms / 1000;
    const minutes = Math.floor(seconds / 60);

    seconds = (minutes - seconds / 60) * -60;
    seconds =  Math.floor(seconds) < 10 ? '0' +  Math.floor(seconds)  :  Math.floor(seconds);
    return `${Math.floor(minutes)}:${seconds}`;
  }

}
