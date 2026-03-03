import { useState } from "react";

import General from "./General/index.tsx";
import Appearance from "./Apperance/index.tsx";

import * as RegisterStyles from "./styles.ts";
import Payment from "./Payment/index.tsx";

type Steps =
  | "General"
  | "Appearance"
  | "Payment"
  | "Delivery"
  | "Contact"
  | "User Details";

function EntherpriseRegister() {
  const [steps, setSteps] = useState<Steps>("General");
  // const [userData, setUserData] = useState();

  const RenderSteps = () => {
    switch (steps) {
      case "General":
        return <General nextStep={() => setSteps("Appearance")} />;
      case "Appearance":
        return (
          <Appearance
            nextStep={() => setSteps("Payment")}
            lastStep={() => setSteps("General")}
          />
        );
      case "Payment":
        return (
          <Payment
            nextStep={() => setSteps("Delivery")}
            lastStep={() => setSteps("General")}
          />
        );
      // case "Delivery":
      //   <Delivery />;
      // case "Contact":
      //   <Contact />;
      // case "User Details":
      //   <UserDetails />;
    }
  };

  return (
    <RegisterStyles.Container>
      <RenderSteps />
    </RegisterStyles.Container>
  );
}

export default EntherpriseRegister;
