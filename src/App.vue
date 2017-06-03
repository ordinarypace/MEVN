<template lang="html">
    <div>
        <h1>TODO LIST</h1>
        <TodoList :todo-list="todoList"></TodoList>
        <TodoAdd @addTodo="addTodo"></TodoAdd>
    </div>
</template>

<script>
    import TodoList from './components/todoList.vue';
    import TodoAdd from './components/todoAdd.vue';

    export default {
        name : 'todo-container',
        components : {
            TodoList,
            TodoAdd
        },
        data(){
            return {
                todoList : []
            };
        },

        beforeMount(){
            let _self = this;

            this.$http.get('/todo').then(function(res){
                if(res){
                    _self.todoList = res.data;
                }
            }).catch(function(err){
                console.log(err);

            });
        },

        methods : {
            addTodo(text){
                this.$http.post('/todo/add', {
                    text : text

                }).then(function(res){
                    if(res.data.success){
                        console.log('Complete to Add todo!');
                    }
                });
            }
        }
    }
</script>

<style lang="css">
</style>