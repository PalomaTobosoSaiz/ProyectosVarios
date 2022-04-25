import { Pipe, PipeTransform } from '@angular/core';
import { VillanosPelis } from '../interfaces/villanos.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(villano: VillanosPelis): string {
    return `assets/villanos/${villano.id}.jpg`;
  }
}
