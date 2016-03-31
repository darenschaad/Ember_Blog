import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.query('post', {
        orderBy: 'orderDate',
      }),
      comments: this.store.query('comment', {
        orderBy: 'orderDate',
        limitToFirst: 5
      })
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
