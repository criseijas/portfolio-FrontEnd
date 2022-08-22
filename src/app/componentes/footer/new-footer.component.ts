import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/model/contacto';
import { ContactoServiceService } from 'src/app/service/contacto-service.service';

@Component({
  selector: 'app-new-footer',
  templateUrl: './new-footer.component.html',
  styleUrls: ['./new-footer.component.css']
})
export class NewFooterComponent implements OnInit {

    nombreC: string = "";
    apellidoC: string = "";
    emailC: string = "";
    tel: string = "";

  constructor(private contactoServ: ContactoServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const conta = new Contacto(this.nombreC, this.apellidoC, this.emailC, this.tel);
    this.contactoServ.save(conta).subscribe(data => {
      alert("Contacto añadido correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("No autorizado");
      this.router.navigate(['']);
    }
    )
  }

}
