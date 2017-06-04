import axios from 'axios';
import { FETCH_TODO, ADD_TODO, REMOVE_TODO } from '../type';

export const fetchTodo = ({ commit }) => {
    axios.get('/todo').then(res => {
        commit(FETCH_TODO, res.data.length > 0 ? res.data : []);

    }).catch(err => console.log(err));
};

export const addTodo = ({ commit }, text) => {
    axios.post('/todo/add', {
        text : text

    }).then(res => {
        if(res.data.success){
            commit(ADD_TODO, { text });
        }
    }).catch(err => console.log(err));
};

export const removeTodo = ({ commit }, id) => {
    axios.post('/todo/remove', {
        id : id

    }).then(res => {
        if(res.data.success){
            commit(REMOVE_TODO, { id });
        }
    }).catch(err => console.log(err));
};
