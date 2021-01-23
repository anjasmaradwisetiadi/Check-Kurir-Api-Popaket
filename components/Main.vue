<template>
  <section>
    <!-- <FormFromToDestination /> -->
    <!-- <SectionKurir /> -->

    <form-from-to-destination> </form-from-to-destination>
    <section-kurir></section-kurir>
    <Footer />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from './Footer.vue';
import FormFromToDestination from './FormFromToDestination.vue';
import SectionKurir from './SectionKurir.vue';

export default Vue.extend({
  components: {
    SectionKurir,
    FormFromToDestination,
    Footer,
  },
});
</script>
