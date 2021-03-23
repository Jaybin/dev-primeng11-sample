import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { PickListModule } from 'primeng/picklist';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    ButtonModule,
    RippleModule,
    TableModule,
    BreadcrumbModule,
    CardModule,
    TooltipModule,
    BadgeModule,
    PickListModule,
    DropdownModule,
    ToastModule,
    InputTextModule
  ],
  exports: [
    ButtonModule,
    RippleModule,
    TableModule,
    BreadcrumbModule,
    CardModule,
    TooltipModule,
    BadgeModule,
    PickListModule,
    DropdownModule,
    ToastModule,
    InputTextModule
  ]
})
export class PrimeNgModule {}