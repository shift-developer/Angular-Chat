import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  elemento: any;

  constructor(public _cs: ChatService) { 
    this._cs.cargarMensajes()
      .subscribe( () => {
        setTimeout( () => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 20)
        
      });
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');

  }

  enviar_mensaje() {

    if (this.mensaje.length === 0) {
      return;
    } else {
      this._cs.agregarMensaje( this.mensaje)
        .then( () => this.mensaje= "")
        .catch( (err) => console.log('No se pudo enviar', err));
    }
  }

}
