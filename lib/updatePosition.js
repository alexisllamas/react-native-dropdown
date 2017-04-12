import React, { Component } from 'react';

const {
  NativeModules: {
    UIManager
  }
} = require('react-native');

module.exports = function (ref, debug) {
  const handle = React.findNodeHandle(ref);
  setTimeout(() => {
    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      if (debug) {
        console.log(x, y, width, height, pageX, pageY);
      }
      ref._currentPosition(pageX, pageY);
    });
  }, 0);
};
