import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { TarifPageComponent } from './pages/tarif-page/tarif-page.component';
import { OffrePageComponent } from './pages/offre-page/offre-page.component';
import { StatistiquePageComponent } from './pages/statistique-page/statistique-page.component';
import { MobileMoneyPageComponent } from './pages/mobile-money-page/mobile-money-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: 'accueil',
    component:AccueilPageComponent
  },
  {
    path: 'offres',
    component:OffrePageComponent
  },
  {
    path: 'tarifs',
    component:TarifPageComponent
  },
  {
    path: 'statistiques',
    component:StatistiquePageComponent
  },
  {
    path: 'mobile-money',
    component:MobileMoneyPageComponent
  },
  {
    path: 'login',
    component:LoginPageComponent
  },
  {
    path: 'about',
    component:AboutPageComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
