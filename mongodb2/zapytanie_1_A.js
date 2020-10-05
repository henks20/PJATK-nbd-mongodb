db.people.aggregate([
  {
    $group: {
      _id: "$sex",
      avgWeight: { $avg: "$weight" },
      avgHeight: { $avg: "$height" },
    },
  },
  { $out: "task1a" },
]);

printjson(db.task1a.find().toArray());
