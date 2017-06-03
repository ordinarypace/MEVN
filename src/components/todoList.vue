<template>
    <ul ref="todoList">
        <li v-for="todo in todoList" :id="todo._id">
            {{ todo.text }}
            <button type="button" @click="remove">complete</button>
        </li>
    </ul>
</template>
<script>
    export default {
        name : 'todo-list',
        props : {
            todoList : Array
        },

        methods : {
            remove(e){
                let target = e.target.parentNode.id;

                this.$emit('removeTodo', target);
            }
        }
    }
</script>
<style>

</style>