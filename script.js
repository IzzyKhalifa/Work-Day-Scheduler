const minHour = 9;
const maxHour = 17;

var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

function classSelection(hour) {
  var currentTime = moment().hour();
  if (hour < currentTime) {
    return "past";
  } else if (hour > currentTime) {
    return "future";
  } else {
    return "present";
  }
}

function save(event) {
  const memo = localStorage.memo ? JSON.parse(localStorage.memo) : {};
  memo[event.data.hour] = $(`#${event.data.hour}`)[0].value;
  localStorage.setItem("memo", JSON.stringify(memo));
}

for (var i = minHour; i <= maxHour; i += 1) {
  $(`#${i}`).addClass(classSelection(i));
  $(`#${i}~button`).click({ hour: i }, save);
}
