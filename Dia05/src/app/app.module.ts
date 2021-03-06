import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PeticionPostService } from './servicio/peticion-post.service';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [PeticionPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
