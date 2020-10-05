var mapFunction = function () {
  var key = this.sex;
  var weightValue = this.weight;
  var heightValue = this.height;
  if (weightValue === null) {
    weightValue = 0;
  }
  if (heightValue === null) {
    heightValue = 0;
  }
  var value = { weight: weightValue, height: heightValue };
  emit(key, value);
};

var reduceFunction = function (key, values) {
  var heightSum = 0;
  var weightSum = 0;
  for (var i = 0; i < values.length; i++) {
    heightSum += values[i].height;
    weightSum += values[i].weight;
  }
  return {
    height: heightSum / values.length,
    weight: weightSum / values.length,
  };
};

db.people.mapReduce(mapFunction, reduceFunction, {
  out: "task1mr",
});

printjson(db.task1mr.find().toArray());
