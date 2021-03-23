import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "primeng/api";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      }
    ])
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]    
})
export class HomeModule {}