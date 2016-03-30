import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('post', {path: 'post/:post_id'});
  this.route('user', {path: 'user/:user_id'});
  this.route('sign-up');
  this.route('users');
});

export default Router;
