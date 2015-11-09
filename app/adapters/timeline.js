import DS from 'ember-data';
import config from '../config/environment';

export default DS.LSAdapter.extend({
	namespace: 'twitter-clone'
});
/*
export default DS.RESTAdapter.extend(DS.BuildURLMixin, {
	headers: {
		oauth_consumer_key: config.APP.oauth_consumer_key,
	   	oauth_token: config.APP.oauth_token,
	   	oauth_signature_method: config.APP.oauth_signature_method,
	   	oauth_version: config.APP.oauth_version
	},
	buildUrl: function(type, id, record) {
		return 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=njgingrich'; 
	},
	//ajax: function(url, method, hash) {
	//	hash = hash || {};
	//	hash.crossDomain = true;
	//	hash.xhrFields = {withCredentials: true};
	//	return this._super(url, method, hash);
	//},
	//namespace: '1.1',
	//host: 'https://api.twitter.com/statuses',
	findQuery: function(store, type, query) {
		return this.ajax(this.buildUrl(), 'GET');
	}
});
*/


