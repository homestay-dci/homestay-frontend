import "bootstrap/dist/css/bootstrap.css";

import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";

import Hotels from "./pages/hotels/hotels";

import Footer from "./components/footer/Footer";
import Signin from "./pages/signin/Signin";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile.jsx";
import { ProfileProvider } from "./contexts";
import Transactions from "./pages/transactions/Transactions";
import Reservation from "./pages/reservation/Reservation";
import BookingRequest from "./pages/booking_request/BookingRequest";
import Reservations from "./pages/reservations/Reservations.jsx";
import ViewProperty from "./pages/viewProperty/viewProperty";


function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/register",
          element: <Register />,
        },

        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/reservations",
          element: <Reservation />,
        },
        {
          path: "/transactions",
          element: <Transactions />,
        },
        {
          path: "/booking-requests",
          element: <BookingRequest />,
        },
        {
          path: "/hotels",
          element: <Hotels />,
        },
        {
          path: "/property/:propertyId",
          element: <ViewProperty/>,
        },
      ],
    },
  ]);
  return (
    <ProfileProvider>
      <RouterProvider router={router} />
    </ProfileProvider>
  );
}

export default App;
