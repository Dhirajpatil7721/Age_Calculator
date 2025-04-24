let userinput = document.getElementById("in");
userinput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("p");

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function CalculateAge() {
  if (!userinput.value) {
    result.innerHTML = `<span>Please enter your birthdate!</span>`;
    return;
  }

  let birthdate = new Date(userinput.value);
  let today = new Date();

  let d1 = birthdate.getDate();
  let m1 = birthdate.getMonth();
  let y1 = birthdate.getFullYear();

  let d2 = today.getDate();
  let m2 = today.getMonth();
  let y2 = today.getFullYear();

  let y3 = y2 - y1;
  let m3 = m2 - m1;
  let d3 = d2 - d1;

  if (d3 < 0) {
    m3--;
    d3 += getDaysInMonth(y2, m2 - 1);
  }

  if (m3 < 0) {
    y3--;
    m3 += 12;
  }

  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old...!`;
}
