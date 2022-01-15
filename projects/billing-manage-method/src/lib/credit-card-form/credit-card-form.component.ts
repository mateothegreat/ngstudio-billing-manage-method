import { Component } from '@angular/core';
import { BillingManageMethodService } from '../billing-manage-method.service';

@Component({
    selector: 'lib-credit-card-form',
    templateUrl: './credit-card-form.component.html',
    styleUrls: [ './credit-card-form.component.scss' ]
})
export class CreditCardFormComponent {

    public constructor(public readonly billingManageMethodService: BillingManageMethodService) {

    }

}
