// MODULOS
import { ElementRef, HostListener, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//hay que importar esto manualmente
import { HttpClientModule } from '@angular/common/http';

// COMPONENTES
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
import { CardVentasComponent } from './main/seccion-experiencia-laboral/card-ventas/card-ventas.component';
import { CardMaquetacionComponent } from './main/seccion-experiencia-laboral/card-maquetacion/card-maquetacion.component';
import { CardPcComponent } from './main/seccion-experiencia-laboral/card-pc/card-pc.component';
import { CardSecuComponent } from './main/seccion-educacion-formal/card-secu/card-secu.component';
import { CardUniComponent } from './main/seccion-educacion-formal/card-uni/card-uni.component';
import { CardTecComponent } from './main/seccion-educacion-formal/card-tec/card-tec.component';
import { ColapsableUnlaComponent } from './modals/colapsable-unla/colapsable-unla.component';
import { ColapsableIspcComponent } from './modals/colapsable-ispc/colapsable-ispc.component';
import { ColapsableIdoComponent } from './modals/colapsable-ido/colapsable-ido.component';
import { CardInglesComponent } from './main/seccion-complementaria/card-ingles/card-ingles.component';
import { CardDigitalersComponent } from './main/seccion-complementaria/card-digitalers/card-digitalers.component';
import { CardSeProgramarComponent } from './main/seccion-complementaria/card-se-programar/card-se-programar.component';
import { CardYoProgramoComponent } from './main/seccion-complementaria/card-yo-programo/card-yo-programo.component';
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
    CardVentasComponent,
    CardMaquetacionComponent,
    CardPcComponent,
    CardSecuComponent,
    CardUniComponent,
    CardTecComponent,
    ColapsableUnlaComponent,
    ColapsableIspcComponent,
    ColapsableIdoComponent,
    CardInglesComponent,
    CardDigitalersComponent,
    CardSeProgramarComponent,
    CardYoProgramoComponent,
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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
