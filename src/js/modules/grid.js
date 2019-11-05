export default function constructor() {
  let CurrentColValue = col.value;
  showColElement(CurrentColValue);
  col.addEventListener(`change`, (e) => {
    CurrentColValue = e.target.value;
      showColElement(CurrentColValue);
  });
  test()
}


const col = document.getElementById(`col`);
const showColElement = (array) => {
    row.innerHTML = ``;
    const rowArray = range(Number(array));
    rowArray.forEach((value, index, array) => {
      const colElement = document.createElement(`li`);
      colElement.innerText = index + 1;
      colElement.setAttribute(`class`, `col _col${index + 1}`);
      row.appendChild(colElement);
    });
}


const rowgap = document.getElementById(`rowgap`);
const columngap = document.getElementById(`columngap`);
const row = document.getElementById(`row`);
const css = document.getElementById(`css`);
const html = document.getElementById(`html`);

const styleElement = document.getElementById(`style`);
const test = () => {
  styleElement.innerHTML =
`.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  width: ${(1/3)*100}%
}
`;
  css.innerHTML = styleElement.innerHTML;
  html.innerHTML = escapeHtml(row.innerHTML);
}
const range = size => [...Array(size).keys()];
const escapeHtml = (innerHTML) => {
  innerHTML = innerHTML.replace(/></g, `>\n<`);
  innerHTML = innerHTML.replace(/&/g, "&amp;");
  innerHTML = innerHTML.replace(/</g, "&lt;");
  innerHTML = innerHTML.replace(/>/g, "&gt;");
  innerHTML = innerHTML.replace(/"/g, "&quot;");
  innerHTML = innerHTML.replace(/'/g, "&#39;");
  return innerHTML;
}