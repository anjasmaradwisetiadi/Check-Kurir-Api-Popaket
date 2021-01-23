import { shallowMount } from '@vue/test-utils';
import Header from '../../components/Header.vue';

describe('Test on Section Header.vue', () => {
  it('render testing component Main', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.vm).toBeTruthy();
  });
});
