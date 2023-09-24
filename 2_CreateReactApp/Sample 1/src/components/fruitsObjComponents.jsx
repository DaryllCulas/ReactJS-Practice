// Rendering components inside a loop here
function FruitsObjComponents({ figure, name, prices }) {
  return (
    <li>
      {figure} {name} = ${prices}
    </li>
  );
}

export { FruitsObjComponents };
