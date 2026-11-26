"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateTax, formatDuration, formatWork } = require("../js/calculator-node.cjs");

test("calculates elapsed delay and remaining work", () => {
  assert.deepEqual(
    calculateTax({
      postponements: 7,
      delay: 1,
      delayUnit: "days",
      remaining: 3,
      remainingUnit: "hours",
    }),
    { lostHours: 168, remainingMinutes: 180 }
  );
});

test("allows zero postponements", () => {
  assert.equal(
    calculateTax({
      postponements: 0,
      delay: 2,
      delayUnit: "hours",
      remaining: 30,
      remainingUnit: "minutes",
    }).lostHours,
    0
  );
});

test("rejects invalid values and time units", () => {
  assert.throws(() =>
    calculateTax({
      postponements: -1,
      delay: 1,
      delayUnit: "days",
      remaining: 1,
      remainingUnit: "hours",
    })
  );
  assert.throws(() =>
    calculateTax({
      postponements: 1,
      delay: 1,
      delayUnit: "fortnight",
      remaining: 1,
      remainingUnit: "hours",
    })
  );
});

test("formats elapsed time and remaining work", () => {
  assert.equal(formatDuration(0.5), "30 min");
  assert.equal(formatDuration(48), "2 days");
  assert.equal(formatWork(90), "1.5 hours");
});
