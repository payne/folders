import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let allFolders = this.store.findAll('folder');
    return allFolders;
  }
});
