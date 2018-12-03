//components
import Home from "../components/home/home";
import Login from "../components/login/login";
import Reg from "../components/reg/reg";
import Sign from "../components/sign/sign";
import PeopleList from "../components/peopleList/peopleList";
import Arrive from "../components/arrive/arrive";
import Feedback from "../components/feedback/feedback";
import Set from "../components/set/set";
import NoFound from "../components/noFound/noFound";
import AddPeople from "../components/addPeople/addPeople";
import SignStep from "../components/signStep/signStep";
import UserList from "../components/userList/userList";
import SignSucc from "../components/sign/signSucc/signSucc";
import SignErr from "../components/sign/signErr/signErr";
import Parent from "../components/parent/parent";


//routes
export const routes = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/login',
        component:Login,
        title:'登录'
    },
    {
        path:'/reg',
        component:Reg,
        title:'注册'
    },
    {
        path:'/sign',
        component:Sign,
        title:'报名表'
    },
    {
        path:'/signSuccess',
        component:SignSucc,
        title:'报名成功'
    },
    {
        path:'/signErr',
        component:SignErr,
        title:'报名失败'
    },
    {
        path:'/peopleList',
        component:PeopleList,
        title:'对接表'
    },
    {
        path:'/addPeople',
        component:AddPeople,
        title:'添加人员'
    },
    {
        path:'/parent',
        component:Parent,
        title:'查看长者'
    },
    {
        path:'/arrive',
        component:Arrive,
        title:'现场签到'
    },
    {
        path:'/feedback',
        component:Feedback,
        title:'现场反馈'
    },
    {
        path:'/set',
        component:Set,
        title:'设置'
    },
    {
        path:'/signstep',
        component:SignStep,
        title:'报名现况'
    },
    {
        path:'/userList',
        component:UserList,
        title:'团队成员'
    },
    //404路由放最后
    {
        path:'/404',
        component:NoFound
    }
];
