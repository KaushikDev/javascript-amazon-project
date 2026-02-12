import { formatCurrency } from "./../scripts/utils/money.js";

//test#1
if (formatCurrency(2095) === "20.95") {
  console.log("Test Passed");
} else console.log("Test Failed");
