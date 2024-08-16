import config from '~/config';

// Layouts
import Layout from "~/components/layout";

// Pages

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Dashboard from '~/pages/Dashboard';
import Logout from '~/pages/Logout';
import Forget from '~/pages/Forget';

import Overview from "~/pages/Overview";
import Products from "~/pages/Products";
import ProductAll from "~/pages/Products/ProductAll";
import ProductsCategories from "~/pages/Products/ProductsCategories";
import Users from "~/pages/Users";
import Sales from "~/pages/Sales";
import Orders from "~/pages/Orders";
import Analytics from "~/pages/Analytics";
import Settings from "~/pages/Settings";
import Youtube from "~/pages/Youtube";
import Currency from "~/pages/Currency";
import LoginOne from "~/pages/LoginOne";




// Public routes
const publicRoutes = [
    { path: config.routes.index, component: Login},
    { path: config.routes.home, component: Home },     
    { path: config.routes.login, component: Login},
    { path: config.routes.logout, component: Logout},
    { path: config.routes.register, component: Register},
    { path: config.routes.forget, component: Forget},
    { path: config.routes.youtube, component: Youtube},
    { path: config.routes.currency, component: Currency},
    { path: config.routes.loginOne, component: LoginOne},

];

const privateRoutes = [
    { path: config.routes.dashboard, component: Dashboard , layout: Layout, title:'DASHBOARD PAGE' },   
    { path: config.routes.overview, component: Overview , layout: Layout, title:'Overview' },       
    { path: config.routes.productsCategories, component: ProductsCategories, layout: Layout, title:'PRODUCTS Categories PAGE' },
    { path: config.routes.productsAll, component: ProductAll, layout: Layout, title:'PRODUCTS ALL PAGE' },    
    { path: config.routes.products, component: Products, layout: Layout, title:'PRODUCTS PAGE' },
    { path: config.routes.users, component: Users, layout: Layout , title:'USER PAGE' },
    { path: config.routes.sales, component: Sales, layout: Layout ,  title:'SALES PAGE' },
    { path: config.routes.orders, component: Orders, layout: Layout,  title:'ORDERS PAGE'  },
    { path: config.routes.analytics, component: Analytics, layout: Layout , title:'Analytics PAGE'  },
    { path: config.routes.settings, component: Settings, layout: Layout, title:'Settings PAGE'  },
];

export { publicRoutes, privateRoutes };
