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
  if (!name || typeof name !== "string") return "Input search name Invalid";
  if (typeof length !== "number") return "Input must be a number";
  if (length <= 0) return "input must be greater than zero";
  if (typeof search !== "function") return "callback arguments invalid";
  let result = [];
  person.forEach((e) => {
    if (result.length < length && search(name, e)) result.push(e);
  });
  if (result.length === 0) return "Data Not Found";
  return result;
};

const getName = (searched, el) => {
  return el.toLowerCase().includes(searched);
};

console.log(searchName("an", 3, getName));
