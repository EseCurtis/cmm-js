

```markdown
# cmm-util - Measurement Utility

`cmm-util` is a versatile measurement utility for JavaScript that provides various unit conversions such as pixels, viewport units, em, dpi, inches, centimeters, millimeters, points, and picas. It is designed to work flexibly across different environments, including those without access to the `window` object.

## Installation

You can install the package using npm or yarn:

```sh
npm install cmm-util
```

or

```sh
yarn add cmm-util
```

## Usage

Import the `cm` function and use it to create a measurement utility object with the given value. This object provides various unit conversions.

### Example

```javascript
import cm from 'cmm-util';

const measurement = cm(100);

console.log('100px in vh:', measurement.vh);
console.log('100px in vw:', measurement.vw);
console.log('100px in em:', measurement.em);
console.log('100px in dpi:', measurement.dpi);
console.log('100px in inches:', measurement.inch);
console.log('100px in cm:', measurement.cm);
console.log('100px in mm:', measurement.mm);
console.log('100px in pt:', measurement.pt);
console.log('100px in pc:', measurement.pc);
```

## API

### cm(value: number): MeasurementUtility

Creates a measurement utility object with the given value.

#### Parameters

- `value` (number): The value to be used for unit conversion.

#### Returns

- `MeasurementUtility`: An object with various unit conversions.

### MeasurementUtility Properties

- `vh` (number): Converts the value to viewport height units.
- `vw` (number): Converts the value to viewport width units.
- `px` (number): Returns the value in pixels.
- `em` (number): Converts the value to em units based on the root font size.
- `dpi` (number): Converts the value to DPI-adjusted pixels.
- `inch` (number): Converts the value to inches.
- `cm` (number): Converts the value to centimeters.
- `mm` (number): Converts the value to millimeters.
- `pt` (number): Converts the value to points (1pt = 1.333px).
- `pc` (number): Converts the value to picas (1pc = 12pt = 16px).

## Environment Compatibility

The `cmm-util` utility is designed to work in various environments, including those without access to the `window` object (e.g., Node.js or server-side rendering). In such cases, it provides reasonable default dimensions:

- Default viewport height: 1080 pixels
- Default viewport width: 1920 pixels
- Default DPI: 96
- Default root font size: 16 pixels

These defaults ensure that the utility remains functional and provides meaningful conversions even in non-browser environments.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## Author

Developed by [Ese Curtis](https://esecurtis.netlify.app).

---


```
