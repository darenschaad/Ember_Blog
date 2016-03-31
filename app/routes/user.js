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
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this blog post?')) {
        post.destroyRecord();
        this.refresh();
      }
    },
    edit(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key] !== "") {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.refresh();
    },
    editComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key] !== "") {
          comment.set(key, params[key]);
        }
      });
      comment.save();
      this.refresh();
    },
    deleteComment(comment) {
      if (confirm("Are you sure you want to delete this comment?")) {
        comment.destroyRecord();
        this.refresh();
      }
    }
  }
});
