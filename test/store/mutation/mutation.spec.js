import mutations from '../../../src/store/mutations';

const { ADD_TODO } = mutations;

describe('TODO 변이 검사', () => {
    it('ADD_TODO', () => {
        let state = {};
        state.todoList = [{ _id : 0, text : '테스트', complete : false }];

        ADD_TODO(state, { text : '테스트추가', _id : 1 });

        expect(state.todoList.length).toBe(2);
    })
});
