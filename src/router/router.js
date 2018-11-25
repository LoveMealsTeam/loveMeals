//components
import Home from "../components/home/home";
import Login from "../components/login/login";
import Reg from "../components/reg/reg";
import NoFound from "../components/noFound/noFound";



//routes
export const routes = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
         path:'/login',
        component:Login
    },
    {
        path:'/reg',
        component:Reg
    },


    //404路由放最后
    {
        path:'/404',
        component:NoFound
    }
];
