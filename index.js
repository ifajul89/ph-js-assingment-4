function calculateMoney(soldTicket) {
  if (soldTicket < 0) {
    return "Please Enter a Valid Number";
  }
  return soldTicket * 120 - (500 + 8 * 50);
}

console.log(calculateMoney(0));

// Second Question

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  const lastCharacter = name.charAt(name.length - 1);
  if (
    lastCharacter === "a" ||
    lastCharacter === "e" ||
    lastCharacter === "i" ||
    lastCharacter === "o" ||
    lastCharacter === "y" ||
    lastCharacter === "w" ||
    lastCharacter === "u"
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

console.log(checkName("Rony"));

// Third Question

function deleteInvalids(array) {
  let onlyNumArray = [];
  for (let i of array) {
    if (typeof i === "number" && !isNaN(i)) {
      onlyNumArray.push(i);
    }
  }
  return onlyNumArray;
}

console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);

// Queston 4

// { name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
function password(obj) {
  if (!obj.name || !obj.birthYear || !obj.siteName) {
    return "Please enter all values";
  }

  const generatedPassword = `${
    obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1)
  }#${obj.name}@${obj.birthYear}`;

  return generatedPassword;
}

console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);

// Question 5

function monthlySavings(income, livingCost) {
  if (Array.isArray(income) === false || typeof livingCost !== "number") {
    return "Invalid Input";
  }

  let totalIncome = 0;
  for (let eachProjectIncome of income) {
    if (eachProjectIncome >= 3000) {
      totalIncome += eachProjectIncome - eachProjectIncome * (20 / 100);
    } else {
      totalIncome += eachProjectIncome;
    }
  }
  const savings = totalIncome - livingCost;

  if (savings < 0) {
    return "Earn More";
  }

  return `Savings is ${savings} and total income is ${totalIncome}`;
}

console.log(monthlySavings(100, [900, 2700, 3400]));
