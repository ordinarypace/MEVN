import Vue from 'vue';
import Component from '../src/components/todoAdd.vue';

describe("할 일 추가 컴포넌트 검사", () => {
    it('추가 함수가 동작하는지', () => {
        expect(typeof Component.methods.add).toBe('function');
    });
});
