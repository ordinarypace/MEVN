<template lang="html">
    <div>
        <h1>TODO LIST</h1>
        <TodoList :todo-list="isActiveList" @removeTodo="removeTodo"></TodoList>
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
            this.$http.get('/todo').then(res => {
                if(res){
                    this.todoList = res.data;
                }
            }).catch(err => console.log(err));
        },

        computed : {
            isActiveList(){
                return this.todoList.filter(todo => {
                    if(!todo.complete){
                        return true;
                    }
                });
            }
        },

        methods : {
            addTodo(text){
                this.$http.post('/todo/add', {
                    text : text

                }).then(res => {
                    if(res.data.success){
                        this.todoList = [...this.todoList, {_id : res.data._id, text : text, complete : false}];
                        console.log('Complete to Add todo!');
                    }
                });
            },

            removeTodo(id){
                this.$http.post('/todo/remove', {
                    id : id

                }).then(res => {
                    if(res.data.success){
                        const index = this.todoList.findIndex(item => item.id === id);

                        this.todoList.splice(index, 1);
                        console.log('Remove Todo Item!!')
                    }
                });
            }
        }
    }
</script>

<style lang="css">
</style>