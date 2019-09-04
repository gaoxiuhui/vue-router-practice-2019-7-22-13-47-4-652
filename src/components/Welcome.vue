<template>
    <div class="Welcome">
        <h1>Welcome Todo List！</h1>     
        <!-- v-model双向绑定传值 -->
        <input type="text" v-model="username"  placeholder="请输入姓名">
        <button @click="handleInput">开始使用</button>
    </div>
</template>
<script>
    export default{
        name:"Welcome",
        props:["username"],     
        data:function(){
                return{
                    username:""
                }
        },
        methods:{
            handleInput:function(){
                //编程式导航
                  this.$router.push('/user/'+this.username)
            }
        }
    }
</script>