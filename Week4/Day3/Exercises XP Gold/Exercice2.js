function KeysAndValues(obj) {
  const keys = Object.keys(obj).sort();
  const values = keys.map((key) => obj[key]);
  return [keys, values];
}
console.log(KeysAndValues({ a: 1, b: 2, c: 3 }));
console.log(KeysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(KeysAndValues({ key1: true, key2: false, key3: undefined }));
