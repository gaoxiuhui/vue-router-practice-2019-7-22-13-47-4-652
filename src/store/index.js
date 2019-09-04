
import axios from "axios"
export default ({
    strict: true,
    state: {
        todoList: [
            {status: 'completed', content: '吃饭'},
            {status: 'completed', content: '睡觉'},
            {status: 'completed', content: '打豆豆'}
        ],
        currentFilter: 'all',    
    },
    //从数据仓库中获取数值
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    // 修改
    mutations: {
        handleCreateTodo:function(state,content) {
            state.todoList.push({
                status: 'active',
                content:content
            })
        },
        handleToggleActive:function(state,index){
           state.todoList[index].status =state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        handleFilter:function(state,currentFilter){
            state.currentFilter = currentFilter;
        },
        //处理mutation 数据，操作state
        initTodos:function(state,todos){
             state.todoList=todos;
        }
    },
    actions:{
        //获取
        fetchTodos(context){
            //请求网络
            const url= "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.get(url).then(function(response){      
                //发出mutation          
                 context.commit('initTodos',response.data);
            }).catch(function(error){
                   console.log(error.response);
            })
        },
        //插入
        createTodo(context){
             //请求网络
             const url= "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
             axios.post(url,{
                  content:"高阳",
                  status:'active'
             }).then(function(response){
                 context.dispatch("createTodo");  
             }).catch(function(error){                 
                   console.log(error.response);
            })
        },
        //更新
        updateTodo(context){
            //请求网络
            const url= "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.put(url,{
                 id:14,
                 content:"高阳阳阳",
                 status:'active'
            }).then(function(response){
                context.dispatch("createTodo");  
            }).catch(function(error){                 
                  console.log(error.response);
           })
        },        
    }
})
