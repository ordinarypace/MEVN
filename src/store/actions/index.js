import axios from 'axios';
import { FETCH_TODO, ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../type';

// fetch Todos data action
export const fetchTodo = ({ commit }) => {
    axios.get('/todo/fetch').then(res => {
        if(res.data){
            commit(FETCH_TODO, res.data.length > 0 ? res.data : []);
        }

    }).catch(err => console.log(err));
};

// add Todo action
export const addTodo = ({ commit }, text) => {
    axios.post('/todo/add', {
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
    axios.post('/todo/toggle', {
        id : _id

    }).then(res => {
        if(res.data.success){
            commit(TOGGLE_TODO, _id);
        }
    }).catch(err => console.log(err));
};

// remove Todo action
export const removeTodo = ({ commit }, _id) => {
    axios.get('/todo/remove/' + _id).then(res => {
        if(res.data.success){
            commit(TOGGLE_TODO, _id);
        }
    }).catch(err => console.log(err));
};
