import Phonebook from "../Phonebook/Phonebook";
import { Suspense } from "react";

import LangSwitcher from "../LangSwitcher/LangSwitcher.js";
const App = () => {
  return (
    <div>
      <Suspense fallback="loading...">
        <div>
          <LangSwitcher />
        </div>
      </Suspense>
      <>
        <Suspense fallback="loading...">
          <Phonebook />
        </Suspense>
      </>
    </div>
  );
};

export default App;
