import { DataService } from 'src/app/services/data.service';
import { OnInit, Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'app-promotion-updation',
    providers: [MessageService],
    template: `
    <p-toast position="top-center"></p-toast>
    <form [formGroup]='promoUpdate' novalidate='' (ngSubmit)='onFaqSubmit(promoUpdate.value)'>
    <div class="form-group">
        <input type="text" formControlName="name" class="form-control" placeholder="Enter the name"
            required />
    </div>
    <div class="form-group">
        <input type="text" formControlName="price" class="form-control" placeholder="Enter the price"
            required />
    </div>
    <div class="form-group">
        <input type="text" formControlName="percentage" class="form-control" placeholder="Enter the percentage"
            required />
    </div>
    <button [disabled]="!promoUpdate.value.name &&!promoUpdate.value.price &&
    !promoUpdate.value.percentage" class="col btn btn-primary">Update</button>
</form>`,
})
export class PromotionUpdationComponent implements OnInit {
    promoUpdate: FormGroup;
    @Input() inputData: any;
    constructor(private fb: FormBuilder, private data: DataService, private messageService: MessageService) { }
    ngOnInit(): void {
        this.promoUpdate = this.fb.group({
            name: [this.inputData.name],
            price: [this.inputData.price],
            percentage: [this.inputData.percentage],
            promoId: [this.inputData._id],
        });
    }
    onFaqSubmit(param) {
        this.data.promoUpdate(param)
            .subscribe(data => {
                this.messageService.add({
                    severity: 'success', sticky: false, life: 1500, summary: 'Info Message',
                    detail: data.message
                });
                // this.promoUpdate.reset();
            }
                , (err) => {
                    this.messageService.add({
                        severity: 'error', sticky: false, life: 1500, summary: 'Error Message',
                        detail: err
                    });
                    // this.promoUpdate.reset();
                }
            );
    }
}
