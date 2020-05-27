import Api from './api';

export default {
  addhop(details) {
    return Api().post('addhop', details);
  },
  getfarmershops(farmer) {
    return Api().get('getfarmershops', farmer);
  },
};
