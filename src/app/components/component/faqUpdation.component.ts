import { DataService } from 'src/app/services/data.service';
import { OnInit, Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'app-faq-updation',
    providers: [MessageService],
    template: `
    <p-toast position="top-center"></p-toast>
    <form [formGroup]='faqUpdation' novalidate='' (ngSubmit)='onFaqSubmit(faqUpdation.value)'>
    <div class="form-group">
        <input type="text" formControlName="question" class="form-control" placeholder="Enter the Question"
            required />
    </div>
    <div class="form-group">
        <input type="text" formControlName="answer" class="form-control" placeholder="Enter the Answer"
            required />
    </div>
    <button [disabled]="!faqUpdation.value.answer ||!faqUpdation.value.question" class="col btn btn-primary">Update</button>
</form>`,
})
export class FaqUpdationComponent implements OnInit {
    faqUpdation: FormGroup;
    errorArray = ['', null, undefined];
    @Input() inputData: any;
    constructor(private fb: FormBuilder, private data: DataService, private messageService: MessageService) { }
    ngOnInit(): void {
        this.faqUpdation = this.fb.group({
            answer: [this.inputData.answer],
            question: [this.inputData.question],
            faqId: [this.inputData._id],
        });
    }
    onFaqSubmit(param) {
        this.data.faqUpdate(param)
            .subscribe(data => {
                this.messageService.add({
                    severity: 'success', sticky: false, life: 1500, summary: 'Info Message',
                    detail: data.message + ' userId: ' + data.userId
                });
                this.faqUpdation.reset();
            }
                , (err) => {
                    this.messageService.add({
                        severity: 'error', sticky: false, life: 1500, summary: 'Info Message',
                        detail: err
                    });
                    this.faqUpdation.reset();
                }
            );
    }
}
