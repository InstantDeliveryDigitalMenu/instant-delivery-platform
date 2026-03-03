import { useNavigate } from "react-router-dom";

import * as HomeStyles from "./styles.ts";

function Home() {
  const navigate = useNavigate();
  return (
    <HomeStyles.Container>
      My new Home App
      <button onClick={() => navigate("/register")}>To new Page</button>
    </HomeStyles.Container>
  );
}

export default Home;
