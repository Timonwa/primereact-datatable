import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Table = () => {
  const products = [
    {
      id: 1,
      name: "Silicon Watch",
      price: "$10",
      category: "Accessories",
      quantity: "7",
    },
    {
      id: 2,
      name: "Fitness watch",
      price: "$20",
      category: "Fitness",
      quantity: "23",
    },
    {
      id: 3,
      name: "Dinner gown",
      price: "$30",
      category: "Clothing",
      quantity: "5",
    },
    {
      id: 4,
      name: "Washing machine",
      price: "$40",
      category: "Electronics",
      quantity: "10",
    },
    {
      id: 5,
      name: "Product 5",
      price: "$50",
      category: "Clothing",
      quantity: "50",
    },
  ];

  return (
    <div className="card">
      <DataTable value={products} responsiveLayout="scroll">
        <Column field="name" header="Name"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  );
};

export default Table;
