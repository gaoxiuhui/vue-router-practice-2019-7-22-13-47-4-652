<template>
    <div id="myInfo">
        <p>用户图像：</p> 
        <img src="../assets/logo.png">
        <br/>
        <span>用户姓名：{{username}}</span>
        <br/>
        <span>用户电话：{{telephone}}</span>
    </div>
</template>

<script>
    export default {
        name:'myInfo',
        data:function(){
                return {
                    username:'我是谁', 
                     telephone:'12345678'
                }
        }
    }
</script>

<style scoped>
    img{
        height: 40px;
        width: 40px;
    }
</style>