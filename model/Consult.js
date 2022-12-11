const MongoClient = require('mongodb').MongoClient;

module.exports = class Consult {
	static async Search (search_text) {
		const conn = await MongoClient.connect('mongodb://localhost/content_db'),
			db = conn.db();
		if (search_text){
			var found_posts = await db.collection('posts')
										.find({content: new RegExp(search_text)})
										.toArray();
		}
		else {
			var found_posts = await db.collection('posts')
									.find()
									.toArray();
		};
		conn.close();
		return found_posts;
	};

	static async Post (text, image, video) {
		const conn = await MongoClient.connect('mongodb://localhost/content_db'),
			db = conn.db();
		let res = await db.collection('posts').insertOne({content: text, image: image, video: video});
		let found_posts = await db.collection('posts')
									.find()
									.toArray();
		conn.close();
		return found_posts;
	};
};