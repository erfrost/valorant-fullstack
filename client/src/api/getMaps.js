export const getMaps = async () => {
  const res = await fetch("https://valorant-api.com/v1/maps");
  return res;
};
