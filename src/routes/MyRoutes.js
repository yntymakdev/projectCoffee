import React from "react";
import ProductPages from "../pages/ProductPages";
import { Route, Routes } from "react-router-dom";
import AddCoffee from "../components/admin/Product/AddCoffee";

const MyRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <ProductPages />,
      id: 1,
    },
    {
      link: "/addcoffee",
      element: <AddCoffee />,
      id: 1,
    },
    // {
    //   link: "/",
    //   element: <ProductPages />,
    //   id: 1,
    // },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
