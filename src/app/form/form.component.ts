import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profileForm: FormGroup;
  salvou = false;

  constructor( public formBuilder: FormBuilder
    , public crudService: CrudService ) {
    crudService.getSalvar().subscribe( data => {
      this.validarForm( data );
      //this.salvou = data;
    });

    this.profileForm = this.formBuilder.group({
      nome: [ null, Validators.required ],
      email: [ null, Validators.required ]
    });
    console.log('inicial: ',  this.profileForm );
  }

  get fields () {
    return this.profileForm.controls;
  }

  ngOnInit() {
  }

  validarForm( _data ) {
    if ( this.profileForm.valid ) {
      this.salvou = true;
    }
    this.profileForm.markAsDirty();
  }

  mudar() {
    console.log( this.profileForm );
  }

}
