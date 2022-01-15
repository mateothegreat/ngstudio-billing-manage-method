import { Injectable } from '@angular/core';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { BillingManageMethodComponent } from './billing-manage-method.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { CreditCard } from './credit-card-form/credit-card';

@Injectable({
    providedIn: 'root'
})
export class BillingManageMethodService {

    private subject$: Subject<CreditCard> = new Subject();

    public formGroup = new FormGroup({

        name: new FormControl('', [

            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(50)

        ]),

        number: new FormControl('', [

            Validators.required,
            Validators.minLength(15),
            Validators.maxLength(16)

        ]),

        expiration: new FormControl('', [

            Validators.required,
            Validators.minLength(15),
            Validators.maxLength(16)

        ]),

        postal: new FormControl('', [

            Validators.required,
            Validators.minLength(15),
            Validators.maxLength(16)

        ])

    });

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

    }

    public open(): Observable<CreditCard> {

        this.dynamicComponentFactoryService.createInApplicationRoot('billing-manage-method', BillingManageMethodComponent);

        return this.subject$;

    }

    public cancel(): void {

        this.dynamicComponentFactoryService.destroy('billing-manage-method');

    }

    public close(): void {

        this.cancel();

        this.subject$.next(this.formGroup.value);

    }

}
