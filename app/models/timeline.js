import DS from 'ember-data';

export default DS.Model.extend({
	tweets: DS.hasMany('tweet', {async: true}),
});
