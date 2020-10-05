db.people.aggregate([
  {
    $project: {
      nationality: "$nationality",
      bmi: { $divide: ["$weight", { $pow: ["$height", 2] }] },
    },
  },
  {
    $group: {
      _id: "$nationality",
      bmiAvg: { $avg: "$bmi" },
      bmiMin: { $min: "$bmi" },
      bmiMax: { $max: "$bmi" },
    },
  },
  {
    $out: "task4a",
  },
]);

printjson(db.task4a.find().toArray());
