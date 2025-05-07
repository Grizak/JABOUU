const convert = {
  coords: {
    decToDMS: function (DD = 0) {
      if (typeof DD !== "number") {
        return "DD Must be A number";
      }
      const D = Math.floor(DD);
      const M = Math.floor(60 * (DD - D));
      const S = Math.round(60 * (60 * (DD - D) - M));
      return `${D}° ${M}' ${S}"`;
    },
    DMSToDec: function (degrees = 0, minutes = 0, seconds = 0) {
      if (
        typeof degrees !== "number" ||
        typeof minutes !== "number" ||
        typeof seconds !== "number"
      ) {
        return "Degrees input, minutes input and seconds input must all be numbers";
      }
      const sign = degrees < 0 ? -1 : 1;
      return Number(
        sign * (Math.abs(degrees) + minutes / 60 + seconds / 3600).toFixed(5)
      ).toString();
    },
  },
  hex_dec_bin: {
    hexToDec: function (hexNum) {
      return parseInt(hexNum, 16);
    },
    decToHex: function (decNum) {
      return decNum.toString(16).toUpperCase();
    },
    decToBin: function (decNum) {
      return decNum.toString(2);
    },
    binToDec: function (binNum) {
      return parseInt(binNum, 2);
    },
    hexToBin: function (hexNum) {
      return this.decToBin(this.hexToDec(hexNum));
    },
    binToHex: function (binNum) {
      return this.decToHex(this.binToDec(binNum));
    },
  },
  colors: {
    hexToRgb: function (hex) {
      const bigint = parseInt(hex.replace("#", ""), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    },
    rgbToHex: function (r, g, b) {
      return (
        "#" +
        [r, g, b]
          .map((x) => x.toString(16).padStart(2, "0"))
          .join("")
          .toUpperCase()
      );
    },
    rgbToHsl: function (r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      let h,
        s,
        l = (max + min) / 2;
      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h *= 60;
      }
      return {
        h: Math.round(h),
        s: +(s * 100).toFixed(1),
        l: +(l * 100).toFixed(1),
      };
    },
    hslToRgb: function (h, s, l) {
      s /= 100;
      l /= 100;
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = l - c / 2;
      let r = 0,
        g = 0,
        b = 0;
      if (h < 60) [r, g, b] = [c, x, 0];
      else if (h < 120) [r, g, b] = [x, c, 0];
      else if (h < 180) [r, g, b] = [0, c, x];
      else if (h < 240) [r, g, b] = [0, x, c];
      else if (h < 300) [r, g, b] = [x, 0, c];
      else [r, g, b] = [c, 0, x];
      return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
      };
    },
  },
};

const site = {
  convert,
};
