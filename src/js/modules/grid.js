export default function constructor() {
  let CurrentColValue = col.value;
  col.addEventListener(`change`, (e) => {
    CurrentColValue = e.target.value;
  });
  test()
}


const col = document.getElementById(`col`);


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
}