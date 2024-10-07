import ClassRoom from "./0-classroom.js";

/**
 * Creates an array of {@link ClassRoom}s with a specific size.
 * @returns An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  let arr = [];
  for (const val of [19, 20, 34]) arr.push(new ClassRoom(val));
  return arr;
}
