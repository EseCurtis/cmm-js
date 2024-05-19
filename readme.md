
# cmm-util

## Overview

`cmm-util` is a utility library that provides a convenient way to convert a given value into equivalent pixel values based on different measurement units. It supports a variety of units including viewport height (vh), viewport width (vw), pixels (px), ems (em), root ems (rem), dots per inch (dpi), inches, centimeters (cm), millimeters (mm), points (pt), and picas (pc).

## Installation

You can install `cmm-util` using npm:

```bash
npm install cmm-util
```

## Usage

Here's how you can use `cmm-util` in your JavaScript or TypeScript project:

```javascript
import cmm from 'cmm-util';

const measurement = cmm(100);

console.log(measurement.vh);  // Outputs the pixel equivalent of the value in viewport height units
console.log(measurement.vw);  // Outputs the pixel equivalent of the value in viewport width units
console.log(measurement.px);  // Outputs the pixel equivalent of the value in pixels
console.log(measurement.em);  // Outputs the pixel equivalent of the value in ems
console.log(measurement.rem); // Outputs the pixel equivalent of the value in root ems
console.log(measurement.dpi); // Outputs the pixel equivalent of the value in dots per inch
console.log(measurement.inch); // Outputs the pixel equivalent of the value in inches
console.log(measurement.cm);  // Outputs the pixel equivalent of the value in centimeters
console.log(measurement.mm);  // Outputs the pixel equivalent of the value in millimeters
console.log(measurement.pt);  // Outputs the pixel equivalent of the value in points
console.log(measurement.pc);  // Outputs the pixel equivalent of the value in picas
```

## API

The `cmm` function takes a number as input and returns an object with properties for each measurement unit. Each property is a getter that calculates the equivalent pixel value of the input based on the corresponding unit when accessed.


## License

`cmm-util` is [MIT licensed](LICENSE).
