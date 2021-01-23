<template>
  <section class="bg-white md:mx-0 flex justify-center">
    <div class="w-full md:px-28 px-8 md:py-8 py-8">
      <div
        class="flex flex-wrap bg-purple-50 rounded-sm md:w-full flex-grow md:flex md:w-auto px-6 py-8"
      >
        <ul class="list-reset flex flex-wrap justify-start md:flex-grow">
          <li
            v-for="tab of tabs"
            :key="tab.id"
            class="-mb-px mr-2 md:mt-0 mt-2"
          >
            <button
              :class="{ active: valueTab === tab.name }"
              class="button_default_choice rounded-full bg-white text-blue-400 inline-block py-2 px-4 font-semibold cursor-pointer focus:outline-none"
              @click.prevent="tabChoice(tab.name)"
            >
              {{ tab.name }}
            </button>
          </li>
        </ul>
        <select
          class="bg-white justify-end md:w-1/5 w-full border rounded py-2 md:px-4 px-2 md:mt-0 mt-4"
        >
          <option class="px-0" value="">Urutkan</option>
          <option class="px-0" value="Termurah">Termurah</option>
          <option class="px-0" value="Tercepat">Tercepat</option>
        </select>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      valueTab: '',
    };
  },

  methods: {
    tabChoice(item: string) {
      this.valueTab = item;
    },
  },
});
</script>

<style lang="scss" scoped>
.button_default_choice.active {
  background-color: #8b5cf6;
  color: white;
}
</style>
