 const destination = "Don8L4DTVrUrRAcVTsFoCRqei5Mokde3CV3K9Ut4nAGZ";
const amount = "2";
const memo = "Test Memo";

kinService
  .submitPayment(account.secret, destination, amount, memo, 0) // Use your App Index instead 0
  .then((result) => {
    console.log("Payment submitted on Blockchain", result);
  });