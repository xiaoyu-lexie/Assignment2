/*************  Question 1 *************/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//P1
const p1 = (arr) => {
  return arr.map((item) => ({
    quantity: item.quantity * 2,
    price: item.price * 2,
  }));
};

// console.log(p1(itemsObject));

//P2
const p2 = (arr) => {
  return arr.filter((item) => item.quantity > 2 && item.price > 300);
};

// console.log(p2(itemsObject));

//P3
const p3 = (arr) => {
  return arr.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
};

// console.log(p3(itemsObject));

/*************  Question 2 *************/
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return   The Sum Of  All The Elements In  An Array  ";

const q2 = (str) => {
  return str
    .replace(/[^a-zA-Z]+/g, " ")
    .trim()
    .toLocaleLowerCase();
};

// console.log(q2(string));

/*************  Question 3 *************/
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

// Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

const q3 = (first, second) => {
  let result = [];

  const helper = (a, b) => {
    if (a.uuid < b.uuid) {
      return -1;
    }
    if (a.uuid > b.uuid) {
      return 1;
    }
    return 0;
  };

  const firstSorted = first.sort(helper);
  const secondSorted = second.sort(helper);

  // two pointers
  let i = 0;
  let j = 0;

  while (i < firstSorted.length || j < secondSorted.length) {
    // if all elements in firstSorted have been finished going through OR secondSorted[j].uuid < firstSorted[i].uuid
    if (
      i === firstSorted.length ||
      secondSorted[j].uuid < firstSorted[i].uuid
    ) {
      result.push({
        uuid: secondSorted[j].uuid,
        name: null,
        role: secondSorted[j].role,
      });

      j++;
    } else if (
      // if all elements in secondSorted have been finished going through OR firstSorted[i].uuid < secondSorted[j].uuid
      j === secondSorted.length ||
      firstSorted[i].uuid < secondSorted[j].uuid
    ) {
      result.push({
        uuid: firstSorted[i].uuid,
        name: firstSorted[i].name,
        role: null,
      });

      i++;
    } else if (firstSorted[i].uuid === secondSorted[j].uuid) {
      result.push({
        uuid: firstSorted[i].uuid,
        name: firstSorted[i].name,
        role: secondSorted[j].role,
      });

      i++;
      j++;
    }
  }

  return result;
};

// console.log(q3(first, second));
