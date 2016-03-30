import Ember from 'ember';

export default Ember.Component.extend({
  newPostForm: false,
  actions: {
    createPost() {
      this.set('newPostForm', true);
    },
    save() {
      var date = new Date();
      var time = date.toString().substring(16, 24);
      date = date.toString().substring(4, 15);
      var dateAndTime = date + ' ' + time;
      var momentDateTime = moment(dateAndTime).subtract(7, 'hours').format('MM/DD/YYYY hh:mm:ss a');
      console.log(momentDateAndTime);
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: date,
        body: this.get('body'),
        image: this.get('image'),
      };
      this.set('newPostForm', false);
      this.sendAction('save', params);
    }
  }
});
