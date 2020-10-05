var mapFunction = function () {
  if (this.sex !== "Female" || this.nationality !== "Poland") {
    return;
  }
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
  return { balanceSum: sum, balanceAvg: sum / values.length };
};

db.people.mapReduce(mapFunction, reduceFunction, { out: "task5mr" });

printjson(db.task5mr.find().toArray());
