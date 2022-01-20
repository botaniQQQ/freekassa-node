const freekassa = require("./");

console.log(
  freekassa(
    {
      oa: "99",
      o: "ID_234",
      m: "14963",
      currency: "USD",
    },
    "secret_word_1"
  )
);

console.log(
  freekassa(
    {
      AMOUNT: "99",
      MERCHANT_ORDER_ID: "ID_234",
      MERCHANT_ID: "14963",
    },
    "secret_word_2"
  )
);
