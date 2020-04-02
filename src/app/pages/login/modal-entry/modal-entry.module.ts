import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEntryComponent } from './modal-entry.component';

@NgModule({
  declarations: [ModalEntryComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ModalEntryComponent]
})
export class ModalEntryModule {}
