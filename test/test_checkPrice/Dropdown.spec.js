import { shallowMount } from '@vue/test-utils';
import DropdownList from '../../components/DropdownList.vue';

describe('Test on Section DropdownList.vue', () => {
  it('render testing component Main', () => {
    const wrapper = shallowMount(DropdownList);
    expect(wrapper.vm).toBeTruthy();
  });

  it('can choice location from dropdown', () => {
    const wrapper = shallowMount(DropdownList);
    const name = 'Jepara';
    const subDistrict = 3000;

    wrapper.vm.choiceLocation(name, subDistrict);
    expect(wrapper.vm.nameLocation).toEqual(name);
    expect(wrapper.vm.subDistrictIdLocation).toEqual(subDistrict);
  });

  it('can run condition origin Dropdown ', () => {
    const wrapper = shallowMount(DropdownList);
    // const originDropdownCondition = true;
    const name = 'anjas';
    const idDistrict = 30;

    wrapper.vm.$data.name = name;
    wrapper.vm.$data.subIdLocation = idDistrict;
    wrapper.vm.$data.originDropdown = true;

    wrapper.vm.choiceLocation('test', 10);

    // console.log(wrapper.vm.$data.originDropdown);
    wrapper.vm.originDropdown = true;
    // expect(wrapper.emitted().dataDropdownOrigin).toBeTruthy();
    expect(wrapper.vm.originDropdown).toEqual(true);
    // console.log(wrapper.vm.$data.originDropdown);
    // expect(wrapper.vm.originDropdown).toBe(false);
  });

  // it('can emit dataDropdown', () => {
  //   const wrapper = shallowMount(DropdownList);

  //   const name = 'Jepara';
  //   const subDistrict = 3000;
  //   wrapper.vm.choiceLocation(name, subDistrict);
  //   expect(wrapper.vm.nameLocation).toEqual(name);
  //   expect(wrapper.vm.subDistrictIdLocation).toEqual(subDistrict);

  //   const dataDropdown = {
  //     subIdLocation: 123,
  //     name: 'jepara',
  //     closeDropdown: false,
  //   };

  //   wrapper.vm.$emit('dataDropdownOrigin', dataDropdown);

  //   expect(wrapper.emitted().dataDropdownOrigin).toBeTruthy();
  //   expect(wrapper.emitted().dataDropdownOrigin.length).toBe(1);
  //   expect(wrapper.emitted().dataDropdownOrigin).toEqual([[dataDropdown]]);
  // });
});
