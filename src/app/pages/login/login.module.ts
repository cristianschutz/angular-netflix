import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";

import { ModalEntryModule } from "./modal-entry/modal-entry.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, ModalEntryModule]
})
export class LoginModule {}
