import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  showEditCommentForm: false,
  actions: {
    editComment() {
      this.set('showEditCommentForm', true);
    },
    edit(comment){
      var date = new Date();
      var orderDate = -date.getTime();
      var time = date.toString().substring(16, 24);
      date = date.toString().substring(4, 15);
      var dateAndTime = date + ' ' + time;
      var momentDateAndTime = moment(dateAndTime).format('MM/DD/YYYY hh:mm:ss a');
      var params = {
        date: momentDateAndTime,
        orderDate: orderDate,
        body: this.get('body'),
      };
      this.set('showEditCommentForm', false);
      this.sendAction('editComment', comment, params);
    }
  }
});
