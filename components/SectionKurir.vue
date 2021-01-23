<template>
  <section>
    <default-tab-choice :tabs="tabs"></default-tab-choice>
    <ResultKurir />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { DefaultTabContent } from '../config/DefaulTabContent';
import { TabModel } from '../interfaces/DefaultTabContentType';
// import ResultKurir from './SectionKurir/ResultKurir.vue';
import DefaultTabChoice from './SectionKurir/DefaultTabChoice.vue';

@Component({
  components: {
    DefaultTabChoice,
  },
  mounted() {},
})
export default class SectionKurir extends Vue {
  public tabs: TabModel[] = DefaultTabContent;
}
</script>
