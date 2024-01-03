import { Component } from '@angular/core';
import { environment } from './../../environments/environment'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  imagenPerfil: string = "";

  constructor(){
    if(environment.production){
      this.imagenPerfil = environment.imfPerfil;
    }else {
      this.imagenPerfil = '../../assets/img/Img-perfil.jpg';
    }
  }
  
}
