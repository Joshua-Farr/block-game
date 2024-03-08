export const generateRandomColor = (colorList: string[]) => {
  const randomNumber = Math.floor(Math.random() * colorList.length);

  return colorList[randomNumber];
};
