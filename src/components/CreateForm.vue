<template>
    <div class="input-form">
        <input type="input" v-model="inputtingItem">
        <button @click="handleCreateTodo">Add</button>
    </div>
</template>

<script>
    export default {
        name: "create-form",      
        data:function(){
              return{
                inputtingItem: ""
              }
        },
        created:function(){
            // 组件里添加dispatch
            this.$store.dispatch("createTodo");   
            this.$store.dispatch("updateTodo");      
        },
        methods: {
            handleCreateTodo: function () {               
                //修改为mutation
              this.$store.commit("handleCreateTodo",this.inputtingItem);
            }
        }
    }
</script>

<style scoped>

</style>
