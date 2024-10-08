export default function getListStudentIds(args) {
  /**
   * if it is not an array return empty array else return the id
   */
  if (!Array.isArray(args)) return [];
  return args.map((item) => item.id);
}
