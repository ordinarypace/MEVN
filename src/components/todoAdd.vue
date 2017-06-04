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
                let input = this.$refs.todoText;
                let value = input.value;

                if(this.validateValue(value)){
                    this.$emit('addTodo', value);
                    this.initialize(input);
                }
            },

            validateValue(value){
                if(value.trim().length === 0){
                    alert('Value is empty!!');
                    return false;
                }
                return true;
            },

            initialize(input){
                input.value = '';
                input.focus();
            }
        }
    }
</script>
<style>

</style>
