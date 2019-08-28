import { NgModule } from '@angular/core';
import { BaseHeaderComponent } from './components/base-header/base-header.component';
import { BaseSidebarComponent } from "./components/base-sidebar/base-sidebar.component";
import { BaseFooterComponent } from "./components/base-footer/base-footer.component";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BaseHeaderComponent,
        BaseSidebarComponent,
        BaseFooterComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        BaseHeaderComponent,
        BaseSidebarComponent,
        BaseFooterComponent
    ]
})

export class BaseModule { }