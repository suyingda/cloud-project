const getAllBy = require.context('./', false, '.js');
console.log(getAllBy)
getAllBy.keys().forEach((items) => {
    console.log(items)
});
