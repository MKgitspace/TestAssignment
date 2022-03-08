import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { PreviewComponent } from './preview/preview.component';
import { MainPageComponent } from './main-page.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    MainPageComponent,
    SideBarComponent,
    FooterComponent,
    PreviewComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
