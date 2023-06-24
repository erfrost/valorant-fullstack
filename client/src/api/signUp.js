export const signUp = async (nickname, email, password) => {
  console.log(nickname, email, password);
  const data = await fetch("http://localhost:8080/api/auth/signUp", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      nickname: nickname,
      email: email,
      password: password,
    },
  });
  return data;
};

// сервак принимает походу только json я того рот ебал у меня будет веселое утро походу
