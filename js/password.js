function checkPassword() {
  const input = document.getElementById("passwordInput").value.toLowerCase().trim();
  const map = {
    "alpha": "1.html",
    "bravo": "2.html",
    "charlie": "3.html",
    "delta": "4.html",
    "echo": "5.html",
    "foxtrot": "6.html"
  };

  if (map[input]) {
    window.location.href = map[input];
  } else {
    document.getElementById("message").innerText = "Access Denied.";
  }
}
