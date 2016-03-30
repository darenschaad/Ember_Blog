import Ember from 'ember';

export function shortBody(params/*, hash*/) {
  var body = params[0];
  if(body.length > 300) {
    return body.substring(0, 300) + "...";
  }
  return body;
}

export default Ember.Helper.helper(shortBody);
