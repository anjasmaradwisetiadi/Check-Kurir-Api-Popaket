import { shallowMount } from '@vue/test-utils';
import index from '../pages/index.vue';

describe('Test on Section index.vue', () => {
  it('render testing component index', () => {
    const wrapper = shallowMount(index);
    // expect(wrapper.toBeTruthy()).toBe(true)
    expect(wrapper.vm).toBeTruthy();
  });
});
