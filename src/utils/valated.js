export function isValidOption(option) {
  return isObject(option) && !isEmptyObject(option) &&
    hasSeriesKey(option) &&
    isSeriesArray(option) && !isSeriesEmpty(option)
}

export function isObject(option) {
  return Object.prototype.isPrototypeOf(option)
}

export function isEmptyObject(option) {
  return Object.keys(option).length === 0
}

export function hasSeriesKey(option) {
  return !!option['series']
}

export function isSeriesArray(option) {
  return Array.isArray(option['series'])
}

export function isSeriesEmpty(option) {
  return option['series'].length === 0
}
