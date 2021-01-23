import { shallowMount } from '@vue/test-utils';
import Main from '../../components/Main.vue';

describe('Test on Section Main.vue', () => {
  it('render testing component Main', () => {
    const wrapper = shallowMount(Main);
    expect(wrapper.vm).toBeTruthy();
  });
});
