import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { SharedModule } from '../shared/shared.module';
import { AbecedarioComponent } from './abecedario/abecedario.component';
import { PalabraComponent } from './palabra/palabra.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    GraficaComponent,
    AbecedarioComponent,
    PalabraComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
