import { GoodByeHere } from "./goodbye";
import { GreetHere } from "./greetings";

function TernaryComponentHere() {
  const isGoodMessage = true;

  return isGoodMessage ? (
    <h1>
      <GreetHere />
    </h1>
  ) : (
    <h1>
      <GoodByeHere />
    </h1>
  );
}

export { TernaryComponentHere };
