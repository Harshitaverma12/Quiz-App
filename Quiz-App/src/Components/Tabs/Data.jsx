import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from "react-bootstrap-table2-editor";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Button } from "@mui/material";

export const productsGenerator = (quantity) => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
  }
  return items;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "name",
    text: "Product Name",
    sort: true,
  },
  {
    dataField: "age",
    text: "Age",
  },
];

export default function Data() {
  const [products, setproducts] = useState(productsGenerator(30));
  const [selectedRows, setSelectedRows] = useState([]);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRowSelect = (row, isSelected, e) => {
    if (isSelected) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow.id !== row.id)
      );
    }
  };

  const addRow = () => {
    const newId = products.length + 1;
    const newRow = { id: newId, name: name, age: price };
    setproducts([...products, newRow]);
    setname("");
    setprice("");
  };

  const deleteRows = () => {
    const selectedRowIds = selectedRows.map((row) => row.id);
    const updatedData = products.filter(
      (row) => !selectedRowIds.includes(row.id)
    );
    setproducts(updatedData);
    setSelectedRows([]); // Clear selected rows after deletion
  };

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    onSelect: handleRowSelect,
  };

  const selectedRowIds = selectedRows.map((row) => row.id);

  return (
    <div className="App">
      <div>
        <div style={{ marginBottom: "1rem" }}>
          {" "}
          <Button
            variant="contained"
            style={{ marginRight: "1rem" }}
            onClick={handleOpen}
          >
            Add Row
          </Button>
          <Button
            variant="contained"
            onClick={deleteRows}
            disabled={selectedRowIds.length === 0}
          >
            Delete Selected Rows
          </Button>
        </div>

        <BootstrapTable
          keyField="id"
          data={products}
          columns={columns}
          selectRow={selectRow}
          cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
          pagination={paginationFactory()}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            label="Name"
            className="input-lg w-100 mt-3"
            placeholder="Enter  name here"
            onChange={(e) => setname(e.target.value)}
            value={name}
            name="schedule_name"
            id="schedule_name"
          />
          <TextField
            label="Age"
            className="input-lg w-100 mt-3"
            placeholder="Enter  age here"
            onChange={(e) => setprice(e.target.value)}
            value={price}
            name="schedule_name"
            id="schedule_name"
          />

          <Button
            onClick={() => {
              addRow();
              handleClose();
            }}
            variant="contained"
            style={{ marginTop: "1rem" }}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
