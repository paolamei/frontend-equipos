import {HttpClient, HttpParams} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EquipoModel } from "../models/equipo.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class EquipoService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) {

  }

  getTodosLosEquipos (): Observable<EquipoModel[]> {
    return this.http.get<EquipoModel[]>(`${this.API_URL}/equipos/getEquipos`);
  }

  agregarEquipo(equipo: EquipoModel) : Observable<EquipoModel> {
    return this.http.post<EquipoModel>(`${this.API_URL}/equipos/crear`, equipo);
  }

  editarEquipo(equipo: EquipoModel) : Observable<EquipoModel> {
    return this.http.put<EquipoModel>(`${this.API_URL}/equipos/editar/${equipo._id}`, equipo);
  }

  eliminarEquipo(idequipo : string) : Observable<EquipoModel> {
    //console.log(idequipo);
    // return this.http.delete<EquipoModel>(`${this.API_URL}/eliminar/${idequipo}`);
    return this.http.delete<EquipoModel>(this.API_URL+'/equipos/eliminar/'+idequipo);

  }
  getEquiposAsignados(nombreEmpleado: string): Observable<any> {
    const params = new HttpParams().set('nombreEmpleado', nombreEmpleado);
    return this.http.get(`${this.API_URL}/asignacion/equiposAsignado`, { params });
  }
  getEquiposfechas(inicio: string , fin:string): Observable<any> {
    const params = new HttpParams().set('inicio', inicio).set('fin', fin);
    return this.http.get(`${this.API_URL}/asignacion/equiposAsignados`, { params });
  
  }
}