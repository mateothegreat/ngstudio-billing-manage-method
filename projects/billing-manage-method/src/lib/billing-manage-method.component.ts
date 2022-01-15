import { Component, ViewEncapsulation } from '@angular/core';
import { BillingManageMethodService } from './billing-manage-method.service';

@Component({

    selector: 'lib-billing-manage-method',
    templateUrl: './billing-manage-method.component.html',
    styleUrls: [ './billing-manage-method.component.scss' ],
    encapsulation: ViewEncapsulation.None

})
export class BillingManageMethodComponent {

    public constructor(public readonly billingManageMethodService: BillingManageMethodService) {

    }

    public onCancelClick(): void {

        this.billingManageMethodService.close();

    }

    public onNextClick(): void {

        this.billingManageMethodService.close();

    }

}
