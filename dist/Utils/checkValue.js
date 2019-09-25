export default function checkValue(value) {
  return typeof value !== 'undefined' && value !== null && value !== '';
}