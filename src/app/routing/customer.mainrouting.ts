import { CustomerComponent } from "../customer/customer.component"
import { HomeComponent } from "../home/home.component"
import { MasterComponent } from "../master/master.component"
import { SupplierComponent } from "../supplier/supplier.component"


export const MainRoutes = [

    {path: 'master', component: MasterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'customer', component: CustomerComponent},
    {path: 'supplier', component: SupplierComponent}
]
