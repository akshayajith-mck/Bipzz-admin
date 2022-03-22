import { OnInit, Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
    selector: 'app-document-view',
    template: `

    `,
})

export class DocumentShowComponent implements OnInit {
    @Input() inputData: any;
    constructor(private data: DataService) { }
    ngOnInit(): void {
    }
}
