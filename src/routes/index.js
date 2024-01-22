
//trước đăng nhập
import Home from "~/pages/Home";
import Account from "~/pages/Account";
import Contact from "~/pages/Contact";
import Cart from "~/pages/Cart";
import Shop from "~/pages/Shop";
import Product from "~/pages/Product";

//sau đăng nhập
import HomeAfter from "~/pagesAfterLogin/Home";
import AccountAfter from "~/pagesAfterLogin/Account";
import ContactAfter from "~/pagesAfterLogin/Contact";
import CartAfter from "~/pagesAfterLogin/Cart";
import ShopAfter from "~/pagesAfterLogin/Shop";
import ProductAfter from "~/pagesAfterLogin/Product";
// dùng chung
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
    {path: routesConfix.home,component: HomeAfter},
    {path: routesConfix.account ,component :AccountAfter},
    {path: routesConfix.shop ,component : ShopAfter},
    {path: routesConfix.cart ,component : CartAfter},
    {path: routesConfix.contact ,component :ContactAfter},
    {path: routesConfix.id , component: ProductAfter}
];
export { publicRoutes, privateRoutes };