import * as data from "./data.json";
const deepmerge = require("deepmerge");

const original = [...data.source];
const update = [...data.current];

const arrayMerge = (destination, source) => {
  return [...destination, ...source];
};

const merge = (destination, source) => {
  return destination.map(driver => {
    const replacementDriver = source.find(
      updatedDriver => updatedDriver.driverUserId === driver.driverUserId
    );
    return !replacementDriver
      ? driver
      : deepmerge(driver, replacementDriver, { arrayMerge });
  });
};

const merged = merge(original, update);
console.log("merged: ", merged);

module.exports = { merge, deepmerge };
