import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  newPostForm: false,
  actions: {
    createPost() {
      this.set('newPostForm', true);
    },
    save(author) {
      var date = new Date();
      var orderDate = -date.getTime();
      console.log(orderDate);
      var time = date.toString().substring(16, 24);
      date = date.toString().substring(4, 15);
      var dateAndTime = date + ' ' + time;
      var momentDateAndTime = moment(dateAndTime).format('MM/DD/YYYY hh:mm:ss a');
      var params = {
        title: this.get('title'),
        author: author,
        date: momentDateAndTime,
        orderDate: orderDate,
        body: this.get('body'),
        image: this.get('image'),
      };
      this.set('newPostForm', false);
      this.set('title', '');
      this.set('author', '');
      this.set('body', '');
      this.set('image', '');
      this.sendAction('save', params);
    }
  }
});
