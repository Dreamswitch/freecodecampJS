//exo 2 freecodecamp
function diffArray(arr1, arr2) {
  let all = [...arr1, ...arr2];
  let unique = [...new Set(all)];
  return unique.filter(el => arr1.includes(el) && !arr2.includes(el) || arr2.includes(el) && !arr1.includes(el));
}

//exo 3 freecodecamp
function destroyer(arr, ...param) {
  return arr.filter(el => !param.includes(el));
}

//exo 4 freecodecamp
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  collection.map(el => {
    let good = [];
    for (let o in source) {
      el[o] === source[o] ? good.push(true) : good.push(false);
    }
    if (good.every(el => el)) arr.push(el);
  });
  // Only change code above this line
  return arr;
}

//exo 5 freecodecamp
function spinalCase(str) {
  return str.split(/([A-Z]{1}[a-z]*)/).map(el => el.trim().replaceAll("-", "").replaceAll("_", "")).filter(el => el !== "").join('-').toLowerCase();
}

//exo 6 freecodecamp
function translatePigLatin(str) {
  const c = new RegExp(/^[bcdfghjklmnpqrstvwxyz]+/);
  const v = new RegExp(/^[aeiou]+/);
  return str.split("")[0].match(c) ? `${str.replace(c, "")}${str.match(c).join("")}ay` : `${str}way`;
}

//exo 7 freecodecamp
function myReplace(str, before, after) {
  return before[0].match(/[a-z]/) ? str.replace(before, after.toLowerCase()) : str.replace(before, after[0].toUpperCase() + after.substring(1));
}

//exo 8 freecodecamp
function pairElement(str) {
  let result = str.split('').map(e => e === "G" ? [e, "C"] : e === "C" ? [e, "G"] : e === "T" ? [e, "A"] : [e, "T"]);
  return result;
}

//exo 9 freecodecamp
function fearNotLetter(str) {
  const num = str.split('').map(e => e.charCodeAt());
  const fil = num.filter((e, i) => {
    if (i + 1 !== num.length) {
      return e + 1 !== num[i + 1];
    }
  });
  return fil.length !== 0 ? fil.map(e => String.fromCharCode(e + 1)).join() : "undefined";
}

//exo 10 freecodecamp
function uniteUnique(...arr) {
  const tab = [];
  arr.forEach(e => tab.push(...e));
  return [...new Set(tab)];
}

//exo 11 freecodecamp
function convertHTML(str) {
  return str.replaceAll(/&/g, "&amp;").replaceAll(/</g, "&lt;").replaceAll(/>/g, "&gt;").replaceAll(/"/g, "&quot;").replaceAll(/'/g, "&apos;");
}

//exo 12 freecodecamp
function sumFibs(num) {
  let tab = [0, 1];
  let result = 1;
  for (let i = tab[tab.length - 1]; i <= num; i = tab[tab.length - 1] + tab[tab.length - 2]) {
    tab.push(i);
    if (i % 2 !== 0) result += i;
  }
  return result;
}

//exo 13 freecodecamp
function sumPrimes(num) {
  const tab = [...Array(num + 1).keys()].slice(1);
  return tab.filter(e => e <= 2 || tab.slice(1, e - 1).every(f => !Number.isInteger(e / f))).reduce((a, b) => a + b) - 1;
}

//exo 14 freecodecamp
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = [...new Array(max + 1).keys()].slice(min);
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b); //if "a%b" is equal to "a" we reverse "a" and "b" , return the last known value of "a" before "b" is equal to "0"
  const lcm = (a, b) => a * b / gcd(a, b);
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

// exo 15 freecodecamp
function dropElements(arr, func) {
  if (arr.length === 0) return [];
  if (func(arr[0])) return arr;
  else return dropElements(arr.slice(1), func);
}

// exo 16 freecodecamp
function steamrollArray(arr) {
  return arr.join(",").split(",").filter(e => e !== "").map(e => isNaN(e) ? e == "[object Object]" ? {} : e : +e);
}

//exo 17 freecodecamp
function binaryAgent(str) {
  return str.split(" ").map(e => String.fromCharCode(parseInt(e, 2))).join('');
}

//exo 18 freecodecamp
function truthCheck(collection, pre) {
  return collection.every(e => e[pre] ? true : false);
}

// exo 19 freecodecamp
function addTogether(...args) {
  if (args.length > 1) {
    return args.every(e => typeof e === "number") ? args.reduce((a, b) => a + b) : undefined;
  } else {
    if (typeof args[0] !== "number") return undefined;
    return function (c) {
      args = [...args, c];
      return args.every(e => typeof e === "number") ? args.reduce((a, b) => a + b) : undefined;
    };
  }
}