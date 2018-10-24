import { Component, OnInit, ViewChild } from '@angular/core';
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
      this.validar( data );
    });

    this.profileForm = this.formBuilder.group({
      nome: [ null, Validators.required ],
      email: [ null, Validators.required ]
    });
  }

  get fields () {
    return this.profileForm.controls;
  }

  ngOnInit() {
  }

  validar( _data ) {
    console.log( _data );

    if ( this.profileForm.valid ) {
      console.log('validou!');
    } else {
      this.fields.nome.markAsTouched();
      this.fields.email.markAsTouched();
    }
  }
}
