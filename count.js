 const url = 'mongodb://localhost:27017/learnyoumongo'
 var mongo = require('mongodb').MongoClient

    mongo.connect(url, function(err, client) {
    	if(err) {
    		throw err;
    	}
      var collection = client.db('learnyoumongo').collection('parrots');
      collection.count({age: {$gt : +process.argv[2]}}, function(err, count) {
        if(err) {
          throw err;
        }
        console.log(count);
        client.close();
      })
    })
