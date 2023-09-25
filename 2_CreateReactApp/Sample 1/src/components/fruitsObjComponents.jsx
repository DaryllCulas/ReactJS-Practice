// Rendering components inside a loop here
function FruitsObjComponents({ figure, name, prices, isSoldOut }) {
  return (
    <>
      {/* {figure} {name} = ${prices} */}
      {prices > 1 ? (
        <li>
          {figure} {name} = ${prices} = {isSoldOut ? "Sold Out" : ""}
        </li>
      ) : (
        " " // if false, it returns empty string
      )}
    </>
  );
}

export { FruitsObjComponents };
