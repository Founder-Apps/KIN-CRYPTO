kinService
  .randomKeyPair()
  .then((acc) => {
    kinService.createAccount(acc.secret).then((result: any) => {
      console.log("Account created on Blockchain", result);
    });
  })
  .then((e) => {
    console.log("An error occurred", e);
  });