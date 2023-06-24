export const getWeapons = async () => {
  const res = await fetch("https://valorant-api.com/v1/weapons");
  return res;
};
