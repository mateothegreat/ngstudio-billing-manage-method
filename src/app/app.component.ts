import { Component } from '@angular/core';
import { BillingManageMethodService } from '../../projects/billing-manage-method/src/lib/billing-manage-method.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public constructor(private readonly billingManageMethodService: BillingManageMethodService) {

        billingManageMethodService.open();

    }

}
