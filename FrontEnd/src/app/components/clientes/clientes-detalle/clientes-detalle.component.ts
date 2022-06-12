import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { Vehicle } from 'src/app/models/vehicle';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuarioAdd } from 'src/app/models/usuarioAdd';
import { compileClassMetadata } from '@angular/compiler';
import { mergeMap } from 'rxjs';


@Component({
  selector: 'app-clientes-detalle',
  templateUrl: './clientes-detalle.component.html',
  styleUrls: ['./clientes-detalle.component.css']
})
export class ClientesDetalleComponent implements OnInit {
  
  user: string;

  showColor: string = '';
  showPlaca: string = '';
  showMarca: string = '';
  showModelo: string = '';

  revisionForm: FormGroup;
  diagnosticoForm: FormGroup;
  reparacionForm: FormGroup;
  terminadoForm: FormGroup;
  vehiculoForm: FormGroup;

  editRevision: boolean = false;
  editDiagnostico: boolean = false;
  editReparacion: boolean = false;
  editTerminado: boolean = false;
  editVehicle=false;

  customer: UsuarioAdd[];
  nombreCustomer: string = '';
  idCustomer: number;
  vehiclesCustomer: Vehicle[];


  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private vehicleService: VehiculosService,
              private usuariosService: UsuariosService) {

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

    this.vehiculoForm = this.fb.group({
      Marca: ['',Validators.required],
      Placa: ['',Validators.required],
      Color: ['',Validators.required],
      Modelo: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.user = this.route.snapshot.params.user;
    this.getCustomerUser();
    
  }

   getCustomerUser(){
    this.usuariosService.getCustomerUser(this.user).subscribe(data => {
      this.customer = data;
      this.nombreCustomer = this.customer[0].nombre;
      this.idCustomer = this.customer[0].id;

      this.getVehicles();
    }, err => {
      console.log(err.error.message);
    })
  }

  getVehicles(){
    this.vehicleService.getVehiclesId(this.idCustomer).subscribe(data => {
      this.vehiclesCustomer = data;
      console.log(this.vehiclesCustomer)
      
      this.showColor = this.vehiclesCustomer[0].color;
      this.showPlaca = this.vehiclesCustomer[0].placa;
      this.showModelo = this.vehiclesCustomer[0].modelo;
      this.showMarca = this.vehiclesCustomer[0].marca;
    }, err => {
      console.log(err.error.message);
    })

  }

  dropdown(vehicle){
    this.showColor = vehicle.color;
    this.showPlaca = vehicle.placa;
    this.showModelo = vehicle.modelo;
    this.showMarca = vehicle.marca;
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

  // Agregar vehiculo
  addVehicle(){
    this.editVehicle = true;
  }

  saveVehicle(){

    const vehicle:Vehicle = {
      userId: this.customer[0].id,
      mantenimientoId: 1,
      marca: this.vehiculoForm.value.Marca,
      placa: this.vehiculoForm.value.Placa,
      color: this.vehiculoForm.value.Color,
      modelo: this.vehiculoForm.value.Modelo
    };

    if(this.vehiculoForm.invalid == false){
      console.log("entre al if");
      this.vehicleService.saveVehicle(vehicle).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err.error.message);
      })

      this.editVehicle = false;
      this.vehiculoForm.reset();
      window.location.reload();
    }
    
  }

  editVehicleForm(){
    if(this.editVehicle){
      this.editVehicle = false;
    }
    else{
      this.editVehicle = true;
    }
    
  }

}
