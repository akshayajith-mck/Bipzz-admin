import { DataService } from 'src/app/services/data.service';
import { OnInit, Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-promotion-creation',
    providers: [MessageService],
    template: `
    <p-toast position="top-center"></p-toast>
    <form [formGroup]='promoCreation' novalidate='' (ngSubmit)='onFaqSubmit(promoCreation.value)'>
    <div class="form-group">
    <input type='text' class="form-control" formControlName="name" placeholder="Enter the name">
    </div>
    <div class="form-group">
    <input type='number' class="form-control" formControlName="price" placeholder="Enter the price">
    </div>
    <div class="form-group">
    <input type='number' class="form-control" formControlName="percentage" placeholder="Enter the percentage">
    </div>
    <button [disabled]="!promoCreation.value.price||
    !promoCreation.value.percentage ||!promoCreation.value.name" class="col btn btn-primary">Create</button>
</form>`,
})
export class PromotionCreationComponent implements OnInit {
    promoCreation: FormGroup;
    errorArray = ['', null, undefined];
    @Input() inputData: any;
    constructor(private fb: FormBuilder, private data: DataService, private messageService: MessageService) { }
    ngOnInit(): void {
        this.promoCreation = this.fb.group({
            name: ['', Validators.required],
            price: ['', Validators.required],
            percentage: ['', Validators.required],
        });
    }
    onFaqSubmit(param) {
        this.data.promoCreate(param)
            .subscribe(data => {
                this.messageService.add({
                    severity: 'success', sticky: false, life: 1500, summary: 'Info Message',
                    detail: data.message
                });
                this.promoCreation.reset();
            }
                , (err) => {
                    this.messageService.add({
                        severity: 'error', sticky: false, life: 1500, summary: 'Info Message',
                        detail: err
                    });
                    this.promoCreation.reset();
                }
            );
    }
}
