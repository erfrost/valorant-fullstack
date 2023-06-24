export const agentsTransform = (agents) => {
  return agents
    .filter((item, index) => index !== 8)
    .map((agent) => {
      if (agent.displayName === "KAY/O")
        return { ...agent, displayName: "KAYO" };
      else return agent;
    });
};
