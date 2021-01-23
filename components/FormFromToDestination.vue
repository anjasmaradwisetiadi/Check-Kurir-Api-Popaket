<template>
  <section class="bg-blue-400 md:mx-0 flex justify-center">
    <div class="w-full md:px-28 px-8 md:py-8 py-8">
      <div class="flex flex-col bg-white rounded-lg md:w-full">
        <div class="form_from_destination mx-6">
          <form
            action=""
            class="mt-6 flex md:flex-row flex-col justify-center w-full"
          >
            <div class="flex flex-auto relative mr-6 md:w-2/5 w-full">
              <div class="flex flex-col w-full">
                <label class="text-left mb-2">Dari</label>
                <div
                  class="flex flex-row items-stretch w-full relative h-15 bg-white items-center rounded"
                >
                  <span
                    :class="{ active: focusOrigin }"
                    class="focus_span flex bg-gray-50 items-center px-3 border-1 border-grey-light outline-none border border-r-0 rounded rounded-r-none text-gray-600"
                  >
                    <img
                      class="image_icon max-w-xs max-w-md"
                      src="../static/point.png"
                      alt="point"
                    />
                  </span>
                  <input
                    v-model="origin"
                    type="text"
                    :class="{ active: focusOrigin }"
                    class="focus_input leading-normal w-px flex-1 border-1 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative font-roboto outline-none text-black border w-full"
                    placeholder="Kelurahan, Kecamatan, Kota, Provinsi"
                    @keyup="locationOrigin()"
                    @focus="focusOrigin = true"
                    @blur="focusOrigin = false"
                  />
                </div>
                <div
                  v-if="getLocation && displayDropdownOrigin"
                  id="originDropdown"
                >
                  <DropdownList
                    :get-location="getLocation"
                    :using-origin-dropdown="usingOriginDropdown"
                    @dataDropdownOrigin="dataDropdownOrigin"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-auto relative mr-6 md:w-2/5 w-full">
              <div class="flex flex-col w-full">
                <label class="text-left mb-2"> Tujuan </label>
                <div
                  class="flex flex-row items-stretch w-full relative h-15 bg-white items-center rounded"
                >
                  <span
                    :class="{ active: focusDestination }"
                    class="flex bg-gray-50 items-center leading-normal px-3 border-1 border-grey-light outline-none border border-r-0 rounded rounded-r-none text-gray-600"
                  >
                    <img
                      class="image_icon max-w-xs max-w-md"
                      src="../static/point.png"
                      alt="point"
                    />
                  </span>
                  <input
                    v-model="destination"
                    :class="{ active: focusDestination }"
                    type="text"
                    class="leading-normal w-px flex-1 border-1 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative font-roboto outline-none text-black border w-full"
                    placeholder="Kelurahan, Kecamatan, Kota, Provinsi"
                    @keyup="locationDestination()"
                    @focus="focusDestination = true"
                    @blur="focusDestination = false"
                  />
                </div>
                <div v-if="getLocation && displayDropdownDestination">
                  <DropdownList
                    id="destinationDropdown"
                    :get-location="getLocation"
                    :using-destination-dropdown="usingDestinationDropdown"
                    @dataDropdownDestination="dataDropdownDestination"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-auto relative md:w-1/5 w-full">
              <div class="flex flex-col w-full">
                <label class="text-left mb-2"> Berat </label>
                <div
                  class="flex flex-row items-stretch w-full relative h-15 bg-white items-center rounded"
                >
                  <input
                    v-model="weight"
                    :class="{ active: focusWeight }"
                    type="text"
                    class="leading-normal w-px flex-1 border-1 h-10 border-grey-light rounded rounded-r-none px-3 self-center relative font-roboto outline-none text-black border w-full"
                    placeholder=""
                    @focus="focusWeight = true"
                    @blur="focusWeight = false"
                  />
                  <span
                    :class="{ active: focusWeight }"
                    class="focus_weight flex bg-gray-50 items-center leading-normal px-3 border-1 border-grey-light outline-none border border-l-0 rounded rounded-l-none text-gray-600"
                  >
                    <i class="fas fa-user-circle">Kg</i>
                  </span>
                </div>
              </div>
            </div>
          </form>
          <div class="form_submit text-right mt-4">
            <span></span>
            <button
              class="submit_price color-white bg-blue-600 rounded-md py-2 md:w-1/6 mb-6 text-white w-full"
              @click.prevent="submitRatePrice()"
            >
              Cek Tarif
            </button>
          </div>
        </div>
      </div>
      <!-- <p v-if="getMessage">{{getMessage}}</p> -->
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
  data() {
    return {
      focusOrigin: false,
      focusDestination: false,
      focusWeight: false,
      destination: '',
      origin: '',
      weight: 0,
      idSubDistrictLocationOrigin: 0,
      idSubDistrictLocationDestination: 0,

      displayDropdownOrigin: false,
      displayDropdownDestination: false,
      displayDropdown: true,
      usingOriginDropdown: false,
      usingDestinationDropdown: false,

      loadingRatePriceResult: false,
    };
  },

  computed: {
    // ...mapGetters(['getLocation', 'getMessage']),
    ...mapGetters({
      getLocation: 'getLocation',
      getMessage: 'getMessage',
      getLoadingRate: 'getLoadingRate',
    }),
  },

  methods: {
    // // before choice location
    locationOrigin() {
      this.$store.dispatch('actionSetLocation', this.origin);
      this.usingOriginDropdown = true;
      this.displayDropdownOrigin = true;
      // console.log(this.$store.state.dataLocation);
    },
    locationDestination() {
      this.$store.dispatch('actionSetLocation', this.destination);
      this.usingDestinationDropdown = true;
      this.displayDropdownDestination = true;
      // console.log(this.$store.state.dataLocation);
    },

    // // after choice location
    dataDropdownOrigin(data: any) {
      this.origin = data.name;
      this.displayDropdownOrigin = data.closeDropdown;
      this.idSubDistrictLocationOrigin = data.subIdLocation;
    },
    dataDropdownDestination(data: any) {
      this.destination = data.name;
      this.displayDropdownDestination = data.closeDropdown;
      this.idSubDistrictLocationDestination = data.subIdLocation;
    },

    submitRatePrice() {
      this.loadingRatePriceResult = true;
      this.$store.dispatch('actionsSetRate', {
        idSubDistrictOrigin: this.idSubDistrictLocationOrigin,
        idSubDistrictDestination: this.idSubDistrictLocationDestination,
        weight: this.weight,
        loading: this.loadingRatePriceResult,
      });
      this.clearInput();
    },

    clearInput() {
      this.destination = '';
      this.origin = '';
      this.weight = 0;
    },
  },
});
</script>

<style lang="scss" scoped>
.image_icon {
  max-width: 30px;
}

span.active {
  border: 2px solid #a78bfa;
  border-right: none;
}

input.active {
  border: 2px solid #a78bfa;
}

span.active.focus_weight {
  border: 2px solid #a78bfa;
  border-left: none;
}
</style>
