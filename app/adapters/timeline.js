import DS from 'ember-data';

export default DS.RESTAdapter.extend(DS.BuildURLMixin, {
	authentication: {
	    oauth_consumer_key: "",
	    oauth_token: "",
	    oauth_signature_method: "HMAC-SHA1",
	    oauth_version: "1.0",
	},
	buildUrl: function(type, id, record) {
		return 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=njgingrich'; 
	},
	ajax: function(url, method, hash) {
		hash = hash || {};
		hash.crossDomain = true;
		hash.xhrFields = {withCredentials: true};
		return this._super(url, method, hash);
	},
	//namespace: '1.1',
	//host: 'https://api.twitter.com/statuses',
	findQuery: function(store, type, query) {
		return this.ajax(this.buildUrl(), 'GET');
	}
});
