var mapFunction = function () {
  var key = this.job;
  emit(key, null);
};

var reduceFunction = function (key, values) {
  return null;
};

db.people.mapReduce(mapFunction, reduceFunction, { out: "task3mr" });

printjson(db.task3mr.find().toArray());
