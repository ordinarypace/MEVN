<template>
    <ul>
        <li v-for="todo in todoList" :id="todo._id" :key="todoSize">
            {{ todo.text }}
            <button type="button" @click="remove">complete</button>
        </li>
    </ul>
</template>
<script>
    export default {
        name : 'todo-list',
        props : {
            todoList : Array,
            todoSize : Number
        },

        methods : {
            remove(e){
                const target = e.target;
                const _id = target.parentNode.id;

                this.$emit('removeTodo', _id);
            }
        }
    }
</script>
<style>

</style>
