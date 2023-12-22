// ������� ��� ��������� email
function validateEmail() {
  var emailInput = document.getElementById('Email');
  var email = emailInput.value;

  if (!email || !isValidEmail(email)) {
    // ���� email ������ ��� �� ������ ���������
    alert('����������, ������� ���������� ����� ����������� �����.');
    return false;
  } else {
    // ���� email �������, ����� ��������� ���������� ��������
    return true;
  }
}

// ������� ��� �������� ���������� email
function isValidEmail(email) {
  // ���������� ��������� ��� �������� ���������� email
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}