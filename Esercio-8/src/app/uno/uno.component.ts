import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-uno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.css'
})



export class UnoComponent {
  luoghi = [
   {nome: "Catanzaro", controllo: false, immagine : ""},
 
   {nome: "PizzoCalabro", immagine: "",controllo: false},
 
   {nome: "Grotteria", immagine: "",controllo: false},
 
   {nome: "Roccella", immagine: "",controllo: false},
 
   {nome: "Cosenza", immagine: "",controllo: false},
  ]
 
  
  bottone(luoghi:{nome: string}){
    if (luoghi.nome == "Catanzaro"){
      this.luoghi[0].controllo = true
    }else if (luoghi.nome == "PizzoCalabro"){
      this.luoghi[1].controllo = true
    }else if (luoghi.nome == "Grotteria"){
      this.luoghi[2].controllo = true
    }else if (luoghi.nome == "Roccella"){
      this.luoghi[3].controllo = true
    }else if (luoghi.nome == "Cosenza"){
      this.luoghi[4].controllo = true
    }
  
  }
  
  indietro(){
    this.luoghi[0].controllo = false
    this.luoghi[1].controllo = false
    this.luoghi[2].controllo = false
    this.luoghi[3].controllo = false
    this.luoghi[4].controllo = false
    
  
  }
}
