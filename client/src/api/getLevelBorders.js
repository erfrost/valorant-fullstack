export const getLevelBorders = async () => {
  const res = await fetch("https://valorant-api.com/v1/levelborders");
  return res;
};
