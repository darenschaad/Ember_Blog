import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('post', {
      orderBy: 'orderDate',
    });
  },
  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.refresh();
    }
  }
});
