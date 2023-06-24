export const findCurrentSkins = (data, weaponName) => {
  return data.filter((skin) => {
    const arrName = skin.displayName.split(" ");
    if (
      arrName.find((item) => item.toLowerCase() === weaponName) &&
      skin.displayIcon &&
      arrName[0] !== "Standard" &&
      arrName[0] !== "Melee"
    ) {
      return skin;
    }
  });
};
