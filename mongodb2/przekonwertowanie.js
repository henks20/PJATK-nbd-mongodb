db.people.find().forEach((item) => {
  db.people.update(
    { _id: item._id },
    {
      $set: {
        weight: parseFloat(item.weight),
        height: parseFloat(item.height),
        credit: item.credit.map(function (crt) {
          return {
            type: crt.type,
            number: crt.number,
            currency: crt.currency,
            balance: parseFloat(crt.balance),
          };
        }),
      },
    }
  );
});
