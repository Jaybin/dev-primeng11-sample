import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./routing/app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
  ]
})
export class CoreModule {}