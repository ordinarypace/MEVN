import { FETCH_TODO, ADD_TODO, TOGGLE_TODO } from '../type';

export default {
    // fetch mutate method
    [FETCH_TODO](state, todos){
        state.todoList = todos;
    },

    // add mutate method
    [ADD_TODO](state, { text, _id }){
        state.todoList.push({
            _id,
            text,
            complete : false
        })
    },

    // toggle, remove mutate method
    [TOGGLE_TODO](state, id){
        const index = state.todoList.findIndex(item => item._id === id);

        state.todoList.splice(index, 1);
    }
}
