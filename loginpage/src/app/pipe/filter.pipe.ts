import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(noteFilterData: any, searchTerm?: string): any {
    if (!searchTerm) {
      return noteFilterData;
    }
    console.log(noteFilterData)
    return noteFilterData.filter((x: any) => x.name.toLocaleLowerCase().includes(searchTerm) || x.country.toLocaleLowerCase().includes(searchTerm)
    );
  }

}



