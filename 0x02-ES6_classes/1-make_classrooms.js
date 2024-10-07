import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  let arr = [];
  for (const val of [19, 20, 34]) arr.push(new ClassRoom(val));
  return arr;
}
