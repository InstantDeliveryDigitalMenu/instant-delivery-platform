import { useState } from "react";

import General from "./General/index.tsx";
import Appearance from "./Apperance/index.tsx";

import * as RegisterStyles from "./styles.ts";

type Steps =
  | "General"
  | "Appearance"
  | "Payment"
  | "Delivery"
  | "Contact"
  | "User Details";

function Register() {
  const [steps, setSteps] = useState<Steps>("General");
  // const [userData, setUserData] = useState();

  const RenderSteps = () => {
    switch (steps) {
      case "Appearance":
        return <General nextStep={() => setSteps("Appearance")} />;
      case "General":
        return (
          <Appearance
            nextStep={() => setSteps("Payment")}
            lastStep={() => setSteps("General")}
          />
        );
      // case "Payment":
      //   <Payment />;
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

export default Register;
