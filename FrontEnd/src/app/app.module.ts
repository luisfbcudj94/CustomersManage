import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselComponent } from './components/main/carousel/carousel.component';
import { ContenidoComponent } from './components/main/contenido/contenido.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MatTableModule } from '@angular/material/table'  
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import { ClientesDetalleComponent } from './components/clientes/clientes-detalle/clientes-detalle.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    CarouselComponent,
    ContenidoComponent,
    ClientesComponent,
    ClientesDetalleComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FlexModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule
    
  ],
  providers: [{provide:MatDialogRef , useValue:{} },],
  bootstrap: [AppComponent]
})
export class AppModule { }
