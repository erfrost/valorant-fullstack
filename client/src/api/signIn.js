export const signIn = async (email, password) => {
  const data = await fetch(
    "http://localhost:8080/api/auth/signInWithPassword",
    {
      method: "POST",
      body: {
        email: email,
        password: password,
      },
    }
  );
  return data;
};
