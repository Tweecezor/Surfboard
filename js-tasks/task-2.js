const workers = [
  { name: "John", salary: 500 },
  { name: "Mike", salary: 1300 },
  { name: "Linda", salary: 1500 },
];

// const getWorthyWorkers = (workers) =>
//   workers
//     .map((item) => {
//       if (item.salary > 1000) {
//         return item.name;
//       }
//     })
//     .filter((item) => item != null);

function getWorthyWorkers(workers) {
  const reachWorkers = [];
  workers.forEach((item) => {
    if (item.salary > 1000) {
      reachWorkers.push(item.name);
    }
  });
  return reachWorkers;
}

console.log(getWorthyWorkers(workers));
