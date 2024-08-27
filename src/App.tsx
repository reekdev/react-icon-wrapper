import { IconWrapper } from "./components";
import { PlusIcon } from "./icons";

function App() {
  return (
    <>
      <IconWrapper
        icon={PlusIcon}
        iconProps={{ size: 36 }}
        onClick={() => console.log("icon clicked")}
      />
    </>
  );
}

export default App;
