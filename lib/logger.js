/* eslint-disable no-console */

"use strict";

const LEVELS = {
  info: 10,
  warn: 20,
  error: 30
};

let level = LEVELS.info;

const logger = {

  setLevel(newLevel) {
    const lowerLevel = (newLevel || "info").toLowerCase();
    const numericLevel = LEVELS[lowerLevel];

    if (!numericLevel) {
      throw new Error(
        `Log level must be one of ${Object.keys(LEVELS).join(", ")}. Received "${newLevel}".`);
    }

    level = numericLevel;
  },

  info(/* messages */) {
    if (level <= LEVELS.info) {
      console.info.apply(console, arguments); // eslint-disable-line prefer-spread
    }
  },

  warn(/* messages */) {
    if (level <= LEVELS.warn) {
      console.warn.apply(console, arguments); // eslint-disable-line prefer-spread
    }
  },

  error(/* messages */) {
    if (level <= LEVELS.error) {
      console.error.apply(console, arguments); // eslint-disable-line prefer-spread
    }
  }
};

module.exports = logger;
