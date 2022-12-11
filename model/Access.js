const MongoClient = require('mongodb').MongoClient;

module.exports = class Access {

	static async checkData (data) {
		return !(data.length < 3);
	}


	static async Login (email, password) {
		const conn = await MongoClient.connect('mongodb://localhost/users_db'),
			db = conn.db();
		let found_account = await db.collection('account')
									.find({email: new RegExp(email)})
									.toArray();
		if (found_account.length)
			if (found_account[0].password == password){
				conn.close();
				return true;
			}
		conn.close();
		return false;
	}

	static async VerifyRegister (email, password) {
		const conn = await MongoClient.connect('mongodb://localhost/users_db'),
			db = conn.db();
		let found_account = await db.collection('account')
										.find({email: new RegExp(email)})
										.toArray();
		conn.close();
		if (found_account.length)
			return true;
		else
			return false;
	}

	static async Register (email, password) {
		let isRegistered = await this.VerifyRegister(email, password);
		if (!isRegistered){
			const conn = await MongoClient.connect('mongodb://localhost/users_db'),
				db = conn.db();
			let res = await db.collection('account').insertOne({email: email, password: password});
			conn.close();
			return this.Login(email, password);
		}
		return false;
	}
}