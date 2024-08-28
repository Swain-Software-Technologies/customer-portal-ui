import { HomeComponent } from "../home/home.component"
import { MasterComponent } from "../master/master.component"

export const MainRoutes = [

    
    {path: 'home', component: HomeComponent},
    {path: 'customer/add', loadChildren: () => import('../customer/customer.module').then(m=>m.CustomerModule)},
    {path: 'supplier/add', loadChildren: () => import('../supplier/supplier.module').then(m=>m.SupplierModule)}
]
