import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { CounterButtonsComponent } from "./components/counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./components/counter-output/counter-output.component";
import { CustomCounterInputComponent } from "./components/custom-counter-input/custom-counter-input.component";
import { CounterComponent } from "./counter.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CounterComponent }
    ]),
    FormsModule
  ],
  declarations: [
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterInputComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {

}