import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThirdqiuzPage } from './thirdqiuz.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdqiuzPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThirdqiuzPage]
})
export class ThirdqiuzPageModule {}
