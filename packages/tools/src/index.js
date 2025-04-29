/**
 * 根据模板字符串格式化日期对象
 * @param {Date} date
 * @param {string} template
 * @example formatDate(new Date(), "{Y}-{M}-{D} {H}:{I}:{S}")
 * @returns {string}
 */
export function formatDate(date, template) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dates = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDay() + 1;

  const fillZero = (value) => (value < 10 ? `0${value}` : String(value));

  const templateMap = {
    "{y}": year.toString().slice(-2),
    "{Y}": year,
    "{m}": month,
    "{M}": fillZero(month),
    "{d}": dates,
    "{D}": fillZero(dates),
    "{h}": hours,
    "{H}": fillZero(hours),
    "{i}": minutes,
    "{I}": fillZero(minutes),
    "{s}": seconds,
    "{S}": fillZero(seconds),
    "{w}": day,
  };

  let formated = template;
  const keys = Object.keys(templateMap);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = String(templateMap[key]);
    formated = formated.replace(key, value);
  }
  return formated;
}

/**
 * get a random hex color string
 * @return {string}
 */
export function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}
