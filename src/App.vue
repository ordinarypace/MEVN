<template lang="html">
    <div>
        <h1>TODO LIST</h1>
        <TodoList
            :todo-list="todoFilter"
            :todo-size="todoSize"
            @removeTodo="removeTodo">
        </TodoList>
        <TodoAdd @addTodo="addTodo"></TodoAdd>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
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

        computed : mapGetters([
            'todoFilter',
            'todoSize'
        ]),

        methods : mapActions([
            'fetchTodo',
            'addTodo',
            'removeTodo'
        ])
    }
</script>

<style lang="css">
</style>
