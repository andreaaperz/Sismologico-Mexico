import React, { useEffect, useState } from 'react';
import sismos from '../service/sismos'

const { Chart } = require("react-google-charts");

function Charts() {
  var sismosInfo = []
  var fechas = []
  var recientes = []
  var profundidades = []
  var estadosAfectados = []
  var aux = []
  var arreglo = []

  const [gran, setGran] = useState([])
  const [recient, setRecientes] = useState([])
  const [afect, setAfect] = useState([])
  const [prof, setProf] = useState([])
  const [dates, setDates] = useState([])


  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    sismos.map((e) => {
      //console.log(e.title.split(','))
      if (e.title != undefined) {
        let arr = e.title.split(',')
        e.mag = Number(arr[0]);
        e.ubicacion = arr[2];
        e.estado = arr[2];
        e.ciudad = arr[1];
        e.profundidad = Number(e.description.__cdata.split('<br/>')[2].slice(12, e.description.__cdata.split('<br/>')[2].indexOf('km')))
        e.Fecha = e.description.__cdata.split('Fecha:')[1].slice(0, 10);
      }
      else {
        e.mag = e.Magnitud;
        e.ubicacion = e.loc.split(',')[0];
        e.estado = e.loc.split(',')[1];
        e.ciudad = e.loc.split(',')[0];
        e.profundidad = e.Profundidad;
        e.Fecha = e.Fecha
      }
      sismosInfo.push({
        "mag": e.mag,
        "ubicacion": e.ubicacion,
        "estado": e.estado,
        "ciudad": e.ciudad,
        "profundidad": e.profundidad,
        "lat": Number(e.lat),
        "lng": Number(e.long),
        "fecha": e.Fecha
      })

      //console.log(e.Fecha)
    })

    //console.log(sismosInfo)
    //console.log(sismosInfo)
    Recientes()
    Grandes()
    EstadosAfectados()
    Profundidades()
  }, [], dates);

  /**
   * Obtener los temblores mas recientes a la fecha actual
   */
  function Recientes() {
    recientes.push(["Estado", "Magnitud"])
    for (let i = 0; i < 10; i++) {
      recientes.push([sismosInfo[i].estado, sismosInfo[i].mag])
    }
    //console.log(recientes)
    setRecientes(recientes)
  }

  /**
   * Obtener los temblores con la magnitud mas grande
   */
  function Grandes() {
    sismosInfo.map((e) => {
      console.log(e.fecha)
      fechas.push(new Date(e.fecha))
    })

    console.log(fechas.length)
    let arr = fechas.reduce(function (acc, curr) {
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }

      return acc;
    }, {});

     arreglo = []
    arreglo.push([{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }])
    Object.getOwnPropertyNames(arr).forEach(function (val) {
      arreglo.push([new Date(val), arr[val]])
    })

    console.log(arreglo);
    setDates(arreglo)
    console.log(dates)
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
    //console.log(estadosAfectados[0], estadosAfectados[1])
    aux = []
    aux.push(['Estado', 'Frecuencia'])
    for (let i = 0; i < estadosAfectados[0].length; i++) {
      //console.log(i)
      aux.push([estadosAfectados[1][i], estadosAfectados[0][i]])
    }

    //console.log(aux)

    setAfect(aux);
  }


  /**
   * Obtener las profundidades de los sismos
   */
  function Profundidades() {
    profundidades.push(["CIUDAD", "LAT", "LONG", "ESTADO", "MAGNITUD"])
    sismosInfo.map((e) => {
      //console.log(e.ciudad.split('de')[1])
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

    //console.log([a, b])
    return [b, c];
  }

  function fooDates(arr) {
    var a = [], b = [], c = [], prev = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
        c.push(arr[i])
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }

    //console.log([a, b])
    return [b, c];
  }

  return (
    <div>
      <div className="chart-grid">

        {/* <Chart
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
      /> */


        }

        <Chart
          width={'100%'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={afect}
          options={{
            title: "Estados más afectados por sismos",
          }}
          rootProps={{ 'data-testid': '1' }}
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
      </div>
      <br />
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
            "Ciudades y regiones: Magnitudes de sismos",
          hAxis: { title: "Latitud" },
          vAxis: { title: "Longitud" },
          bubble: { textStyle: { fontSize: 11 } },
        }}
      />
      <br />
      <Chart
        width={'100%'}
        height={200}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={dates}
        options={{
          title: 'Sismos por día',
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>

  )

}




export default Charts;
