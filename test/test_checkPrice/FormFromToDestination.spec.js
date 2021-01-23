import { shallowMount } from '@vue/test-utils';
import FormFromToDestination from '../../components/FormFromToDestination.vue';
// import Vuex from 'vuex';
// import getters from '../../store/index.js';

describe('Test on Section FormFromToDestination.vue', () => {
  it('render testing component FormFromToDestination', () => {
    const wrapper = shallowMount(FormFromToDestination);
    expect(wrapper.vm).toBeTruthy();
  });

  // it('try testing method dataDropdownOrigin()', () => {
  //   const wrapper = shallowMount(FormFromToDestination);

  //   const data = {
  //     subIdLocation: 30,
  //     name: 'surabaya',
  //     closeDropdown: true,
  //   }

  //   wrapper.vm.dataDropdownOrigin(data);
  //   wrapper.vm.origin = data.name;
  //   expect(wrapper.vm.origin).toEqual(data.name);

  //   wrapper.vm.displayDropdownOrigin = data.closeDropdown;
  //   expect(wrapper.vm.displayDropdownOrigin).toEqual(data.closeDropdown);

  //   wrapper.vm.idSubDistrictLocationOrigin = data.subIdLocation;
  //   expect(wrapper.vm.idSubDistrictLocationOrigin).toEqual(data.subIdLocation);

  // });

  it('try testing method dataDropdownDestination()', () => {
    const wrapper = shallowMount(FormFromToDestination);

    const data = {
      subIdLocation: 30,
      name: 'surabaya',
      closeDropdown: true,
    };

    wrapper.vm.dataDropdownDestination(data);
    wrapper.vm.origin = data.name;
    expect(wrapper.vm.origin).toEqual(data.name);

    wrapper.vm.displayDropdownOrigin = data.closeDropdown;
    expect(wrapper.vm.displayDropdownOrigin).toEqual(data.closeDropdown);

    wrapper.vm.idSubDistrictLocationOrigin = data.subIdLocation;
    expect(wrapper.vm.idSubDistrictLocationOrigin).toEqual(data.subIdLocation);
  });

  it('try testing method clearInput', () => {
    const wrapper = shallowMount(FormFromToDestination);
    const clearInput = {
      destination: '',
      origin: '',
      weight: 0,
    };

    const buttonElemen = wrapper.find('.submit_price');
    buttonElemen.trigger('click');

    expect(buttonElemen).toEqual(clearInput);
  });
});
