import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const Table = () => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const products = [
    {
      id: 1,
      name: "Apple Watch",
      price: "₦350,000",
      category: "Accessories",
      quantity: "7",
    },
    {
      id: 2,
      name: "Fitness watch",
      price: "₦10,000",
      category: "Fitness",
      quantity: "23",
    },
    {
      id: 3,
      name: "Beach dress",
      price: "₦25,000",
      category: "Clothing",
      quantity: "5",
    },
    {
      id: 4,
      name: "Washing machine",
      price: "₦260,000",
      category: "Electronics",
      quantity: "10",
    },
    {
      id: 5,
      name: "Blue Jeans",
      price: "₦10,000",
      category: "Clothing",
      quantity: "50",
    },
  ];

  const header = <p>All Products</p>;
  const footer = <p>Total products = {products ? products.length : 0}</p>;

  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  const dialogFooterTemplate = (
    <Button label="Ok" icon="pi pi-check" onClick={closeDialog} />
  );
  return (
    <div className="table-wrapper">
      <h2 className="table-name">PrimeReact data table</h2>
      <Button
        label="View table"
        icon="pi pi-external-link"
        onClick={openDialog}
      />
      <Dialog
        header="Flex Scroll"
        visible={dialogVisible}
        style={{ width: "75vw" }}
        maximizable
        modal
        contentStyle={{ height: "300px" }}
        onHide={closeDialog}
        footer={dialogFooterTemplate}>
        <DataTable
          value={products}
          responsiveLayout="scroll"
          header={header}
          footer={footer}
          size="small"
          showGridlines
          stripedRows
          dataKey="id">
          <Column field="name" header="Name"></Column>
          <Column field="price" header="Price"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </Dialog>
    </div>
  );
};

export default Table;
