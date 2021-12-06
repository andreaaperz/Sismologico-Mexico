import React from "react";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Data from '../assets/csvjson.json';


export default function InformationTable() {
  return (
    <div className="table" >
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
      <Table striped bordered responsive="sm">
        <thead>
          <tr >
            <th>Lugar</th>
            <th>Magnitud</th>
            <th>Latitud</th>
            <th>Longitud</th>
          </tr>
        </thead>
        <tbody >
        {Data.map((user, index) => {
              return (
                <tr key={user["Referencia de localizacion"]}>
                  <td>{user["Referencia de localizacion"]}</td>
                  <td>{user.Magnitud }</td>
                  <td>{user.Latitud}</td>
                  <td>{user.Longitud}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
