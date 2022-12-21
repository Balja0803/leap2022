function prepare_breakfast() {
  let coffee_promise = new Promise((resolve, reject) =>
    resolve("coffee ready")
  );
  let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished frying egg");
    }, 1000);
  });
  let fry_bacon = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("bacon cooked");
    }, 2000);
  });
  let toast_bread = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("toast pops");
    }, 1000);
    resolve("jam on bread");
  });
  let pour_juice = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("juice poured");
    }, 3000);
  });
  let combined_promise = Promise.all([
    coffee_promise,
    egg_promise,
    fry_bacon,
    toast_bread,
    pour_juice,
  ]);
  return combined_promise;
}
async function morning() {
  let result = await prepare_breakfast();
  console.log(result);
}
morning();
