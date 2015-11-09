import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('timeline'),
 	text: DS.attr('string') 
});
