/**
 * Function to create a measurement utility object with a given value.
 * @param {number} value - The value to be used for unit conversion.
 * @returns {MeasurementUtility} The measurement utility object with the given value.
 */
function cmm(value: number): MeasurementUtility {
    const hasWindow = typeof window !== 'undefined';
    const hasDocument = typeof document !== 'undefined';

    const dpi = hasWindow ? (window.devicePixelRatio * 96) : 96;
    const fontSize = hasDocument ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16;
    
    // Assuming default dimensions for environments without window
    const defaultWindowHeight = 1080; // Example default height
    const defaultWindowWidth = 1920;  // Example default width

    return {
        get vh() {
            return hasWindow ? (value / 100) * window.innerHeight : (value / 100) * defaultWindowHeight;
        },
        get vw() {
            return hasWindow ? (value / 100) * window.innerWidth : (value / 100) * defaultWindowWidth;
        },
        get px() {
            return value;
        },
        get em() {
            return value * fontSize;
        },
        get dpi() {
            return (value / 96) * dpi;
        },
        get inch() {
            return value / dpi;
        },
        get cm() {
            return value / (dpi / 2.54);
        },
        get mm() {
            return (value / (dpi / 2.54)) * 10;
        },
        get pt() {
            return value * 0.75; // 1pt = 1.333px (96px = 72pt)
        },
        get pc() {
            return value * 0.0625; // 1pc = 12pt = 16px (96px = 6pc)
        }
    };
}

// Interface for the measurement utility object
interface MeasurementUtility {
    vh: number;
    vw: number;
    px: number;
    em: number;
    dpi: number;
    inch: number;
    cm: number;
    mm: number;
    pt: number;
    pc: number;
}

export default cmm;
