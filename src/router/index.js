import Router from 'vue-router';
import Vue from 'vue';
import Welcome from '../components/Welcome.vue';
import List from '../components/List.vue';
import MyInfo from '../components/MyInfo.vue';
import Home from '../components/Home.vue';
Vue.use(Router)
export default new Router({
        routes: [
            {path: "/", component: Welcome},  
            {path: "/user/:username", component:Home,props:true, 
               children:[
                {path: "MyInfo", name:"MyInfo",component: MyInfo},
                {path: "list", name:"list",component:List}   
                 ]}                 
        ]
})