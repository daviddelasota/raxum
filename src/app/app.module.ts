import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Rutas
import { routing, appRoutingProviders } from './app.routing';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Componentes
import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
//Componentes.menu
import { MenuLeftComponent } from './components/menu/menu.left.component';
import { MenuTopCenterComponent } from './components/menu/menu.top.center.component';
//Componentes.body
import { BodyComponent } from './components/body/body.component';
import { ScholarComponent } from './scholar/scholar.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ExperienceComponent } from './experience/experience.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuLeftComponent,
    MenuTopCenterComponent,
    BodyComponent,
    ScholarComponent,
    CurriculumComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
