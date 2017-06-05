import Vue from 'vue';
import Component from '../src/app.vue';

describe("Todo App Container Component", () => {
    it('should have data', () => {
        expact(typeof Component.computed).tobe('function');
    });
});
