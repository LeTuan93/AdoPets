import Home from "~/pages/Home";
import Account from "~/pages/Account";
import Contact from "~/pages/Contact";
import Cart from "~/pages/Cart";
import Shop from "~/pages/Shop";
import Product from "~/pages/Product";
import routesConfix from "~/config/routes";

// Không đăng nhập vẫn xem được
const publicRoutes = [
    {path: routesConfix.home,component: Home},
    {path: routesConfix.account ,component :Account},
    {path: routesConfix.shop ,component : Shop},
    {path: routesConfix.cart ,component : Cart},
    {path: routesConfix.contact ,component :Contact},
    {path: routesConfix.id , component: Product}
];

//Phải đăng nhập mới xem được
const privateRoutes = [


];
export { publicRoutes, privateRoutes };