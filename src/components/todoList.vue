<template>
    <ul ref="todoList">
        <li v-for="todo in todoList">
            {{ todo.text }}
            <button type="button">complete</button>
        </li>
    </ul>
</template>
<script>
    export default {
        name : 'todo-list',
        props : {
            todoList : Array
        },

        data(){
            return {

            }
        }
    }
</script>
<style>

</style>