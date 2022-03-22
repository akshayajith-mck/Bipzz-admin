import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { OnInit, Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-album-list',
    providers: [MessageService, DialogService],
    template: `
		<p class=" alert alert-danger" *ngIf="err || !respData">No Data Found</p>
		<div *ngIf="respData && !err">
			<div class="row mt-5">
				<div class="row" *ngIf="inputData.nflag == 'img'">
					<img
						*ngFor="let item of respData.path; let i = index"
						[src]="baseurl + item"
						[alt]="respData.albumName"
                        class="img-fluid col card-outline-info card"
                        style='max-width:240px ;max-height:240px'

						(click)="showLightbox(i, 'img')"
					/>
				</div>
				<div
					class="row"
					*ngIf="inputData.nflag == 'vdo'"
				>
					<video
						(click)="showLightbox(i, 'vdo')"
						class="img-fluid col card-outline-info card"
						*ngFor="let item of respData.path; let i = index"
                        [src]="baseurl + item"
                        style='max-width:240px ;max-height:240px'
					></video>
				</div>
			</div>
		</div>
		<ng-image-fullscreen-view
			[images]="imageObject"
			[imageIndex]="selectedImageIndex"
			[show]="showFlag"
			(close)="closeEventHandler()"
		></ng-image-fullscreen-view>
	`,
})
export class AlbumListViewComponent implements OnInit {
    ////// preview image
    showFlag = false;
    selectedImageIndex = -1;
    imageObject: Array<object> = [];

    /////////// preview image
    @Input() inputData: any;

    respData: any;
    err: false;
    baseurl: string;
    customPath: string;
    flag: any;
    constructor(private data: DataService) { }
    ngOnInit(): void {
        this.baseurl = this.data.baseurl;
        this.data.getAlbumDataById(this.inputData).subscribe(
            (data) => {
                this.respData = data;
            }
        );
    }
    albumViewer(path, flag) {
        this.flag = flag;
        this.customPath = this.baseurl + path;
    }
    showLightbox(i, flag) {
        this.showFlag = true;
        this.selectedImageIndex = i;
        this.imageObject = this.respData.path.map((x) => {
            if (flag == 'img') {
                return {
                    image: this.baseurl + x,
                    thumbImage: this.baseurl + x,
                    alt: `${this.respData.albumName}`,
                    title: `${this.respData.albumName}`,
                };
            } else {
                return {
                    video: this.baseurl + x,
                    thumbImage: this.baseurl + x,
                    alt: `${this.respData.albumName}`,
                    title: `${this.respData.albumName}`,
                }
            }

        });
    }

    closeEventHandler() {
        this.showFlag = false;
        this.selectedImageIndex = -1;
    }
}
