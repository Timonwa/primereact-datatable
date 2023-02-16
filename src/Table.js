import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const Table = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  const products = [
    {
      id: 1,
      name: "Apple Watch",
      price: "₦350,000",
      category: "Accessories",
      quantity: "7",
      rating: "5",
    },
    {
      id: 2,
      name: "Fitness watch",
      price: "₦10,000",
      category: "Fitness",
      quantity: "23",
      rating: "2",
    },
    {
      id: 3,
      name: "Beach dress",
      price: "₦25,000",
      category: "Clothing",
      quantity: "5",
      rating: "4",
    },
    {
      id: 4,
      name: "Washing machine",
      price: "₦260,000",
      category: "Electronics",
      quantity: "10",
      rating: "4",
    },
    {
      id: 5,
      name: "Blue Jeans",
      price: "₦10,000",
      category: "Clothing",
      quantity: "50",
      rating: "5",
    },
    {
      id: 6,
      name: "Samsung Watch",
      price: "₦270,000",
      category: "Accessories",
      quantity: "7",
      rating: "3",
    },
    {
      id: 7,
      name: "Yoga mat",
      price: "₦15,000",
      category: "Fitness",
      quantity: "15",
      rating: "4",
    },
    {
      id: 8,
      name: "Jumpsuit",
      price: "₦15,700",
      category: "Clothing",
      quantity: "30",
      rating: "5",
    },
    {
      id: 9,
      name: "Hand mixer",
      price: "₦50,000",
      category: "Electronics",
      quantity: "10",
      rating: "4",
    },
    {
      id: 10,
      name: "Pallazo",
      price: "₦12,000",
      category: "Clothing",
      quantity: "4",
      rating: "3",
    },
  ];

  const header = <p>All Products</p>;
  const footer = <p>Total products = {products ? products.length : 0}</p>;

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

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
          size="small"
          showGridlines
          stripedRows
          header={header}
          footer={footer}
          removableSort
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks
        NextPageLink LastPageLink"
          rows={5}
          selection={selectedProduct}
          onSelectionChange={(e) => setSelectedProduct(e.value)}
          dataKey="id">
          <Column
            selectionMode="multiple"
            field="name"
            header="Name"
            sortable></Column>
          <Column field="price" header="Price" sortable></Column>
          <Column field="category" header="Category" sortable></Column>
          <Column field="quantity" header="Quantity" sortable></Column>
          <Column
            field="rating"
            header="Rating"
            body={ratingBodyTemplate}
            sortable></Column>
        </DataTable>
      </Dialog>
    </div>
  );
};

export default Table;
