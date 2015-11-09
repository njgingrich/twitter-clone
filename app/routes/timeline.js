import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		//return this.store.query('timeline', {screen_name: 'njgingrich'});
		/*var timeline = this.store.createRecord('timeline');
		timeline.pushRecord(
		timeline.save();
		return timeline;*/
		this.store.push('timeline', {
			tweets: [{text: "hello world"}];
		});
	}
	
});
