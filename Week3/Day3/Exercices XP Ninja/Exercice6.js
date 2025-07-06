function createCalendar(year, month) {
  month = month - 1;

  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let table = document.createElement("table");
  let head = document.createElement("head");
  let headerRow = document.createElement("tr");

  for (let day of days) {
    let th = document.createComment("th");
    th.innerText = day;
    headerRow.appendChild(th);
  }
  head.appendChild(headerRow);
  table.appendChild(head);
  let body = document.createElement("body");
  let date = new Date(year, month, 1);
  let row = document.createElement("tr");
  let startDay = date.getDay();
  if (startDay === 0) startDay = 7;
  for (let i = 1; i < startDay; i++) {
    let emptyCell = document.createElement("td");
    row.appendChild(emptyCell);
  }
  while (date.getMonth() === month) {
    let cell = document.createElement("td");
    cell.innerText = date.getDate();
    row.appendChild(cell);
    if (date.getDay() === 0) {
      body.appendChild(row);
      row = document.createElement("tr");
    }
    date.setDate(date.getDate() + 1);
  }
  if (row.children.length > 0) {
    body.appendChild(row);
  }

  table.appendChild(body);
  document.body.appendChild(table); // نضيف الجدول للصفحة
}
createCalendar(2012, 9);
