const person = [
  "Albigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (name, length, search) => {
  if (!name || typeof name === "number") return "Input search name Invalid";
  if (!length && length !== 0) return "Input must be a number";
  if (length <= 0) return "input must be greater than zero";
  if (typeof search !== "function") return "callback arguments invalid";
  let result = [];
  person.forEach((e) => {
    if (search(name, e) === true && result.length < length) result.push(e);
  });
  return result;
};

const getName = (searched, el) => {
  return el.toLowerCase().includes(searched);
};

console.log(searchName("an", 3, getName));
