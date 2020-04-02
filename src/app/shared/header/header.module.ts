import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';

import { TopWatchersComponent } from '../../shared/top-watchers/top-watchers.component';

@NgModule({
  declarations: [HeaderComponent, TopWatchersComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
