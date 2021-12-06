import React from "react";
import { Table } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

function TableDevices({ room }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>
              <FormattedMessage id="Device" />
            </th>
            <th>
              <FormattedMessage id="Value" />
            </th>
          </tr>
        </thead>
        <tbody>
          {room.devices.map((d, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.desired.value.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default TableDevices;
