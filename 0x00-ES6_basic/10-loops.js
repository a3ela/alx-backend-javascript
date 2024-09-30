function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const val of array) {
    newArray.push(`${appendString}${val}`);
  }

  return newArray;
}

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
