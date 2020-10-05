db.people.aggregate([
  {
    $match: {
      sex: "Female",
      nationality: "Poland",
    },
  },
  {
    $unwind: "$credit",
  },
  {
    $group: {
      _id: "$credit.currency",
      balanceSum: { $sum: "$credit.balance" },
      balanceAvg: { $avg: "$credit.balance" },
    },
  },
  {
    $out: "task5a",
  },
]);

printjson(db.task5a.find().toArray());
