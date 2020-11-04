import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PropoverComponent } from './propover.component';
import { AppRoutingModule } from "../app-routing.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AppRoutingModule,
        // ListarApiPageRoutingModule
    ],
    declarations: [PropoverComponent]
})
export class ListarApiPageModule { }
