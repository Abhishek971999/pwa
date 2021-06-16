if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((resgistration) => {
      console.log(resgistration);
    })
    .catch((err) => {
      console.log(err);
    });
}
