export default function displayDate(string) {
  const year = string.slice(0, 4);
  const month = string.slice(5, 7);
  const day = string.slice(8, 10);

  let displayMonth = "";
  let displayDay = day;

  if (day.startsWith("0")) {
    displayDay = day.slice(1);
  }
  if (day.endsWith("1") && day !== "11") {
    displayDay += "st";
  } else if (day.endsWith("2") && day !== "12") {
    displayDay += "nd";
  } else if (day.endsWith("3") && day !== "13") {
    displayDay += "rd";
  } else displayDay += "th";

  switch (month) {
    case "01":
      displayMonth = "January";
      break;
    case "02":
      displayMonth = "February";
      break;
    case "03":
      displayMonth = "March";
      break;
    case "04":
      displayMonth = "April";
      break;
    case "05":
      displayMonth = "May";
      break;
    case "06":
      displayMonth = "June";
      break;
    case "07":
      displayMonth = "July";
      break;
    case "08":
      displayMonth = "August";
      break;
    case "09":
      displayMonth = "September";
      break;
    case "10":
      displayMonth = "October";
      break;
    case "11":
      displayMonth = "November";
      break;
    case "12":
      displayMonth = "December";
      break;
  }

  return `${displayDay} of ${displayMonth}, ${year}`;
}
