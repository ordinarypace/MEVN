export const todoFilter = state => {
    return state.todoList.filter(item => {
        if(!item.complete){
            return true;
        }
    })
}

export const todoSize = state => {
    return state.todoList.length;
}
