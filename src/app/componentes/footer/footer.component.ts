import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/contacto';
import { ContactoServiceService } from 'src/app/service/contacto-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  conta: Contacto[] = [];


  constructor(private contactoServ: ContactoServiceService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarContacto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarContacto(): void {
    this.contactoServ.lista().subscribe(data => { this.conta = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.contactoServ.delete(id).subscribe(
        data => {
          this.cargarContacto();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )

    }
  }

}
