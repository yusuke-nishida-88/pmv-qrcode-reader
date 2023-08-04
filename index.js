window.onload = function() {
    liff
    .init({
        liffId: "1661178769-pwmMGL6x"
    })
    .then(() => {
        const idToken = liff.getDecodedIDToken();
        console.log(idToken); // print decoded idToken object
    });
  }
