import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  showingCommentForm: false,
  actions: {
    showCommentForm() {
      this.set('showingCommentForm', true);
    },
    saveComment(post) {
      var date = new Date();
      var orderDate = -date.getTime();
      var time = date.toString().substring(16, 24);
      date = date.toString().substring(4, 15);
      var dateAndTime = date + ' ' + time;
      var momentDateAndTime = moment(dateAndTime).format('MM/DD/YYYY hh:mm:ss a');
      if(this.get('body') !== undefined) {
        var params = {
          user: this.get('user'),
          date: momentDateAndTime,
          orderDate: orderDate,
          body: this.get('body'),
          post: post
        };
        this.set('showingCommentForm', false);
        this.sendAction('saveComment', params);
      }
    }
  }
});
