import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileRoutingModule } from "./profile.routing.module";
import { ProfileComponent } from "./profile.component";

import { HeaderModule } from "../../shared/header/header.module";
import { FooterModule } from "../../shared/footer/footer.module";

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class ProfileModule {}
