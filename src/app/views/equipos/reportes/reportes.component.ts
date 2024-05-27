import { Component } from '@angular/core';
import { AlignDirective, BorderDirective, ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, NavComponent, NavItemComponent, NavLinkDirective, RoundedDirective, RowComponent, TabContentComponent, TabContentRefDirective, TabPaneComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { EquipoService } from '../services/equipo.service';
//import { EquipoModel } from '../models/equipo.model';
import { DocsExampleComponent } from '@docs-components/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgStyle } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports:  [
    ColComponent,
    CardBodyComponent,
    CardComponent,
    NavComponent,
    NavItemComponent,
    NavLinkDirective,
    RoundedDirective,
    RowComponent,
    TabContentComponent,
    TabContentRefDirective,
    TabPaneComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    DocsExampleComponent,
    TableDirective,
    TableColorDirective,
    TableActiveDirective, 
    BorderDirective,
    AlignDirective,
    CommonModule,
    HttpClientModule,
    FormsModule,
    FormDirective,
    ReactiveFormsModule,
    FormSelectDirective,FormControlDirective,
     FormLabelDirective, ButtonDirective, NgStyle,
     TextColorDirective,
     TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {
  equipos: any[] = [];
  equiposfec: any[] = [];
  nombreEmpleado: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';


  constructor(private equiposService: EquipoService) { }

  obtenerEquiposAsignados(): void {
    if (this.nombreEmpleado.trim()) {
      this.equiposService.getEquiposAsignados(this.nombreEmpleado)
        .subscribe(
          (data) => {
            this.equipos = data;
          },
          (error) => {
            console.error('Error al obtener los equipos asignados', error);
          }
        );
    } else {
      alert('Por favor, ingrese un nombre de empleado');
    }
  }
    obtenerEquiposAsignadosFecha(): void {
      if (this.fechaInicio.trim() && this.fechaFin.trim()) {
        this.equiposService.getEquiposfechas(this.fechaInicio, this.fechaFin)
          .subscribe(
            (data) => {
              this.equiposfec = data;
            },
            (error) => {
              console.error('Error al obtener los equipos asignados', error);
            }
          );
      } else {
        alert('Por favor, ingrese ambas fechas');
      }
    }
  

  
  

}
