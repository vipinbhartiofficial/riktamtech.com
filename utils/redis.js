const Redis = require("ioredis");

const { promisify } = require("util");
const _ = require('lodash');

function customizer(objValue, srcValue) {
	if (_.isArray(objValue)) {
		return _.union(objValue.concat(srcValue));
	}
};

function customizer_without_concat(objValue, srcValue) {
	if (_.isArray(objValue)) {
		return _.union(srcValue);
	}
};

let client;
let clientReader;

try {
  if (process.env.NODE_ENV === 'development') {
    client = new Redis();
  } else {
    client = new Redis.Cluster([{
      "host": process.env.REDIS_HOST
    }], {
      dnsLookup: (address, callback) => callback(null, address),
    });
  }
} catch (error) {
	console.log(error);
}

const self = module.exports = {
	get : async (key) => {
		if ( process.env.ENABLED_REDIS_SERVER == 'gcp' ) {
			clientReader.get = promisify(clientReader.get);
			const data = await clientReader.get(key);
			return data ? data : false;
		}else{
			client.get = promisify(client.get);
			const data = await client.get(key);
			return data ? data : false;
		}
		
	},

	set : async (key, value) => {

		let newData;
		client.set = promisify(client.set);
		
		const data = await self.get(key);
		if( data ){
			newData = JSON.stringify(_.mergeWith(JSON.parse(data), value, customizer));
		} else {
			newData = JSON.stringify(value);
		}
		const val = await client.set(key, newData);
		return val ? true : false;
	},

	setex : async (key, ttl, redisData) => {
		const data = await client.set(key, JSON.stringify(redisData), 'ex', ttl);
		return data ? true : false;
	},

	delete : async (key) => {
		client.del = promisify(client.del);
			
		const data = await client.del(key);
		return data ? true : false;
	},

	setWithoutConcat : async (key, value) => {

		let newData;
		client.set = promisify(client.set);
		
		const data = await self.get(key);
		if( data ){
			newData = JSON.stringify(_.mergeWith(JSON.parse(data), value, customizer_without_concat));
		} else {
			newData = JSON.stringify(value);
		}
		const val = await client.set(key, newData);
		return val ? true : false;
	},
}