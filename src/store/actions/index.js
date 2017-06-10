import axios from 'axios';
import { FETCH_TODO, ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../type';

// fetch Todos data action
export const fetchTodo = ({ commit }) => {
    axios.get('/todo').then(res => {
        if(res.data){
            commit(FETCH_TODO, res.data.length > 0 ? res.data : []);
        }

    }).catch(err => console.log(err));
};

// add Todo action
export const addTodo = ({ commit }, text) => {
    axios.post('/todo', {
        text : text

    }).then(res => {
        if(res.data.success){
            const _id = res.data._id;
            commit(ADD_TODO, { text, _id });
        }
    }).catch(err => console.log(err));
};

// toggle Todo action
export const toggleTodo = ({ commit }, _id) => {
    axios.put('/todo', {
        id : _id

    }).then(res => {
        if(res.data.success){
            commit(TOGGLE_TODO, _id);
        }
    }).catch(err => console.log(err));
};

// remove Todo action
export const removeTodo = ({ commit }, _id) => {
    axios.delete('/todo').then(res => {
        if(res.data.success){
            commit(TOGGLE_TODO, _id);
        }
    }).catch(err => console.log(err));
};
