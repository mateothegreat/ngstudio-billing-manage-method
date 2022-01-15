import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BillingManageMethodModule } from '../../projects/billing-manage-method/src/lib/billing-manage-method.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({

    declarations: [

        AppComponent

    ],

    imports: [

        BrowserModule,
        BillingManageMethodModule,
        ClarityModule,
        BrowserAnimationsModule

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
