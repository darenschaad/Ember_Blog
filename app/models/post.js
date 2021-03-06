import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  orderDate: DS.attr(),
  body: DS.attr(),
  author: DS.belongsTo('user', { async: true }),
  image: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
