const array = [
  {
    Name: "Ari",
    Tel: "323233444",
    Gender: "Female",
    Location: "MXN"
  },
  {
    Name: "Alfredo",
    Tel: "35456632",
    Gender: "Male",
    Location: "MXN"
  },
  {
    Name: "Elizabeth",
    Tel: "526548633",
    Gender: "Female",
    Location: "USA"
  },
  {
    Name: "Gabriel",
    Tel: "668462186",
    Gender: "Male",
    Location: "ARG"
  },
  {
    Name: "Sarahi",
    Tel: "331256985",
    Gender: "Female",
    Location: "MXN"
  }
];

//console.log(array);

const sorting = data => {
  data.sort((a, b) => {
    return a.Name > b.Name ? 1 : a.Name < b.Name ? -1 : 0;
  });
};
sorting(array);
//console.log(array);

const filtering = (data, prop, value) => {
  return data.filter(x => x[prop] === value);
};
const filteredArray = filtering(array, "Name", "Sarahi");
//console.log(filteredArray);

const grouping = (data, prop) => {
  return data.reduce((current, x) => {
    if (!current[x[prop]]) {
      current[x[prop]] = [];
    }
    current[x[prop]].push(x);
    return current;
  }, {});
};
//const groupedArray = grouping(array, 'Gender');
//console.log(groupedArray);

const mappingColors = data => {
  return data.map(x => {
    return {...x, color: x.Gender === "Male" ? "Red" : "Blue" };
  });
};

//const Colored = mappingColors(array);
//console.log(Colored);

sorting(array);
const finalArray = grouping(
  mappingColors(filtering(array, "Location", "MXN")),
  "Gender"
);

console.log(finalArray)