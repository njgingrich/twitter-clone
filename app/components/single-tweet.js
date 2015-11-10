import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteTweet: function() {
            this.sendAction('action', this.get('id'));
        }
    }
});
