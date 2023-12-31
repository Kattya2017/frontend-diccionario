import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { SharedModule } from '../shared/shared.module';
import { AbecedarioComponent } from './abecedario/abecedario.component';
import { PalabraComponent } from './palabra/palabra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdministradorComponent } from './administrador/administrador.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    GraficaComponent,
    AbecedarioComponent,
    PalabraComponent,
    AdministradorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
