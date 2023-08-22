// util to capitalize first letter of a string
export const capitalize = (text) =>
  text[0].toUpperCase() + text.substring(1).toLowerCase();
// util to format project title to take out dashes and capitalize
export const formatProjectTitle = (text) => {
  const words = text.split("-");
  const capitalizedWords = words.map((word) => capitalize(word));
  return capitalizedWords.join(" ");
};
