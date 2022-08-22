import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/model/contacto';
import { ContactoServiceService } from 'src/app/service/contacto-service.service';

@Component({
  selector: 'app-edit-footer',
  templateUrl: './edit-footer.component.html',
  styleUrls: ['./edit-footer.component.css']
})
export class EditFooterComponent implements OnInit {

  conta : Contacto =null;

  constructor(private contactoServ: ContactoServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.contactoServ.detail(id).subscribe(
      data =>{
        this.conta = data;
      }, err =>{
        alert("Se produjo un error al modificar el contacto");
        this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.contactoServ.update(id, this.conta).subscribe(
      data => {
      this.router.navigate(['']);
    }, err => {
      alert("No esta autorizado para modificar el contacto");
      this.router.navigate(['']);
    })
  }

}
