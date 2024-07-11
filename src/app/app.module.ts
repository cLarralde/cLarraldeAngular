import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { FormsModule } from '@angular/forms';
import { CyberpunkTiendaComponent } from './cyberpunk-tienda/cyberpunk-tienda.component';
import { CyberpunkAboutComponent } from './cyberpunk-about/cyberpunk-about.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputNumberRefactoredComponent } from './input-number-refactored/input-number-refactored.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    CyberpunkTiendaComponent,
    CyberpunkAboutComponent,
    CarritoComponent,
    InputNumberRefactoredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
