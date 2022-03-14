  function onSubmit() {
    if (
      (document.getElementById("password").value == "123") &
      (document.getElementById("username").value == "johndoe@gmail.com")
    ) {
      window.location.href = "account2.html";
    } else {
      {
        return false;
      }
    }
  }