import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TarifPageComponent } from './pages/tarif-page/tarif-page.component';
import { StatistiquePageComponent } from './pages/statistique-page/statistique-page.component';
import { MobileMoneyPageComponent } from './pages/mobile-money-page/mobile-money-page.component';
import { OffrePageComponent } from './pages/offre-page/offre-page.component';
import { GroupButtonComponent } from './components/group-button/group-button.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DetailsoffreComponent } from './components/detailsoffre/detailsoffre.component';
import { OffreComponent } from './components/offre/offre.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { DepotComponent } from './components/depot/depot.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    AccueilPageComponent,
    AccueilComponent,
    NavbarComponent,
    TarifPageComponent,
    StatistiquePageComponent,
    MobileMoneyPageComponent,
    OffrePageComponent,
    GroupButtonComponent,
    AboutPageComponent,
    DetailsoffreComponent,
    OffreComponent,
    CategorieComponent,
    FooterComponent,
    TarifComponent,
    DepotComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Injectable],
  bootstrap: [AppComponent]
})
export class AppModule { }
