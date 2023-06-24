export const getSkins = async () => {
  const res = await fetch("https://valorant-api.com/v1/weapons/skins");
  return res;
};
