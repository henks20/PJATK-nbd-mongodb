db.people.aggregate([
  {
    $unwind: "$credit",
  },
  { $group: { _id: "$credit.currency", currSum: { $sum: "$credit.balance" } } },
  { $out: "task2a" },
]);

printjson(db.task2a.find().toArray());
