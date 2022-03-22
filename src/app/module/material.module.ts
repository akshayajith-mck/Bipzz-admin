import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// import { CalendarModule } from 'primeng/calendar';
// import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

// import { MultiSelectModule } from 'primeng/multiselect';
// import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
// import { InputTextModule } from 'primeng/inputtext';
// import { ProgressBarModule } from 'primeng/progressbar';
// import { DropdownModule } from 'primeng/dropdown';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
    imports: [
        MatFormFieldModule,
        MatToolbarModule,
        FormsModule,
        MatAutocompleteModule,
        NgbPaginationModule,
        ConfirmDialogModule,
        // TableModule,
        // CalendarModule,
        // SliderModule,
        DialogModule,
        // MultiSelectModule,
        // ContextMenuModule,
        ButtonModule,
        ToastModule,
        // InputTextModule,
        // ProgressBarModule,
        // DropdownModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatSelectModule
    ],
    exports: [
        MatFormFieldModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        ConfirmDialogModule,
        MatAutocompleteModule,
        NgbPaginationModule,

        // TableModule,
        // CalendarModule,
        // SliderModule,
        DialogModule,
        // MultiSelectModule,
        // ContextMenuModule,
        ButtonModule,
        ToastModule,
        // InputTextModule,
        // ProgressBarModule,
        // DropdownModule,

        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatSelectModule

    ],
    providers: [
    ]
})

export class AngularMaterialModule { }
