import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    editPost() {
      this.set('showEditForm', true);
    },
    edit(post) {
      var date = new Date();
      var orderDate = -date.getTime();
      var time = date.toString().substring(16, 24);
      date = date.toString().substring(4, 15);
      var dateAndTime = date + ' ' + time;
      var momentDateAndTime = moment(dateAndTime).format('MM/DD/YYYY hh:mm:ss a');
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: momentDateAndTime,
        orderDate: orderDate,
        body: this.get('body'),
        image: this.get('image'),
      };
      console.log(params);
      this.set('showEditForm', false);
      this.set('title', '');
      this.set('author', '');
      this.set('body', '');
      this.set('image', '');
      this.sendAction('edit', post, params);
    }
  }
});
