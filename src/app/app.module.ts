// MODULOS
import { ElementRef, HostListener, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//hay que importar esto manualmente. sirve para la comunicacion del front con el back
import { HttpClientModule } from '@angular/common/http';

/*
      ========================================================
      importacion de los modulos para los formularios reactivos
      ========================================================
*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ====================COMPONENTES====================
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { LogoAPComponent } from './header/logo-ap/logo-ap.component';
import { SocialMediaComponent } from './header/social-media/social-media.component';
import { BtnBurgerComponent } from './header/btn-burger/btn-burger.component';
import { LoginComponent } from './modals/login/login.component';
import { MainContenedorComponent } from './main/main-contenedor/main-contenedor.component';
import { SeccionHeroComponent } from './main/seccion-hero/seccion-hero.component';
import { SeccionAboutMeComponent } from './main/seccion-about-me/seccion-about-me.component';
import { SeccionExperienciaLaboralComponent } from './main/seccion-experiencia-laboral/seccion-experiencia-laboral.component';
import { SeccionEducacionFormalComponent } from './main/seccion-educacion-formal/seccion-educacion-formal.component';
import { SeccionEducacionComplementariaComponent } from './main/seccion-educacion-complementaria/seccion-educacion-complementaria.component';
import { SeccionHardSoftSkillsComponent } from './main/seccion-hard-soft-skills/seccion-hard-soft-skills.component';
import { SeccionProyectosComponent } from './main/seccion-proyectos/seccion-proyectos.component';
import { FooterContenedorComponent } from './footer/footer-contenedor/footer-contenedor.component';
import { AcercaDeComponent } from './main/seccion-about-me/acerca-de/acerca-de.component';
import { FotoPerfilComponent } from './main/seccion-about-me/foto-perfil/foto-perfil.component';
import { DescripcionComponent } from './main/seccion-about-me/descripcion/descripcion.component';
import { CardSoftSkillsComponent } from './main/seccion-hard-soft-skills/card-soft-skills/card-soft-skills.component';
import { CardHardSkillsComponent } from './main/seccion-hard-soft-skills/card-hard-skills/card-hard-skills.component';
import { CardTrecafeComponent } from './main/seccion-proyectos/card-trecafe/card-trecafe.component';
import { CardCardFormComponent } from './main/seccion-proyectos/card-card-form/card-card-form.component';
import { CardRepCelComponent } from './main/seccion-proyectos/card-rep-cel/card-rep-cel.component';
import { CardFormInteracComponent } from './main/seccion-proyectos/card-form-interac/card-form-interac.component';
import { CardEditorComponent } from './main/seccion-proyectos/card-editor/card-editor.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderDahsboardComponent } from './dashboard/header-dahsboard/header-dahsboard.component';
import { MainDahsboardComponent } from './dashboard/main-dahsboard/main-dahsboard.component';
import { SharedComponent } from './shared/shared.component';
//------------------------CURRICULUM-------------------
import { CvComponent } from './shared/cv/cv.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { HeaderEditarComponent } from './editar-perfil/header-editar/header-editar.component';
import { MainEditarComponent } from './editar-perfil/main-editar/main-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LogoAPComponent,
    SocialMediaComponent,
    BtnBurgerComponent,
    LoginComponent,
    MainContenedorComponent,
    SeccionHeroComponent,
    SeccionAboutMeComponent,
    SeccionExperienciaLaboralComponent,
    SeccionEducacionFormalComponent,
    SeccionEducacionComplementariaComponent,
    SeccionHardSoftSkillsComponent,
    SeccionProyectosComponent,
    FooterContenedorComponent,
    AcercaDeComponent,
    FotoPerfilComponent,
    DescripcionComponent,
    CardSoftSkillsComponent,
    CardHardSkillsComponent,
    CardTrecafeComponent,
    CardCardFormComponent,
    CardRepCelComponent,
    CardFormInteracComponent,
    CardEditorComponent,
    IndexComponent,
    DashboardComponent,
    HeaderDahsboardComponent,
    MainDahsboardComponent,
    SharedComponent,
    //------------------------CURRICULUM-------------------
    CvComponent,
    EditarPerfilComponent,
    HeaderEditarComponent,
    MainEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    //modulos de formularios reactivos
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
