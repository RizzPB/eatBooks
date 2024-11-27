document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;
  
    if (email && password) {
      alert(`Login Successful! \nEmail: ${email}\nRemember Me: ${rememberMe}`);
    } else {
      alert("Please fill in all fields.");
    }
  });
  