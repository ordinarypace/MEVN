import axios from 'axios';
import { FETCH_TODO, ADD_TODO, REMOVE_TODO } from '../type';

export const fetchTodo = ({ commit }) => {
    axios.get('/todo').then(res => {
        if(res.data){
            commit(FETCH_TODO, res.data.length > 0 ? res.data : []);
        }

    }).catch(err => console.log(err));
};

export const addTodo = ({ commit }, text) => {
    axios.post('/todo/add', {
        text : text

    }).then(res => {
        if(res.data.success){
            const _id = res.data._id;
            console.log(_id);
            commit(ADD_TODO, { text, _id });
        }
    }).catch(err => console.log(err));
};

export const removeTodo = ({ commit }, _id) => {
    axios.post('/todo/remove', {
        id : _id

    }).then(res => {
        if(res.data.success){
            commit(REMOVE_TODO, _id);
        }
    }).catch(err => console.log(err));
};
