import React from "react";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function InformationTable() {
  return (
    <div className="table">
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          <img
            className="lupa"
            src="http://assets.stickpng.com/thumbs/5c790123003fa702a1d2795b.png"
            alt="lupa"
            srcset="https://cdn.pixabay.com/photo/2013/10/01/16/55/magnifying-glass-189254_640.png"
          />
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Lugar</th>
            <th>Magnitud</th>
            <th>Profundidad (Km)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Guga</td>
            <td>7.1</td>
            <td>2.0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>San Felipe</td>
            <td>4.0</td>
            <td>11</td>
          </tr>
          <tr>
            <td>3</td>
            <td>CDMX</td>
            <td>4.2</td>
            <td>8</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Puebla</td>
            <td>4.8</td>
            <td>7</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
