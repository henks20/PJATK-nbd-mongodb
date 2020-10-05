db.people.insert({
  sex: "Male",
  first_name: "Grzegorz",
  last_name: "Sienkiewicz",
  job: "frontend developer",
  email: "s21740@pjwstk.edu.pl",
  location: {
    city: "warszawa",
    address: { streetname: "Oxford street", streetnumber: "111" },
  },
  description: "lorem ipsum.....",
  height: "185",
  weight: "85",
  birth_date: "1995-11-11T00:00:00Z",
  nationality: "Poland",
  credit: [
    {
      type: "cardxyz",
      number: "123456789000000",
      currency: "PLN",
      balance: "11111",
    },
  ],
});
