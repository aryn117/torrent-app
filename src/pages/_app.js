import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        progressStyle={{ background: "lightcoral" }}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        toastStyle={{ width: "100svw" }}
        theme="dark"
      />

       {/* link to seedr */}
     
      <Component {...pageProps} />{" "}
    </>
  );
}
