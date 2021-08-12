import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Hulk', 'Thor', 'Ironman'];
  heroeBorrado: string = '';
  isHeroeBorrado: boolean = false;

  borrarHeroe() {
     
    this.heroeBorrado = this.heroes.shift() || '';
    this.isHeroeBorrado = this.heroeBorrado.length > 0 ?? true;


  }
}
