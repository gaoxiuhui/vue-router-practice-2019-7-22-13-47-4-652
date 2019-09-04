<template>
    <div>
        <button @click="back">返回</button>
        <br/>
        <span>当前用户:{{username}}</span>
        <br/>
        <router-link :to="{name:'MyInfo'}">我的</router-link>
        <br/>
        <router-link :to="{name:'list'}">Todolist列表</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
            name: 'User',
            props:{username:String},
            methods:{
                    back:function(){
                        if(confirm("确认返回?")){
                                 this.$router.push("/");
                         }
                         }
            }
    }
</script>

<style scoped>
    button{
        height: 20px;
        float:"left"; 
    }
    span{
        display: block;
        margin-top: 0px;
        float:"right";
    }
</style>