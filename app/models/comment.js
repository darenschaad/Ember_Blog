import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', { async: true }),
  body: DS.attr(),
  post: DS.belongsTo('post', { async: true }),
  date: DS.attr(),
  orderDate: DS.attr()
});
