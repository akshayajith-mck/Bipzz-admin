import { DataService } from 'src/app/services/data.service';
import { OnInit, Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-banner-Updation',
    providers: [MessageService],
    template: `
    <p-toast position="top-center"></p-toast>
    <form [formGroup]='bannerForm' novalidate='' (ngSubmit)='onSubmit(bannerForm.value)'>
    <div class="form-group">
            <input type="text" formControlName='bannerName' class="form-control" placeholder="Enter the bannerName">
            <span class=" mt-1 error error-danger text-danger text-center"
                *ngIf="!bannerForm.controls['bannerName'].valid && bannerForm.controls['bannerName'].touched">
                Please enter a banner Name</span>
    </div>
    <div class="form-group">
            <input type="file" (change)='onFileSelect($event)'
             class="form-control" placeholder="Choose your Picture"
            accept="image/x-png,image/gif,image/jpeg" >
            <span class=" mt-1 error error-danger text-danger text-center"
                *ngIf="!bannerForm.controls['slider'].valid && bannerForm.controls['slider'].touched">
                Please select a Picture</span>
    </div>
    <button type='Submit'
    [disabled]='!bannerForm.value.slider|| !bannerForm.value.bannerName'
     class='btn btn-primary'>Submit</button>

    </form>

    `
})
export class BannerUpdationComponent implements OnInit {
    bannerForm: FormGroup;
    @Input() inputData: any;
    constructor(private fb: FormBuilder, private data: DataService, private messageService: MessageService) { }
    ngOnInit(): void {
        this.bannerForm = this.fb.group({
            bannerName: [this.inputData.sliderName, Validators.required],
            slider: null
        });
    }
    onFileSelect(event) {
        const file = event.target.files[0];
        this.bannerForm.get('slider').setValue(file);
        this.bannerForm.get('slider').markAsTouched();
    }
    onSubmit(val) {
        const params: FormData = new FormData();
        params.append('id', this.inputData._id);
        params.append('slider', this.bannerForm.get('slider').value);
        params.append('sliderName', this.bannerForm.get('bannerName').value);
        this.data.updateSlider(params).subscribe(data => {
            this.messageService.add({ severity: 'success', sticky: false, life: 1500, summary: 'Info Message', detail: data.message });

        }, err => {
            this.messageService.add({ severity: 'error', sticky: false, life: 1500, summary: 'Info Message', detail: err });
        });
    }

}
