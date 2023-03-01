// if (!Number.prototype.hasOwnProperty("thousand")) {
//   Object.defineProperty(Number.prototype, "thousand", {
//     get: function () {
//       const thousand = new Intl.NumberFormat(navigator.language);
//       return thousand.format(this);
//     },
//     configurable: true,
//     enumerable: false,
//   });
// }

export default function thousand(value) {
  const thousand = new Intl.NumberFormat(navigator.language);
  return thousand.format(value);
}
