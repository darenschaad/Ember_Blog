import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  pic: DS.attr(),
  posts: DS.hasMany('post', { async: true }),
  comments: DS.hasMany('comment', { async: true })
});
