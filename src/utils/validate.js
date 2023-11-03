export const isValidData = (email, password) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid)
    return "Password requirements: Minimum eight characters, at least one letter, one number and one special character";
  return null;
};
