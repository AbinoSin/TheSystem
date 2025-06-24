function today() {
  dayjs.extend(window.dayjs_plugin_dayOfYear);
  let date = dayjs().dayOfYear();
  return date;
}

// Display on page
document.getElementById("dayOfYear").textContent = today();

let toDay = [];
toDay[today()] = "Todays Stats";
