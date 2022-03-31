import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
    imports: [
        MatFormFieldModule,
        MatToolbarModule,
        FormsModule,
        MatAutocompleteModule,
        NgbPaginationModule,
        ConfirmDialogModule,
        DialogModule,
        ButtonModule,
        ToastModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule
    ],
    exports: [
        MatFormFieldModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        ConfirmDialogModule,
        MatAutocompleteModule,
        NgbPaginationModule,
        DialogModule,
        ButtonModule,
        ToastModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,


    ],
    providers: [
    ]
})

export class AngularMaterialModule { }
