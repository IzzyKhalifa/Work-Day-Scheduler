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
  console.log(`#${event.data.hour} memo saved`);
}

for (var i = minHour; i <= maxHour; i += 1) {
  $(`#${i}`).addClass(classSelection(i));
  $(`#${i}~button`).click({ hour: i }, save);
}
