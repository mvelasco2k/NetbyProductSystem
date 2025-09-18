import { Routes } from '@angular/router';
import { MainList } from './main-list/main-list';
import { ManageProduct } from './manage-product/manage-product';
import { ManageTransactions } from './manage-transactions/manage-transactions';

export const routes: Routes = [
    {path:'', component: MainList}, //localhost:4200/
    {path:'manage-product', component: ManageProduct},
    {path:'manage-transactions', component: ManageTransactions},
    {path:'manage-product/:id', component: ManageProduct }
];
