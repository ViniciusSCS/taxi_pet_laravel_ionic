import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { ClienteCadastroPage } from '../pages/clientecadastro/clientecadastro';
import { LoginPage } from '../pages/login/login';
import { startPage } from '../pages/start/start';
import { PetPage } from '../pages/pet/pet';
import { CorridaPage } from '../pages/corrida/corrida';
import { AnimaisPage } from '../pages/animais/animais';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/authservice/authservice';
import { AnimaisProvider } from '../providers/animais/animais';

@NgModule({
  declarations: [
    MyApp,
    ClienteCadastroPage,
    HomePage,
    TabsPage,
    AboutPage,
    ContactPage,
    CadastroPage,
    LoginPage,
    startPage,
    PetPage,
    AnimaisPage,
    CorridaPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    ContactPage,
    ClienteCadastroPage,
    CadastroPage,
    LoginPage,
    startPage,
    PetPage,
    AnimaisPage,
    CorridaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AnimaisProvider
  ]
})
export class AppModule {}
