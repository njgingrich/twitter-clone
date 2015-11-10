import Ember from 'ember';

export default Ember.Controller.extend({
    input: "",
    totalTweets: Ember.computed('model.tweets', function() {
        return 2;
    }),

    actions: {
        submitTweet: function() {
            this.incrementProperty('totalTweets');
            var tweet1 = this.store.createRecord('tweet', {
                    id: this.get('totalTweets'),
                    text: this.get('input')
                }
            );
            this.get('model.tweets').addObject(tweet1);
            tweet1.save();
            this.get('model').save();
            this.set('input', '');
        },
        deleteTweet: function(id) {
            console.log('deleting tweet');
            this.store.find('tweet', id).then(function(tweet) {
                tweet.destroyRecord();
            });
        }
    }
});
