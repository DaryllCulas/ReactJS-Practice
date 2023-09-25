function DisplayingButtonMessage() {
  function clickShow() {
    const clickerMessage = "Clicked!";
    console.log({ clickerMessage });
  }
  return (
    <div>
      <button onClick={clickShow}>Click me please?</button>
    </div>
  );
}

export { DisplayingButtonMessage };
