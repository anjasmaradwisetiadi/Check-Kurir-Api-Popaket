import { shallowMount } from '@vue/test-utils';
import DefaultTabChoice from '../../components/SectionKurir/DefaultTabChoice.vue';

describe('Test on Section DefaultTabChoice.vue', () => {
  it('render testing component FormSubmit', () => {
    const wrapper = shallowMount(DefaultTabChoice);
    expect(wrapper.vm).toBeTruthy();
  });

  it('can click tabChoice tab', () => {
    const wrapper = shallowMount(DefaultTabChoice);
    const valueTabs = 'Semua';

    wrapper.vm.tabChoice(valueTabs);
    expect(wrapper.vm.valueTab).toEqual(valueTabs);
  });

  it('check condition origin dropdown', () => {
    const wrapper = shallowMount(DefaultTabChoice);
    const originDropdown = true;

    wrapper.vm.originDropdown = originDropdown;
    expect(wrapper.vm.originDropdown).toEqual(originDropdown);
  });
});
