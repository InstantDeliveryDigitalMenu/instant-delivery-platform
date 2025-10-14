import { useNavigate } from "react-router-dom";
import * as HomeStyles from "./styles.ts";

function Home() {
  const navigate = useNavigate();
  return (
    <HomeStyles.Container>
      My new App
      <>
        <></>
        <button onClick={() => navigate("/register")}>Register</button>
      </>
    </HomeStyles.Container>
  );
}

export default Home;
