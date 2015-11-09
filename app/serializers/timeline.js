import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	normalizeQueryResponse: function(store, modelClass, payload, id, requestType) {
		return {
			data: {
				id: "test",
	   			type: "testtype"
			}
		}
	},
	   urlForQuery: function(query, modelClass) {

	}
});
