import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-clientes-detalle',
  templateUrl: './clientes-detalle.component.html',
  styleUrls: ['./clientes-detalle.component.css']
})
export class ClientesDetalleComponent implements OnInit {
  
  id: number;
  revisionForm: FormGroup;
  diagnosticoForm: FormGroup;
  reparacionForm: FormGroup;
  terminadoForm: FormGroup;

  editRevision: boolean = false;
  editDiagnostico: boolean = false;
  editReparacion: boolean = false;
  editTerminado: boolean = false;


  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) {

    this.revisionForm = this.fb.group({
      revision: ['',Validators.required]
    });

    this.diagnosticoForm = this.fb.group({
      diagnostico: ['',Validators.required]
    });

    this.reparacionForm = this.fb.group({
      reparacion: ['',Validators.required]
    });

    this.terminadoForm = this.fb.group({
      terminado: ['',Validators.required]
    });

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

  isEditRevision(){
    if(this.editRevision == false){
      this.editRevision = true;
    }
    else{
      this.editRevision = false;
    }
  }

  isEditDiagnostico(){
    if(this.editDiagnostico == false){
      this.editDiagnostico = true;
    }
    else{
      this.editDiagnostico = false;
    }
  }

  isEditReparacion(){
    if(this.editReparacion == false){
      this.editReparacion = true;
    }
    else{
      this.editReparacion = false;
    }
  }

  isEditTerminado(){
    if(this.editTerminado == false){
      this.editTerminado = true;
    }
    else{
      this.editTerminado = false;
    }
  }

  saveRevision(){
    this.editRevision = false;
  }

  saveDiagnostico(){
    this.editDiagnostico = false;
  }

  saveReparacion(){
    this.editReparacion = false;
  }

  saveTerminado(){
    this.editTerminado = false;
  }

}
