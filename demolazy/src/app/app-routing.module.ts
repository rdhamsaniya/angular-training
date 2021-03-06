import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'customers',
    
    loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule),
    // data: {
    //   preload: true
    // }
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      //for custome preloading
      // preloadingStrategy: CustomPreloading
      
      //for Built in Preload
      // preloadingStrategy: PreloadAllModules

    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
