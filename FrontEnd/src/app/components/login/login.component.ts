import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login: FormGroup;
  loading: boolean=false;
 
  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private toastr: ToastrService,
              private router: Router,) { 
    this.login = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ingresar(): void{
    this.loading = true;

    const usuario:Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    };

    console.log(this.login.value);
    
    this.loginService.login(usuario).subscribe(data => {
        
        this.toastr.success("Usuario correcto")
        this.router.navigate(['/main']);
        this.loading = false;
        this.login.reset()

        localStorage.setItem('NombreUsuario',data.user.nombreUsuario);
        localStorage.setItem('Admin',data.user.admin);
        localStorage.setItem('Customer',data.user.customer);
        localStorage.setItem('TallerId',data.user.tallerId);
    }, error => {
      this.loading = false;
      console.log(error);
      this.toastr.error(error.error.message,'Error');
      this.login.reset()
    });
  }

}
