<template lang="html">
    <div>
        <h1>TODO LIST</h1>
        <TodoList :todo-list="isActiveList" @removeTodo="removeTodo"></TodoList>
        <TodoAdd @addTodo="addTodo"></TodoAdd>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import TodoList from './components/todoList.vue';
    import TodoAdd from './components/todoAdd.vue';

    export default {
        name : 'todo-container',
        components : {
            TodoList,
            TodoAdd
        },

        beforeMount(){
            this.$store.dispatch('fetchTodo');
        },
        
        //TODO : vuex getter로 변경 예정
        computed : {
            isActiveList(){
                return this.$store.state.todoList.filter(todo => {
                    if(!todo.complete){
                        return true;
                    }
                });
            }
        },

        methods : mapActions([
            'fetchTodo',
            'addTodo',
            'removeTodo'
        ])
    }
</script>

<style lang="css">
</style>
