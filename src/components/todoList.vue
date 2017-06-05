<template>
    <ul>
        <li v-for="todo in todoList" :id="todo._id" :key="todoSize">
            {{ todo.text }}
            <button type="button" @click="toggle">complete</button>
            <button type="button" @click="remove">remove</button>
        </li>
    </ul>
</template>
<script>
    export default {
        name : 'todo-list',
        props : {
            todoList : {
                type : Array,
                required : true
            },
            todoSize : Number
        },

        methods : {
            toggle(e){
                let _id = this.getId(e);
                this.$emit('toggleTodo', _id);
            },

            remove(e){
                let _id = this.getId(e);
                this.$emit('removeTodo', _id);
            },

            getId(e){
                return e.target.parentNode.id;
            }
        }
    }
</script>
<style>

</style>
