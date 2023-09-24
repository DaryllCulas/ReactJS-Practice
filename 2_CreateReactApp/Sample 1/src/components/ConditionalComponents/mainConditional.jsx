import { GoodByeHere } from "./goodbye";
import { GreetHere } from "./greetings";

function ConditionalComponentsDisplayHere() {
  const isMessageGood = false;
  if (!isMessageGood) {
    return <GreetHere />;
  } else {
    return <GoodByeHere />;
  }
}

export { ConditionalComponentsDisplayHere };
