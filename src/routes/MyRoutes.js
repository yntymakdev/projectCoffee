import React from "react";
import ProductPages from "../pages/ProductPages";
import { Route, Routes } from "react-router-dom";
import AddCoffee from "../components/admin/Product/AddCoffee";
import ProductList from "../components/admin/Product/ProductList";
import EditProduct from "../components/EditProduct/EditProduct";
import Registar from "../components/admin/Haeder/registar/Registar";
import MenuUp from "../components/EditProduct/MenuUp";
// import ProductCard from "../components/admin/Product/ProductCard";

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
      id: 2,
    },
    {
      link: "/",
      element: <ProductList />,
      id: 3,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 4,
    },
    {
      link: "/registar",
      element: <Registar />,
      id: 5,
    },
    {
      link: "/menu",
      element: <MenuUp />,
      id: 6,
    },
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
