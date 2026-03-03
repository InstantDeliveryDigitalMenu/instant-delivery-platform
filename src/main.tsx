import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalRoutes from "./routes.tsx";
import { GlobalStyles, Container } from "./styles.ts";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";

const CLIENT_ID = import.meta.env.VITE_OAUTH_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <ToastContainer />
    <Container>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GlobalRoutes />
      </GoogleOAuthProvider>
    </Container>
  </StrictMode>
);
