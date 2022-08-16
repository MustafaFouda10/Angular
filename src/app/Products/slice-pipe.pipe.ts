import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicePipe'
})
export class SlicePipePipe implements PipeTransform {

  transform(value: string, args: number): string {
    return value.slice(0,args);
  }

}
