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