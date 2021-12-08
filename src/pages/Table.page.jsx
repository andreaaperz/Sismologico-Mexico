import React from 'react';
import { MDBDataTable } from 'mdbreact';
import Data from '../assets/csvjson';
import axios from "axios";


const DatatablePage = () => {
  let fileName;

  
  const data = {
    columns: [
      {
        label: 'Fecha',
        field: 'Fecha',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Magnitud',
        field: 'Magnitud',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Latitud',
        field: 'Latitud',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Longitud',
        field: 'Longitud',
        sort: 'asc',
        width: 100
      },
      {
        label: 'ReferenciaDeLocalizacion',
        field: 'ReferenciaDeLocalizacion',
        sort: 'asc',
        width: 150
      }
    ],
    rows: [
      {
        Fecha: "10/11/2021",
        Magnitud: '3.1',
        Latitud: '19.09',
        Longitud: '-104.28',
        Profundidad: '16',
        ReferenciaDeLocalizacion: "5 km al NORESTE de MANZANILLO, COL",
      },
      {
        Fecha: "10/11/2021",
        Magnitud:' 3.5',
        Latitud: '14.49',
        Longitud: '-92.3',
        Profundidad: '61',
        ReferenciaDeLocalizacion: "27 km al SUROESTE de CD HIDALGO, CHIS",
        
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.5',
        Latitud: '15.33',
        Longitud: '-94.78',
        Profundidad: '24',
        ReferenciaDeLocalizacion: "104 km al SURESTE de SALINA CRUZ, OAX",
    
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.9',
        Latitud: '16.52',
        Longitud: '-95.78',
        Profundidad: '75',
        ReferenciaDeLocalizacion: "62 km al NOROESTE de TEHUANTEPEC, OAX",
     
      },
      {
        Fecha: "10/11/2021",
        Magnitud:' 3.9',
        Latitud: '15.89',
        Longitud: '-97.29',
        Profundidad: '9',
        ReferenciaDeLocalizacion: "20 km al SURESTE de RIO GRANDE, OAX",
   
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '4',
        Latitud: '16.24',
        Longitud: '-99.57',
        Profundidad: '16',
        ReferenciaDeLocalizacion: "64 km al SUROESTE de SAN MARCOS, GRO",
   
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.3',
        Latitud: '16.05',
        Longitud: '-97.58',
        Profundidad: '11',
        ReferenciaDeLocalizacion: "16 km al OESTE de RIO GRANDE, OAX",
      
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.7',
        Latitud: '16.25',
        Longitud: '-99.57',
        Profundidad: '16',
        ReferenciaDeLocalizacion: "63 km al SUROESTE de SAN MARCOS, GRO",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.7',
        Latitud:' 29.88',
        Longitud: '-11',
        Profundidad: '10',
        ReferenciaDeLocalizacion: "161 km al SURESTE de SAN FELIPE, BC",
    
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '4.2',
        Latitud: '29.86',
        Longitud: '-113.75',
        Profundidad: '10',
        ReferenciaDeLocalizacion: "163 km al SUR de PUERTO PEÑASCO, SON",
        
      },
      {
        Fecha: "10/11/2021",
        Magnitud: "3.8",
        Latitud: '29.85',
        Longitud: '-113.94',
        Profundidad: '10',
        ReferenciaDeLocalizacion: "157 km al SURESTE de SAN FELIPE, BC",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.9',
        Latitud: '15.68',
        Longitud: '-93.93',
        Profundidad: '16',
        ReferenciaDeLocalizacion: "48 km al SUROESTE de TONALA, CHIS",
    
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '4.2',
        Latitud: '25.09',
        Longitud: '-100.42',
        Profundidad: '5',
        ReferenciaDeLocalizacion: "45 km al SUROESTE de CD DE ALLENDE, NL",
   
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.3',
        Latitud: '19.45',
        Longitud: '-104.43',
        Profundidad: '37',
        ReferenciaDeLocalizacion: "16 km al SUR de CASIMIRO CASTILLO, JAL",
   
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '4',
        Latitud: '25.08',
        Longitud: '-100.36',
        Profundidad: '5',
        ReferenciaDeLocalizacion: "41 km al SUROESTE de CD DE ALLENDE, NL",
    
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.6',
        Latitud: '16.6',
        Longitud: '-94.81',
        Profundidad: '5',
        ReferenciaDeLocalizacion: "14 km al NORTE de UNION HIDALGO, OAX",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: "3.8",
        Latitud: '25.07',
        Longitud:' -100.37',
        Profundidad: '5',
        ReferenciaDeLocalizacion: "42 km al SUROESTE de CD DE ALLENDE, NL",
       
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.7',
        Latitud:' 25.09',
        Longitud: '-100.33',
        Profundidad: '5',
        ReferenciaDeLocalizacion: "37 km al SUROESTE de CD DE ALLENDE, NL",
    
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '4.1',
        Latitud: '25.09',
        Longitud:' -100.42',
        Profundidad: '5',
        ReferenciaDeLocalizacion: "45 km al SUROESTE de CD DE ALLENDE, NL",
     
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.9',
        Latitud: '18.29',
        Longitud: '-101.27',
        Profundidad: '5',
        ReferenciaDeLocalizacion: "54 km al SUROESTE de HUETAMO, MICH",
       
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.6',
        Latitud: '19.19',
        Longitud: '-104.04',
        Profundidad: '8',
        ReferenciaDeLocalizacion: "24 km al OESTE de COQUIMATLAN, COL",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.9',
        Latitud: '14.49',
        Longitud: '-93.17',
        Profundidad: '10',
        ReferenciaDeLocalizacion: "105 km al SUROESTE de HUIXTLA, CHIS",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.9',
        Latitud: '17.77',
        Longitud: '-101.64',
        Profundidad: '12',
        ReferenciaDeLocalizacion: "17 km al NOROESTE de ZIHUATANEJO, GRO",
      
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.7',
        Latitud: '15.61',
        Longitud: '-93.94',
        Profundidad: '66',
        ReferenciaDeLocalizacion: "56 km al SUROESTE de TONALA, CHIS",
    
      },
      {
        Fecha: "10/11/2021",
        Magnitud: "3.8",
        Latitud: '15.47',
        Longitud: '-94.68',
        Profundidad: '17',
        ReferenciaDeLocalizacion: "96 km al SURESTE de SALINA CRUZ, OAX",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.3',
        Latitud: '16.64',
        Longitud: '-98.6',
        Profundidad: '24',
        ReferenciaDeLocalizacion: "21 km al OESTE de OMETEPEC, GRO",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.1',
        Latitud: '19.11',
        Longitud: '-103.99',
        Profundidad: '10',
        ReferenciaDeLocalizacion: "20 km al NORTE de CD DE ARMERIA, COL",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.4',
        Latitud: '16.37',
        Longitud:' -98.68',
        Profundidad: '15',
        ReferenciaDeLocalizacion: "46 km al SUROESTE de OMETEPEC, GRO",
     
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.1',
        Latitud: '16.04',
        Longitud: '-97.7',
        Profundidad: '31',
        ReferenciaDeLocalizacion: "28 km al OESTE de RIO GRANDE, OAX",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '4.1',
        Latitud: '16.85',
        Longitud: '-100.28',
        Profundidad: '6',
        ReferenciaDeLocalizacion: "27 km al SUROESTE de COYUCA DE BENITEZ, GRO",
   
      },
      {
        Fecha: "10/11/2021",
        Magnitud:' 3.4',
        Latitud: '32.23',
        Longitud: '-115.33',
        Profundidad: '4',
        ReferenciaDeLocalizacion: "22 km al SUROESTE de GPE VICTORIA(KM.43), BC",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud:' 3.5',
        Latitud: '16.18',
        Longitud: '-97.55',
        Profundidad: '15',
        ReferenciaDeLocalizacion: "23 km al NOROESTE de RIO GRANDE, OAX",
   
      },
      {
        Fecha: "10/11/2021",
        Magnitud:' 3.6',
        Latitud: '31.8',
        Longitud:' -116.22',
        Profundidad: '15',
        ReferenciaDeLocalizacion: "34 km al ESTE de RODOLFO SANCHEZ T(MRO), BC",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '2.9',
        Latitud: '16.55',
        Longitud: '-99.27',
        Profundidad: '12',
        ReferenciaDeLocalizacion: "30 km al SURESTE de SAN MARCOS, GRO",
   
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.3',
        Latitud: '19.48',
        Longitud: '-105.35',
        Profundidad: '16',
        ReferenciaDeLocalizacion: "87 km al NOROESTE de CIHUATLAN, JAL",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.7',
        Latitud: '15.15',
        Longitud: '-96.26',
        Profundidad: '16',
        ReferenciaDeLocalizacion: "70 km al SURESTE de S PEDRO POCHUTLA, OAX",
    
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '4',
        Latitud: '16.03',
        Longitud: '-97.66',
        Profundidad: '16',
        ReferenciaDeLocalizacion: "24 km al OESTE de RIO GRANDE, OAX",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.6',
        Latitud: '14.93',
        Longitud: '-93.17',
        Profundidad: '60',
        ReferenciaDeLocalizacion: "64 km al SUROESTE de MAPASTEPEC, CHIS",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.2',
        Latitud: '16.47',
        Longitud: '-97.52',
        Profundidad: '9',
        ReferenciaDeLocalizacion: "52 km al NORTE de RIO GRANDE, OAX",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.4',
        Latitud: '32.62',
        Longitud: '-115.76',
        Profundidad: '21',
        ReferenciaDeLocalizacion: "18 km al OESTE de SANTA ISABEL, BC",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud:' 3.6',
        Latitud: '18.1',
        Longitud: '-103.32',
        Profundidad: '5',
        ReferenciaDeLocalizacion: "77 km al SUR de COALCOMAN, MICH",
   
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.6',
        Latitud: '17.06',
        Longitud: '-94.85',
        Profundidad: '47',
        ReferenciaDeLocalizacion: "30 km al NORESTE de MATIAS ROMERO, OAX",
  
      },
      {
        Fecha: "10/11/2021",
  
        Magnitud: '3.5',
        Latitud: '18.18',
        Longitud: '-103.71',
        Profundidad: '2',
        ReferenciaDeLocalizacion: "83 km al SUR de TECOMAN, COL",
  
      },
      {
        Fecha: "10/11/2021",
  
        Magnitud: '3.5',
        Latitud: '18.15',
        Longitud: '-103.25',
        Profundidad: '10',
        ReferenciaDeLocalizacion: "70 km al SUR de COALCOMAN, MICH",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.5',
        Latitud: '18.08',
        Longitud: '-103.28',
        Profundidad: '5',
        ReferenciaDeLocalizacion: "78 km al SUR de COALCOMAN, MICH",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.3',
        Latitud: '19.17',
        Longitud: '-104.07',
        Profundidad: '2',
        ReferenciaDeLocalizacion: "28 km al OESTE de COQUIMATLAN, COL",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.2',
        Latitud: '19.66',
        Longitud: '-104.49',
        Profundidad: '58',
        ReferenciaDeLocalizacion: "9 km al NOROESTE de CASIMIRO CASTILLO, JAL",
        
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.4',
        Latitud: '19.1',
        Longitud: '-104.45',
        Profundidad: '14',
        ReferenciaDeLocalizacion: "15 km al NOROESTE de MANZANILLO, COL",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.5',
        Latitud:' 19.42',
        Longitud: '-102.23',
        Profundidad: '9',
        ReferenciaDeLocalizacion: "10 km al OESTE de NVO S J PARANGARICUTIRO, MICH",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3',
        Latitud: '16.87',
        Longitud: '-99.69',
        Profundidad: '28',
        ReferenciaDeLocalizacion: "22 km al ESTE de ACAPULCO, GRO",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.1',
        Latitud: '16.8',
        Longitud:' -99.65',
        Profundidad: '2',
        ReferenciaDeLocalizacion: "27 km al OESTE de SAN MARCOS, GRO",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.5',
        Latitud: '18.09',
        Longitud: '-102.97',
        Profundidad: '39',
        ReferenciaDeLocalizacion: "68 km al OESTE de LA MIRA, MICH",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.2',
        Latitud: '18.01',
        Longitud: '-101.83',
        Profundidad: '45',
        ReferenciaDeLocalizacion: "41 km al ESTE de LAS GUACAMAYAS, MICH",
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.5',
        Latitud: '17.11',
        Longitud: '-93.95',
        Profundidad: '155',
        ReferenciaDeLocalizacion: "51 km al NOROESTE de CINTALAPA, CHIS",
        
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.3',
        Latitud: '19.15',
        Longitud: '-104.1',
        Profundidad: '4',
        ReferenciaDeLocalizacion: "25 km al NORESTE de MANZANILLO, COL",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3',
        Latitud: '17.2',
        Longitud: '-99.98',
        Profundidad: '14',
        ReferenciaDeLocalizacion: "24 km al NORESTE de COYUCA DE BENITEZ, GRO",
      
      },
      {
        Fecha: "10/11/2021",
        Magnitud:' 3.9',
        Latitud: '14.23',
        Longitud: '-93.04',
        Profundidad: '15',
        ReferenciaDeLocalizacion: "108 km al SUROESTE de CD HIDALGO, CHIS",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.4',
        Latitud: '16.31',
        Longitud: '-98.17',
        Profundidad: '19',
        ReferenciaDeLocalizacion: "13 km al OESTE de PINOTEPA NACIONAL, OAX",
    
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.7',
        Latitud: '29.89',
        Longitud: '-113.72',
        Profundidad: '2',
        ReferenciaDeLocalizacion: "159 km al SUR de PUERTO PEÑASCO, SON",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.2',
        Latitud: '17.02',
        Longitud: '-97.49',
        Profundidad: '8',
        ReferenciaDeLocalizacion: "34 km al SURESTE de H TLAXIACO, OAX",
    
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.5',
        Latitud: '16.86',
        Longitud: '-94.37',
        Profundidad: '130',
        ReferenciaDeLocalizacion: "65 km al NORESTE de UNION HIDALGO, OAX",
       
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.7',
        Latitud: '15.62',
        Longitud: '-95.1',
        Profundidad: '24',
        ReferenciaDeLocalizacion: "63 km al SUR de SALINA CRUZ, OAX",
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.7',
        Latitud: '16.64',
        Longitud: -'95',
        Profundidad: '5',
        ReferenciaDeLocalizacion: "13 km al NORESTE de CD IXTEPEC, OAX",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3.1',
        Latitud:' 16.87',
        Longitud: '-99.27',
        Profundidad: '35',
        ReferenciaDeLocalizacion: "15 km al NORESTE de SAN MARCOS, GRO",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: "3.8",
        Latitud: '14.66',
        Longitud: '-94.3',
        Profundidad: '15',
        ReferenciaDeLocalizacion: "163 km al SUROESTE de PIJIJIAPAN, CHIS",
  
      },
      {
        Fecha: "10/11/2021",
        Magnitud: '3',
        Latitud: '16.94',
        Longitud: '-99.83',
        Profundidad:' 33',
        ReferenciaDeLocalizacion: "10 km al NORESTE de ACAPULCO, GRO",
       
      },
      {
        Fecha: "10/11/2021",
        Magnitud: "3.8",
        Latitud: '29.93',
        Longitud: '-113.67',
        Profundidad:' 8',
        ReferenciaDeLocalizacion: "155 km al SUR de PUERTO PEÑASCO, SON",
   
      },
    ]
  };
  return (
    <div className='table'>
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    </div>
  );
}

export default DatatablePage;