import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signUp() {
      var params = {
        name: this.get('name'),
        pic: this.get('pic')
      };
      this.sendAction('signUp', params); 
    }
  }
});
