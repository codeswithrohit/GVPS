import Footer from "@/src/dashboardComponent/Footer";
import Navbar from "@/src/dashboardComponent/Navbar";
import StudentLayout from "@/src/layouts/StudentLayout"; // ✅ add this
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {

  const isStudentRoute = router.pathname.startsWith("/student");

  // ✅ Student layout
  if (isStudentRoute) {
    return (
      <StudentLayout>
        <Component {...pageProps} />
      </StudentLayout>
    );
  }

  // ✅ Normal website layout
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}