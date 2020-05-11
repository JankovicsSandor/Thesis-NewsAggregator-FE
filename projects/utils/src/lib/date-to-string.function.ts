export function DateToString(data: Date, separator: string = '-') {
  let year = data.getFullYear();
  let month = data.getMonth() + 1;
  let day = data.getDate();

  return `${year}${separator}${year}${month}${year}${day}`;
}
