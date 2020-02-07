var saveResultAndReturn = {
  cache: "",
  test: function() {
    return (this.cache = "Hallo Welt!");
  }
};

console.log("Function", saveResultAndReturn.test());
console.log("Cache", saveResultAndReturn.cache);
