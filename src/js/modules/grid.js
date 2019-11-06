export default function constructor() {
  let CurrentColValue = col.value;
  let CurrentRowGapValue = rowgap.value;
  let CurrentColumnGapValue = columngap.value;
  col.addEventListener(`change`, e => {
    CurrentColValue = e.currentTarget.value;
    test(CurrentColValue, CurrentRowGapValue, CurrentColumnGapValue);
    return CurrentColValue;
  });
  rowgap.addEventListener(`change`, e => {
    CurrentRowGapValue = e.currentTarget.value;
    test(CurrentColValue, CurrentRowGapValue, CurrentColumnGapValue);
    return CurrentRowGapValue;
  });
  columngap.addEventListener(`change`, e => {
    CurrentColumnGapValue = e.currentTarget.value;
    test(CurrentColValue, CurrentRowGapValue, CurrentColumnGapValue);
    return CurrentColumnGapValue;
  });
  test(CurrentColValue, CurrentRowGapValue, CurrentColumnGapValue);
}

const col = document.getElementById(`col`);
const rowgap = document.getElementById(`rowgap`);
const columngap = document.getElementById(`columngap`);
const row = document.getElementById(`row`);
const css = document.getElementById(`css`);

const styleElement = document.getElementById(`style`);
const test = (col, rowGap, columnGap) => {
  styleElement.innerHTML = `.row {
  display: flex;
  flex-wrap: wrap;
  margin-top: -${Number(rowGap)}px;
  margin-left: -${Number(columnGap)}px;
}

.col {
  margin-top: ${Number(rowGap)}px;
  margin-left: ${Number(columnGap)}px;
  width: calc(${(1 / Number(col)) * 100}% - ${Number(columnGap)}px);
}
`;
  css.innerHTML = PR.prettyPrintOne(styleElement.innerHTML);
};
const range = size => [...Array(size).keys()];
