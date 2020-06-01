import Api from './api';

export default {
  addfarm(details) {
    return Api().post('addfarm', details);
  },
  retrievefarms() {
    return Api().get('retrievefarms');
  },
};
