import { DataService } from 'src/app/services/data.service';
import { OnInit, Component, Input } from '@angular/core';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-get-liveUpdate',
    template: `

<p *ngIf="err">No Data Found</p>
<div class="d-flex flex-column justify-content-around" *ngIf="!err">
    <div class="card mb-2 mt-1">
        <div class="card-header">
            <h4>25</h4>
        </div>
        <div class="card-body" *ngIf="updateData.p25">
            <p *ngIf="updateData.p25.length<=0">No Data Found</p>
            <div class="row justify-content-between" *ngIf="updateData.p25.length>0">
                <div class='p-1 m-2 ' *ngFor="let item of updateData.p25">
                    <div class='row'>
                    <small class='float-left badge  badge-primary'>{{item.by}}</small>
                    <div class='col'>
                    <img [src]="baseurl+imgPath" class='img-fluid w-25' [alt]="'Uploaded By'+item.by" *ngFor="let imgPath of item.img">
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-2 mt-1">
        <div class="card-header">
            <h4>50</h4>
        </div>
        <div class="card-body" *ngIf="updateData.p50">
            <p *ngIf="updateData.p50.length<=0">No Data Found</p>
            <div class="row justify-content-betweenjustify-content-between" *ngIf="updateData.p50.length>0">
                <div class='p-1 m-2'  *ngFor="let item of updateData.p50">
                <div class='row'>
                    <span class='badge badge-primary'>
                    <p class='float-left'>{{item.by}}</p>
                    </span>
                    <div class='col'>
                    <img [src]="baseurl+imgPath" class='img-fluid w-25' [alt]="'Uploaded By'+item.by" *ngFor="let imgPath of item.img">
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-2 mt-1">
        <div class="card-header">
            <h4>75</h4>
        </div>
        <div class="card-body" *ngIf="updateData.p75">
            <p *ngIf="updateData.p75.length<=0">No Data Found</p>
            <div class="row justify-content-between" *ngIf="updateData.p75.length>0">
            <div class='p-1 m-2'  *ngFor="let item of updateData.p75">
                <div class='row'>
                    <small class='float-left badge   badge-primary text-center'>{{item.by}}</small>
                    <div class='col'>
                    <img [src]="baseurl+imgPath" class='img-fluid w-25' [alt]="'Uploaded By'+item.by" *ngFor="let imgPath of item.img">
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-2 mt-1">
        <div class="card-header">
            <h4>100</h4>
        </div>
        <div class="card-body" *ngIf="updateData.p100">
            <p *ngIf="updateData.p100.length<=0">No Data Found</p>
            <div class="row justify-content-between" *ngIf="updateData.p100.length>0">
            <div class='p-1 m-2'  *ngFor="let item of updateData.p100">
                <div class='row'>
                    <small class='float-left badge badge-primary text-center'>{{item.by}}</small>
                    <div class='col'>
                    <img [src]="baseurl+imgPath" class='img-fluid w-25' [alt]="'Uploaded By'+item.by" *ngFor="let imgPath of item.img">
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



    `
})

export class GetLiveUpdateComponent implements OnInit {
    @Input() inputData: any;
    baseurl: any;
    err = null;
    customPath = false;
    updateData = {
        p25: null,
        p50: null,
        p75: null,
        p100: null
    };
    constructor(private data: DataService) { }
    ngOnInit(): void {
        this.data.getLiveUpdate(this.inputData)
            .subscribe(data => {
                this.updateData.p25 = data.filter(a => (a.percentage === 25));
                this.updateData.p50 = data.filter(a => (a.percentage === 50));
                this.updateData.p75 = data.filter(a => (a.percentage === 75));
                this.updateData.p100 = data.filter(a => (a.percentage === 100));
            }, (err) => this.err = err);
        this.baseurl = this.data.baseurl;
    }
}
