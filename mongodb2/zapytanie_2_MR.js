var mapFunction = function () {
  for (var i = 0; i < this.credit.length; i++) {
    var key = this.credit[i].currency;
    var value = this.credit[i].balance;
    emit(key, value);
  }
};

var reduceFunction = function (key, values) {
  var sum = 0;
  for (var i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
};

db.people.mapReduce(mapFunction, reduceFunction, { out: "task2mr" });

printjson(db.task2mr.find().toArray());
