import { shallowMount } from '@vue/test-utils';
import SectionKurir from '../../components/SectionKurir.vue';

describe('Test on Section Kurir.vue', () => {
  it('render testing component FormSubmit', () => {
    const wrapper = shallowMount(SectionKurir);
    expect(wrapper.vm).toBeTruthy();
  });
});
