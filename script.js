// Функция для валидации email
function validateEmail() {
  var emailInput = document.getElementById('Email');
  var email = emailInput.value;

  if (!email || !isValidEmail(email)) {
    // Если email пустой или не прошел валидацию
    alert('Пожалуйста, введите корректный адрес электронной почты.');
    return false;
  } else {
    // Если email валиден, можно выполнять дальнейшие действия
    return true;
  }
}

// Функция для проверки валидности email
function isValidEmail(email) {
  // Регулярное выражение для проверки валидности email
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}