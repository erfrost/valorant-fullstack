export const Token = async (refreshToken) => {
  const data = await fetch("http://localhost:8080/api/auth/signUp", {
    method: "POST",
    body: {
      refresh_token: refreshToken,
    },
  });
  return data;
};
