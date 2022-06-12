import { Component, OnInit,AfterViewInit, ViewChild, TemplateRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioAdd } from 'src/app/models/usuarioAdd';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})



export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'document', 'nombreUsuario','symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  customer: FormGroup;
  loading: boolean=false;

  tallerId: number;
  customers: UsuarioAdd[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('addCliente') addCliente: TemplateRef<any>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(private fb: FormBuilder,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<ClientesComponent>,
              private usuariosService: UsuariosService,
              private toastr: ToastrService,
              ) {
    this.customer = this.fb.group({
      name: ['',Validators.required],
      document: ['',Validators.required],
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    });
   }

  ngOnInit(): void {
    this.tallerId = +localStorage.getItem('TallerId');
    console.log(this.tallerId);
    this.getData();
    
  }

  getData(){
    this.usuariosService.getCustomers(this.tallerId).subscribe(data => {
      this.customers = data;
      console.log("customers:" ,this.customers);
    },err => {
      console.log(err.error);
    });
  }

  filtro(){
  }
  

  agregarCliente(): void{

    const usuarioAdd:UsuarioAdd = {
      id: 0,
      nombre: this.customer.value.name,
      documento: this.customer.value.document,
      nombreUsuario: this.customer.value.usuario,
      password: this.customer.value.password,
      admin: 0,
      customer: 1,
      tallerId: +localStorage.getItem('TallerId')
    };

    console.log("Cliente: ", usuarioAdd)
    
    this.usuariosService.newCustomer(usuarioAdd).subscribe(data => {
      this.toastr.success("Cliente agregado con éxito.");
      window.location.reload();
      
    },err =>{
      console.log(err.error.message);
      this.toastr.error(err.error.message,'Error');
    });
    
  }

  mostrarAddCliente(){
    let dialogRef = this.dialog.open(this.addCliente);
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result !== 'no') {
                    const enabled = "Y"
                    console.log(result);
                } else if (result === 'no') {
                    console.log('User clicked no.');
                }
            }
      })
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];


