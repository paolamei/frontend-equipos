import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { EquipoModel } from '../models/equipo.model';
import { EquipoService } from '../services/equipo.service';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent,  
    CardHeaderComponent, CardBodyComponent,
    ReactiveFormsModule ,FormsModule, FormDirective,
    FormSelectDirective,FormControlDirective,
     FormLabelDirective, ButtonDirective, NgStyle,
     TextColorDirective,
     TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.scss'
})

export class EquipoComponent {
  listaEquipos : EquipoModel[] = [];
  equipoModelo : EquipoModel = new EquipoModel();
  /**
   *
   */
  constructor(private equipoService: EquipoService) {
    this.getEquipos();

  }

  getEquipos(){
    this.equipoService.getTodosLosEquipos().subscribe({
      next : (respuesta) => {
          console.log(respuesta);
          this.listaEquipos = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  guardarEquipo(){
    console.log(this.equipoModelo);
    if (this.equipoModelo._id == '') {
      console.log("guardar", this.equipoModelo);
      this.agregarEquipo();
    } else {
      console.log("editar", this.equipoModelo);
      this.editarEquipo();
    }


  }
  agregarEquipo(){
    this.equipoService.agregarEquipo(this.equipoModelo).subscribe({
      next : (respuesta) => {
          console.log("Se guardo exitosamente",respuesta);
          this.getEquipos();
          this.equipoModelo = new EquipoModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  eliminarEquipo(receta: EquipoModel){
    console.log("itema para eliminar", receta);
    this.equipoService.eliminarEquipo(receta._id).subscribe({
      next : (respuesta) => {
          console.log("Se elimino exitosamente",respuesta);
          this.getEquipos();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  verEquipo(equipo: EquipoModel){
    this.equipoModelo = equipo;
  }

  editarEquipo(){
    this.equipoService.editarEquipo(this.equipoModelo).subscribe({
      next : (respuesta) => {
          console.log("Se edito exitosamente",respuesta);
          this.getEquipos();
          this.equipoModelo = new EquipoModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}

