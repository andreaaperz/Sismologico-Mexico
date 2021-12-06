  import React,{useState,useEffect} from 'react';
  import Table from "react-bootstrap/Table";
  import InputGroup from "react-bootstrap/InputGroup";
  import FormControl from "react-bootstrap/FormControl";
  import Data from '../assets/csvjson.json';
  import ReactDOM from 'react-dom';


  let valor;
        {Data.map((user,key)=>
          { 
          valor = ""
          })}
      

  export default class InformationTable extends React.Component {




  

    handleClick()  {
      valor =  document.getElementById("valor").value;
      if (valor === "" || valor === null) {
        {Data.map((user,key)=>
          { 
          valor = ""
          })}
      }
      this.render();

      console.log('this is:',valor);
    }
      render(){
      return (
        <div className="table"  >
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default" >
              <button> <img
              onClick={this.handleClick.bind(this)}
                className="lupa"
                src="http://assets.stickpng.com/thumbs/5c790123003fa702a1d2795b.png"
                alt="lupa"
                srcSet="https://cdn.pixabay.com/photo/2013/10/01/16/55/magnifying-glass-189254_640.png"
              /></button>
            
            </InputGroup.Text>
            <FormControl
            //onSubmit={valor}
          type="text" id="valor" 
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <div id="root">
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
              
              { 
          Data.filter(user => user.Magnitud === 3.1).map((filteredUser)  => {
              //let filterRows = user.filter(Magnitud => Magnitud = "afsf");
                return (
                    <tr key={filteredUser}>
                      <td>{filteredUser["Referencia de localizacion"]}</td>
                      <td>{filteredUser.Magnitud }</td>
                      <td>{filteredUser.Latitud}</td>
                      <td>{filteredUser.Longitud}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          
          </div>
        </div>
        
      );

    }
    
  }


