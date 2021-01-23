<template>
  <div>
    <ul class="dropdown-menu absolute text-gray-700 w-full">
      <li v-for="(location, index) in getLocation" :key="index" class="">
        <a
          class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-full"
          href="#"
          @click="choiceLocation(location.name, location.sub_district_id)"
          >{{ location.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    getLocation: {
      type: Array,
      default: () => [],
    },
    displayDropdown: {
      type: Boolean,
      default: false,
    },
    usingOriginDropdown: {
      type: Boolean,
      default: false,
    },
    usingDestinationDropdown: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      nameLocation: '',
      subDistrictIdLocation: 0,
      closeDropdown: true,
      originDropdown: false,
      destinationDropdown: false,
    };
  },

  methods: {
    choiceLocation(name: string, subIdLocation: number) {
      this.nameLocation = name;
      this.subDistrictIdLocation = subIdLocation;
      this.closeDropdown = false;

      this.originDropdown = this.usingOriginDropdown;
      this.destinationDropdown = this.usingDestinationDropdown;

      const dataDropdown = {
        subIdLocation: this.subDistrictIdLocation,
        name: this.nameLocation,
        closeDropdown: this.closeDropdown,
      };

      if (this.originDropdown) {
        this.$emit('dataDropdownOrigin', dataDropdown);
        this.originDropdown = false;
      } else {
        this.$emit('dataDropdownDestination', dataDropdown);
        this.destinationDropdown = false;
      }
    },
  },
});
</script>
