import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		//return this.store.query('timeline', {screen_name: 'njgingrich'});
        var tweet1 = this.store.createRecord('tweet', {
                id: 1,
                text: 'hello world'
            }
        );
        var tweet2 = this.store.createRecord('tweet', {
                id: 2,
                text: 'tweet number 2'
            }
        );
		var timeline = this.store.createRecord('timeline');
		timeline.get('tweets').addObject(tweet1);
		timeline.get('tweets').addObject(tweet2);
		timeline.save();
		return timeline;
	}

});
