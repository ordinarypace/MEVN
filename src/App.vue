<template lang="html">
    <div>
        <h1>TODO LIST</h1>
        <ul v-if="todoList">
            <li v-for="todo in todoList" :key="todo._id">
                {{ todo.text }}
            </li>
        </ul>
        <div>
            <input type="text" ref="todoText">
            <button type="button" @click="addTodo">Add TODO!</button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';

    Vue.prototype.$http = axios;

    export default {
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
            addTodo(){
                if(this.validateTodo().length === 0){
                    console.log('Value is empty!!');
                    return false;
                }

                this.$http.post('/todo/add', {
                    text : this.validateTodo()

                }).then(function(res){
                    if(res.success){
                        console.log(res.id)
                    }
                })
            },

            validateTodo(){
                return this.$refs.todoText.value.trim();
            }
        }
    }
</script>

<style lang="css">
</style>