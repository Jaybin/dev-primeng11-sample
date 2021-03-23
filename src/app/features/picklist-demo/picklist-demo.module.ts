import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MessageService } from "primeng/api";
import { SharedModule } from "src/app/shared/shared.module";
import { PicklistDemoComponent } from "./picklist-demo.component";
import { ProductService } from "../../shared/services/product.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: PicklistDemoComponent
      }
    ])
  ],
  declarations: [PicklistDemoComponent],
  exports: [PicklistDemoComponent],
  providers: [
    ProductService,
    MessageService
  ]
})
export class PicklistDemoModule {}