// Rendering components inside a loop here
function FruitsObjComponents({ figure, name, prices }) {
  return (
    <>
      {/* {figure} {name} = ${prices} */}
      {prices > 70 ? (
        <li>
          {figure} {name} {prices}
        </li>
      ) : (
        " " // if false, it returns empty string
      )}
    </>
  );
}

export { FruitsObjComponents };
