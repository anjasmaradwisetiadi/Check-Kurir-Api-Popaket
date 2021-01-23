// import { Context } from '@nuxt/types';
// // import axios from 'axios';
// import { enviroments } from '../enviroments/enviroments';
// import { APIUrl } from '../plugins/service/checkPrice';
// import { createAxiosObservable } from '~/modules/utils/create-axios-observable';

// const APIUrlLocation = APIUrl.APIUrlLocation;
// const APIKey = enviroments.apiKey;

// const Axios = require('axios');
// // const instance = axios.create;

// // export default class APICheckPrice {
// //   setLocation(params: string) {
// //     Axios({
// //       method: 'get',
// //       url: APIUrlLocation,
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'api-key': APIKey,
// //       },
// //       params: {
// //         name: params,
// //       },
// //     });
// //   }
// // }

// export const APICheckPrice = function (this: Context ,params: any){
//     const data=params;

//     return createAxiosObservable.call(
//         this.$axios,
//         this.$axios.get,
//         APIUrlLocation{
//             params:{
//                 name:params
//             }
//         }
//     )
// }

// export const rateService = function(params: any){
//     return{
//         APICheckPrice: APICheckPrice.bind(this),
//     }
// }

// export default rateService;
