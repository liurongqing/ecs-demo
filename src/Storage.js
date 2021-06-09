export const TYPES_ENUM = {
  i8: 'i8',
  ui8: 'ui8',
  ui8c: 'ui8c',
  i16: 'i16',
  ui16: 'ui16',
  i32: 'i32',
  ui32: 'ui32',
  f32: 'f32',
  f64: 'f64'
}

export const TYPES_NAMES = {
  i8: 'Int8',
  ui8: 'Uint8',
  ui8c: 'Uint8Clamped',
  i16: 'Int16',
  ui16: 'Uint16',
  i32: 'Int32',
  ui32: 'Uint32',
  f32: 'Float32',
  f64: 'Float64'
}

export const TYPES = {
  i8: Int8Array,
  ui8: Uint8Array,
  ui8c: Uint8ClampedArray,
  i16: Int16Array,
  ui16: Uint16Array,
  i32: Int32Array,
  ui32: Uint32Array,
  f32: Float32Array,
  f64: Float64Array
}

const UNSIGNED_MAX = {
  uint8: 2 ** 8,
  uint16: 2 ** 16,
  uint32: 2 ** 32
}

const roundToMultiple4 = x => Math.ceil(x / 4) * 4

export const $storeRef = Symbol('storeRef')
export const $storeSize = Symbol('storeSize')
export const $storeMaps = Symbol('storeMaps')
export const $storeFlattened = Symbol('storeFlattened')
export const $storeBase = Symbol('storeBase')
export const $storeType = Symbol('storeType')

export const $storeArrayCounts = Symbol('storeArrayCount')
export const $storeSubarrays = Symbol('storeSubarrays')
export const $storeCursor = Symbol('storeCursor')
export const $subarrayCursors = Symbol('subarrayCursors')
export const $subarray = Symbol('subarray')
export const $parentArray = Symbol('subStore')
export const $tagStore = Symbol('tagStore')

export const $queryShadow = Symbol('queryShadow')
export const $serializeShadow = Symbol('serializeShadow')

export const $indexType = Symbol('indexType')
export const $indexBytes = Symbol('indexBytes')

const stores = {}
