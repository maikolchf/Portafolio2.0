import { Component } from '@angular/core';
import { environment } from './../../environments/environment'
import { Call } from '@angular/compiler';

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
      Call
      this.imagenPerfil = '../../assets/img/Img-perfil.jpg';
    }
  }
  
}
