<template>
    <div>
        <input type="text" ref="todoText">
        <button type="button" @click="add">Add TODO!</button>
    </div>
</template>
<script>
    export default {
        name : 'todo-add',
        methods : {
            add(){
                let value = this.$refs.todoText.value;

                if(value.trim().length === 0){
                    alert('Value is empty!!');
                    return false;
                }

                this.$emit('addTodo', value);
            }
        }
    }
</script>
<style>

</style>
