import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import GlobalRoutes from './routes.tsx';
import { GlobalStyles, Container } from "./styles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <Container>
      <GlobalRoutes />
    </Container>
  </StrictMode>,
)
