const char_map = function(s1, s2) {
  let map = new Map();

  // s1 must have the same length as s2
  if (s1.length !== s2.length) {
    return false;
  }

  // iterate s1 to check mapping
  for (let i = 0; i < s1.length; i++) {
    if (!map.has(s1[i])) {
      map.set(s1[i], s2[i]);
    } else {
      if (map.get(s1[i]) !== s2[i]) {
        return false;
      }
    }
  }
  return true;
};

if (process.argv.length === 4) {
  const s1 = process.argv[2];
  const s2 = process.argv[3];
  console.log(char_map(s1, s2));
}
