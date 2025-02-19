const filterByAge = (el) => {
  return el.age < 50;
};

const filterByScore = (el) => {
  return el.score > 75;
};

const filterByServiceRecord = (el) => {
  return el.serviceRecord > 5;
};

const sortByScore = (arr) => {
  let sortedCandidates = [...arr].sort((a, b) => b.score - a.score);
  return sortedCandidates;
};

const getMeanAge = (arr) => {
  let alter = 0;
  for (let elem of arr) {
    alter += elem.age;
  }
  return alter / arr.length;
};

const getMeanAgeReduce = (arr) => {
  let mean = arr.reduce((acc, el) => acc + el.age, 0) / (arr.length || 1);
  return mean;
};

const getNamesOnly = (arr) => {
  return arr.name;
};

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getMeanAgeReduce,
  getNamesOnly,
};
