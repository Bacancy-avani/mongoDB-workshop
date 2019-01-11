 const url = 'mongodb://localhost:27017/learnyoumongo'

 var mongo = require('mongodb').MongoClient

    mongo.connect(url, function(err, client) {
    	if(err) {
    		throw err;
    	}
      var collection = client.db('learnyoumongo').collection('parrots');
      collection.find({
      	   age : {
      	   	$gt : +process.argv[2]
      	  }
        }).project({name:1, age:1, _id:0}).toArray(function(err, documents) {
      		console.log(documents)
      		client.close()
      })
    })
