import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm('Are you sure you want to delete this blog post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    edit(post, params) {
      this.sendAction('edit', post, params);
    }
  }
});
