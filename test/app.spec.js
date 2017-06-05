import Vue from 'vue';
import Component from '../src/app.vue';

describe("TODO 컨테이너 함수 검사", () => {
    it('beforeMount', () => {
        expect(typeof Component.beforeMount).toBe('function');
    });
});
