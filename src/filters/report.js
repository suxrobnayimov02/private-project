export function formatPrice(value) {
  if (value !== undefined) {
    var val = (value / 1).toFixed(0).replace(' ', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  } else {
    return 0
  }
}
