// MeasurementUtility interface
interface MeasurementUtility {
    vh: number;
    vw: number;
    px: number;
    em: number;
    rem: number;
    dpi: number;
    inch: number;
    cm: number;
    mm: number;
    pt: number;
    pc: number;
}

// cm function
function cmm(value: number): MeasurementUtility {
    const hasWindow = typeof window !== 'undefined';
    const hasDocument = typeof document !== 'undefined';

    const dpi = hasWindow ? (window.devicePixelRatio * 96) : 96;
    const fontSize = hasDocument ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16;
    const rootFontSize = 16;

    return {
        get vh() {
            return hasWindow ? (value / 100) * window.innerHeight : (value / 100) * 1080; // Example default height
        },
        get vw() {
            return hasWindow ? (value / 100) * window.innerWidth : (value / 100) * 1920; // Example default width
        },
        get px() {
            return value;
        },
        get em() {
            return value * fontSize;
        },
        get rem() {
            return value * rootFontSize;
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

export default cmm;
