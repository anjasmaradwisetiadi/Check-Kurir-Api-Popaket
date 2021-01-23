<template>
  <section class="bg-white md:mx-0 flex justify-center">
    <div class="popaket-kurir-card w-full md:px-28 px-8 md:py-8 py-8">
      <div v-if="getLoadingRate">
        <p class="text-red-600 text-3xl">Still loading....</p>
      </div>

      <div v-if="!getLoadingRate">
        <div
          v-for="(dataRate, indexs) in ratePrice"
          :key="indexs"
          class="flex flex-col mt-10"
        >
          <div
            class="flex text-purple-600 flex-wrap bg-purple-50 md:w-full md:flex md:w-auto px-8 py-2 rounded-t-md text-primary uppercase font-semibold font-sans border-0"
          >
            {{ indexs }}
          </div>

          <div class="content-card mt-4">
            <div class="flex md:flex-row flex-col gap-8">
              <div class="kurir-image_thumbnail">
                <img :src="dataRate[0].logistic_logo_url" alt="sicepat" />
              </div>
              <div class="flex flex-col w-full">
                <div
                  v-for="(arrayDataRate, index) in dataRate"
                  :key="index"
                  class="grid md:grid-cols-12 grid-cols-2 gap-3 border-b border-1 border-gray-300 pb-4"
                >
                  <div class="hidden sm:block md:col-span-3">
                    <label class="content-service__data-meta"
                      >Jenis Layanan
                    </label>
                    <p>{{ arrayDataRate.rate_name }}</p>
                  </div>
                  <div class="hidden sm:block md:col-span-3">
                    <label class="content-service__data-meta">
                      Estimasti Pengiriman</label
                    >
                    <p>{{ arrayDataRate.duration }}</p>
                  </div>
                  <div class="hidden sm:block md:col-span-3">
                    <label></label>
                    <p></p>
                  </div>
                  <div
                    class="hidden sm:block justify-end md:col-span-2 py-3 align-middle"
                  >
                    <p class="md:pt-1 text-teal-400">
                      {{ arrayDataRate.total_price }}
                    </p>
                  </div>
                  <div
                    class="hidden sm:block justify-end md:col-span-1 py-3 align-middle"
                  >
                    <button
                      class="bg-teal-600 size-sm text-white py-1 px-3 rounded-md"
                    >
                      Pesan
                    </button>
                  </div>
                  <div class="flex sm:hidden flex-col gap-3 flex-grow">
                    <div>
                      <label class="content-service__data-meta">
                        Jenis Layanan</label
                      >
                      <p>{{ arrayDataRate.rate_name }}</p>
                    </div>
                    <div>
                      <label class="content-service__data-meta">
                        Estimasti Pengiriman</label
                      >
                      <p>{{ arrayDataRate.duration }}</p>
                    </div>
                  </div>
                  <div
                    class="flex sm:hidden flex-col gap-3 justify-between items-end"
                  >
                    <div class="py-2 align-middle">
                      <p class="text-teal-400">
                        {{ arrayDataRate.total_price }}
                      </p>
                    </div>
                    <div class="align-middle">
                      <button
                        class="bg-teal-600 size-sm text-white py-1 px-3 rounded-md"
                      >
                        Pesan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
  computed: {
    ...mapGetters({
      ratePrice: 'getRate',
      getLoadingRate: 'getLoadingRate',
    }),
  },
});
</script>

<style lang="scss" scoped>
.kurir-image_thumbnail img {
  max-width: 50%;
}

.content-service__data-meta {
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(167, 167, 167, 1);
  text-transform: capitalize;
}
</style>
