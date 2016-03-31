import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      users: this.store.findAll('user'),
    });
  },
  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var user = params.user;
      var post = params.post;
      user.get('comments').addObject(newComment);
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return user.save();
      }).then(function() {
        return post.save();
      });
      this.refresh();
    }
  }
});
