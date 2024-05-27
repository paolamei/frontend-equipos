import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'equipo',
        loadComponent: () => import('./equipo/equipo.component').then(m => m.EquipoComponent),
        data: {
          title: 'Equipo'
        }
      },
      {
        path: 'reportes',
        loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
        data: {
          title: 'Reportes'
        }
      },
    ]

  }
]