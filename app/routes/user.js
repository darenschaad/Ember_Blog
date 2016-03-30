import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      var user = params.author;
      user.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return user.save();
      });
      this.transitionTo('index');
    }
  }
});
