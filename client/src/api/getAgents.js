export const getAgents = async () => {
  const res = await fetch("https://valorant-api.com/v1/agents");
  return res;
};
