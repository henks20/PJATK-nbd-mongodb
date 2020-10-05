db.people.aggregate([
  {
    $group: {
      _id: "$job",
      count: { $sum: 1 },
    },
  },
  {
    $out: "task3a",
  },
]);

printjson(db.task3a.find().toArray());
