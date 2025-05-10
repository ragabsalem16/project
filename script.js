document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // التحقق من البريد وكلمة السر
  if (email === "tasneem@example.com" && password === "01025461620") {
    alert("✅ تم تسجيل الدخول بنجاح");
    // ممكن تنقلي المستخدم لصفحة تانية لو حبيتي:
    // window.location.href = "home.html";
  } else {
    alert("❌ البريد الإلكتروني أو كلمة المرور غير صحيحة");
  }
});
