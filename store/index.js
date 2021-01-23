import { enviroments } from '../enviroments/enviroments';
import { APIUrl } from '../plugins/service/checkPrice';
import { instanceAxios } from '../plugins/service/checkPrice';
// import APICheckPrice from '../config/APIService';
// import { LocationModel } from '../interfaces/location';

const axios = require('axios');
const APIUrlLocation = APIUrl.APIUrlLocation;
const APIUrlRate = APIUrl.APIUrlRate;
const APIKey = enviroments.apiKey;

// bisa dengan reusable bila dibutuhkan 
// const instanceAxios = axios.create({
//   headers: {
//     'Content-Type': 'application/json',
//     'api-key': APIKey,
//   },
// });

export const state = () => ({
  dataLocation: [],
  message: '',
  dataRate: [],
  loading: false,
});

function groupBy(key) {
  return function group(array) {
    return array.reduce((acc, obj) => {
      const property = obj[key];
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {});
  };
}

export const mutations = {
  setLocation(state, payload) {
    state.dataLocation = payload;
  },

  setRate(state, payload) {
    state.dataRate = payload;
  },

  setError(state, payload) {
    state.message = payload;
  },
};

export const actions = {
  actionSetLocation(context, payload) {
    // axios({
    //   method: 'get',
    //   url: APIUrlLocation,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'api-key': APIKey,
    //   },
    //   params: {
    //     name: payload,
    //   },
    // })
    //   .then((response) => {
    //     context.commit('setLocation', response.data.data.locations);
    //   })
    //   .catch((error) => {
    //     const message = 'Error when get data Location : ' + error.message;
    //     context.commit('setError', message);
    //   });
    // console.log(payload)

    instanceAxios.get(APIUrlLocation,{
      params: {
        name: payload,
      }
    })
      .then((response) => {
        context.commit('setLocation', response.data.data.locations);
      })
      .catch((error) => {
        const message = 'Error when get data Location : ' + error.message;
        context.commit('setError', message);
      });
  },


  actionsSetRate(context, payload) {
    context.state.loading = payload.loading;
    axios({
      method: 'get',
      url: APIUrlRate,
      headers: {
        'Content-Type': 'application/json',
        'api-key': APIKey,
      },
      params: {
        origin_sub_district: payload.idSubDistrictOrigin,
        destination_sub_district: payload.idSubDistrictDestination,
        weight: payload.weight,
        item_price: 0,
      },
    })
      .then((response) => {
        context.state.loading = false;
        const groupByLogisticId = groupBy('logistic_name');
        const rates = groupByLogisticId(response.data.data);
        context.commit('setRate', rates);
      })
      .catch((error) => {
        const message = 'Error when get data Rate : ' + error.message;
        context.commit('setError', message);
      });
  },
};

export const getters = {
  getLocation(state) {
    return state.dataLocation;
  },
  getRate(state) {
    return state.dataRate;
  },
  getMessage(state) {
    return state.message;
  },
  getLoadingRate(state) {
    return state.loading;
  },
};
