export const sendOtpService = (
  phone
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        otp: "1234",
      });
    }, 1000);
  });
};

export const verifyOtpService = (
  otp
) => {
  return new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        if (otp === "1234") {
          resolve({
            success: true,
          });
        } else {
          reject("Invalid OTP");
        }
      }, 1000);
    }
  );
};

export const loginService = (
  uniqueId,
  password
) => {
  return new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        if (
          uniqueId === "admin" &&
          password === "1234"
        ) {
          resolve({
            success: true,
          });
        } else {
          reject(
            "Invalid Credentials"
          );
        }
      }, 1000);
    }
  );
};