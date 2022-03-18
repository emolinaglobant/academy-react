const verifyEmail = (email = "e") => {
  if (email.includes("@gmail.com")) {
    return true;
  } else {
    return false;
  }
};

const verifyphoneNumber = (expected = "+0") => {
  const cut = expected.split(" ");
  if (cut[0].includes("+51") && cut[1].length == 9) {
    return true;
  }
  return false;
};

const verifyCorporativeSolidoct = (email = "e") => {
  if (email == "admin@solidoct.com") {
    return true;
  }
  return false;
};

const verifyPassword = (pass) =>
  pass.length >= 8 &&
  (pass.match(/[A-Z]/g) ? pass.match(/[A-Z]/g).length >= 1 : false);

const verifyMatchBetweenPasswords = (passwordOne, passwordTwo) => {
  if (passwordOne == passwordTwo) {
    return true;
  }
  return false;
};

const checkEmptyFields = (fields) => {
  if (fields == null || undefined || "") {
    return true;
  }
  return false;
};

const validateBirth = (dateBirth = "10") => {
  if (dateBirth.includes("-") || dateBirth.includes("/")) {
    return true;
  }
  return false;
};

const validateName = (name = "yefer garcia") => {
  const cut = name.split(" ");

  if ((cut.length = 1)) {
    return true;
  }

  return false;
};

module.exports = {
  verifyEmail,
  verifyphoneNumber,
  verifyCorporativeSolidoct,
  verifyPassword,
  verifyMatchBetweenPasswords,
  checkEmptyFields,
  validateBirth,
  validateName,
};
