window.onload = function() {
    liff
    .init({
        liffId: "1661178769-pwmMGL6x"
    })
    .then(() => {
        if (liff.isLoggedIn()) {
        const idToken = liff.getDecodedIDToken();
        console.log(idToken);
        }
    }).catch((err) => {
        console.log('error')
    });
  }
