import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ContactPage } from './contact.page'; // Import the ContactPage component

const routes: Routes = [
  {
    path: '',
    component: ContactPage, // Set the component to ContactPage
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ContactPage],
})
export class ContactPageModule {}
