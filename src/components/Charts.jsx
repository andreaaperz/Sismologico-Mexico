import React, { useEffect, useState } from 'react';
import sismos from '../service/sismos'

const { Chart } = require("react-google-charts");

function Charts() {
  var sismosInfo = []
  var grandes = []
  var recientes = []
  var profundidades = []
  var estadosAfectados = []
  var aux = []

  const [gran, setGran] = useState([])
  const [recient, setRecientes] = useState([])
  const [afect, setAfect] = useState([])
  const [prof, setProf] = useState([])


  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    sismos.map((e) => {
      //console.log(e.title.split(','))
      let arr = e.title.split(',')
      sismosInfo.push({
        "mag": Number(arr[0]),
        "ubicacion": arr[1],
        "estado": arr[2],
        "ciudad": arr[1],
        "profundidad": Number(e.description.__cdata.split('<br/>')[2].slice(12, e.description.__cdata.split('<br/>')[2].indexOf('km'))),
        "lat": Number(e.lat),
        "lng": Number(e.long)
      })
    })

    //console.log(sismosInfo)
    //console.log(sismosInfo)
    Recientes()
    Grandes()
    EstadosAfectados()
    Profundidades()
  }, []);

  /**
   * Obtener los temblores mas recientes a la fecha actual
   */
  function Recientes() {
    recientes.push(["Estado", "Magnitud"])
    sismosInfo.map((e) => {
      recientes.push([e.estado, e.mag])
    })
    //console.log(recientes)
    setRecientes(recientes)
  }

  /**
   * Obtener los temblores con la magnitud mas grande
   */
  function Grandes() {
    aux = []
    grandes = sismosInfo
    grandes.sort(function (a, b) {
      if (a.mag < b.mag) {
        return 1;
      }
      if (a.mag > b.mag) {
        return -1;
      }
      return 0;
    })
    for (let i = 0; i < 5; i++) {
      aux = [...aux, grandes[i]]
    }
    grandes = []
    grandes.push(["Estado", "Magnitud"])
    aux.map((e) => {
      grandes.push([e.estado, e.mag])
    })
    aux = []
    setGran(grandes)
    //console.log(gran, recient)
  }

  /**
   * Obtener la frecuencia de sismos por estado
   */
  function EstadosAfectados() {
    estadosAfectados = sismosInfo
    estadosAfectados.sort(function (a, b) {
      if (a.estado > b.estado) {
        return 1;
      }
      if (a.estado < b.estado) {
        return -1;
      }
      return 0;
    })

    estadosAfectados = foo(estadosAfectados)
    console.log(estadosAfectados[0], estadosAfectados[1])
    aux = []
    aux.push(['Estado', 'Frecuencia'])
    for (let i = 0; i < estadosAfectados[0].length; i++) {
      console.log(i)
      aux.push([estadosAfectados[1][i], estadosAfectados[0][i]])
    }

    console.log(aux)

    setAfect(aux);
  }


  /**
   * Obtener las profundidades de los sismos
   */
  function Profundidades() {
    profundidades.push(["CIUDAD", "LAT", "LONG", "ESTADO", "MAGNITUD"])
    sismosInfo.map((e) => {
      console.log(e.ciudad.split('de')[1])
      profundidades.push([e.ciudad.split('de')[1], e.lat, e.lng, e.estado, e.mag])
    })
    setProf(profundidades);
  }

  function foo(arr) {
    var a = [], b = [], c = [], prev = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].estado !== prev.estado) {
        a.push(arr[i]);
        b.push(1);
        c.push(arr[i].estado)
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }

    console.log([a, b])
    return [b, c];
  }


  return (
    <div className="chart-grid">
      <Chart
        width={"100%"}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={
          gran
        }
        options={{
          title: "Estados con las magnitudes mas altas",
          chartArea: { width: "65%" },
          hAxis: {
            title: "Estado",
            minValue: 0,
          },
          vAxis: {
            title: "Magnitud",
          },
        }}
        legendToggle
      />
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={recient}
        options={{
          title: "Sismos recientes",
          hAxis: { title: "Estado", titleTextStyle: { color: "#333" } },
          vAxis: { title: "Magnitud" },
          chartArea: { width: "60%", height: "70%" },
        }}
      />
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="BubbleChart"
        loader={<div>Loading Chart</div>}
        data={
          prof
        }
        options={{
          title:
            "Ciudades y regiones: profundidades de sismos",
          hAxis: { title: "Latitud" },
          vAxis: { title: "Longitud" },
          bubble: { textStyle: { fontSize: 11 } },
        }}
      />
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={afect}
        options={{
          title: "Estados más afectados por sismos",
          hAxis: { title: "Estado", titleTextStyle: { color: "#333" } },
          vAxis: { title: "Frecuencia" },
          chartArea: { width: "60%", height: "70%" },
        }}
      />
    </div>
  )

}




export default Charts;
