window.onload = function() {
    liff
    .init({
        liffId: "1661178769-pwmMGL6x"
    })
    .then(() => {
        const idToken = liff.getDecodedIDToken();
        window.alert(idToken.birthdate);
    }).catch((err) => {
        window.alert('error')
    });
  }
