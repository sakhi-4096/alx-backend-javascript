// Creating an Int8 TypedArray with specified length, position, and value
export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer and Int8Array
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);

  // Set the specified value at the given position
  int8Array.set([value], position);

  // Return a DataView of the new ArrayBuffer
  return new DataView(buffer);
}
