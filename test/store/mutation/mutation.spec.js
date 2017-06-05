import mutations from '../../../src/store/mutations';

const { ADD_TODO, REMOVE_TODO } = mutations;

let state = {};
state.todoList = [{ _id : 0, text : '테스트', complete : false }];

describe('TODO 추가 mutation 검사', () => {
    it('ADD_TODO', () => {
        ADD_TODO(state, { text : '테스트추가', _id : 1 });

        expect(state.todoList.length).toBe(2);
    })
});

describe('TODO 삭제 mutation 검사', () => {
    it('REMOVE_TODO', () => {
        REMOVE_TODO(state, { _id : 0 });

        expect(state.todoList.length).toBe(1);
    })
});
