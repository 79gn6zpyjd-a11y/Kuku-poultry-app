function openDashboard() {
  document.querySelector(".hero").style.display = "none";
  document.querySelector(".main-app").style.display = "block";
}

function createAccount() {
  alert("✅ Account created successfully!");
}

function login() {
  alert("✅ Login successful!");
}

function likePost(btn) {
  btn.innerHTML = "❤️ Liked";
}

function openPayment() {
  document.getElementById("paymentModal").style.display = "flex";
}

function closePayment() {
  document.getElementById("paymentModal").style.display = "none";
}

function sendNotification() {
  alert("🔔 Notification sent!");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}
