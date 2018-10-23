import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor( public crudService: CrudService) { }

  ngOnInit() {
  }

  salvar() {
    this.crudService.salvarUpdate( true );
  }
}
