import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  save = new Subject<any>();

  getSalvar() {
    return this.save.asObservable();
  }

  salvarUpdate( _value: any) {
    this.save.next( _value );
  }

}
