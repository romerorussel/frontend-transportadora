import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { CadastroTransportadoraComponent } from './components/cadastro-transportadora/cadastro-transportadora.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BuscaTransportadorasComponent } from './components/busca-transportadoras/busca-transportadoras.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxMaskModule } from 'ngx-mask'
import { ToastrModule } from 'ngx-toastr';
import { AlterarTransportadoraComponent } from './components/alterar-transportadora/alterar-transportadora.component';

//Rotas
const appRoutes: Routes = [
  { path: '' , component: BuscaTransportadorasComponent },
  {
    path: 'cadastro',
    component: CadastroTransportadoraComponent
  },
  { path: '**', component: PagenotfoundComponent },
  { path: 'transportadora/alterar/:id' , component: AlterarTransportadoraComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CadastroTransportadoraComponent,
    PagenotfoundComponent,
    BuscaTransportadorasComponent,
    AlterarTransportadoraComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot() // ToastrModule added
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
