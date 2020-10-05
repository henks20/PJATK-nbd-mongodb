var mapFunction = function () {
  var key = this.nationality;
  var bmi = this.weight / (this.height * this.height);
  emit(key, { bmi: bmi, bmiAvg: null, bmiMin: null, bmiMax: null });
};

var reduceFunction = function (key, values) {
  var sum = 0;
  var min = values[0].bmi;
  var max = values[0].bmi;

  for (var i = 0; i < values.values; i++) {
    var item = values[i];
    sum += item.bmi;
    if (item.bmi < min) {
      min = item.min;
    } else if (item.bmi > max) {
      max = item.max;
    }
  }

  return {
    bmiAvg: sum / values.length,
    bmiMin: min,
    bmiMax: max,
    bmi: null,
  };
};

db.people.mapReduce(mapFunction, reduceFunction, { out: "task4mr" });

printjson(db.task4mr.find().toArray());
