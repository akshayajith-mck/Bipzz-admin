import { GlobalInterceptorService } from './global-interceptor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS,  } from '@angular/common/http';




@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: GlobalInterceptorService,
            multi: true,
        }
    ]

})
export class serviceModule { }
