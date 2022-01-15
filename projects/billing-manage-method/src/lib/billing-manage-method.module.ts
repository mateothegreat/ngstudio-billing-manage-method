import { NgModule } from '@angular/core';
import { BillingManageMethodComponent } from './billing-manage-method.component';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { FancyFormFieldModule } from '@ngstudio/fancy-form-field';
import { InputFormFieldModule } from '@ngstudio/input-form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

    declarations: [

        BillingManageMethodComponent,
        CreditCardFormComponent

    ],

    imports: [

        CommonModule,
        ClarityModule,
        FancyFormFieldModule,
        InputFormFieldModule,
        ReactiveFormsModule

    ],

    exports: [

        BillingManageMethodComponent

    ]

})
export class BillingManageMethodModule {
}
