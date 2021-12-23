import Phonebook from "../Phonebook/Phonebook";
import { Suspense } from "react";
import Loader from "react-loader-spinner";
import LangSwitcher from "../LangSwitcher/LangSwitcher.js";

const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <Loader
            type="Bars"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        }
      >
        <LangSwitcher />
      </Suspense>
      <Suspense fallback="">
        <Phonebook />
      </Suspense>
    </div>
  );
};

export default App;
