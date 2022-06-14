import "../styles/globals.css";
import Navbar from "../components/navbar";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/protectedRoute";
import Footer from "../components/footer";
import {ThemeProvider} from "next-themes"
const noAuthRequired = ["/", "/login", "/signup"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider enableSystem={true} attribute="class">
    <AuthContextProvider>
      <Navbar />{" "}
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />{" "}
        </ProtectedRoute>
      )}{" "}
      <Footer />
    </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
