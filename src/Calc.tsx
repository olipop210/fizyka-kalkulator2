// @ts-nocheck

import { useState } from "react"
import { TextField, Button, useTheme, Tooltip } from "@mui/material"
import gravityTurnAngle from "./test"
import { LineChart } from "@mui/x-charts"
const Calc = () => {
    const [rocketStartMass, setRocketStartMass] = useState<number>(0) //tony (TRZEBA ZAMIENIC NA KG)
    const [fuelFlow, setFuelFlow] = useState<number>(0) //KG/S 
    const [thrust, setThrust] = useState<number>(0) //kN
    const [maxTime, setMaxTime] = useState<number>(0) //s
    const [config, setConfig] = useState<any>()
    const [maxQTime, setMaxQTime] = useState<number>(0)
    const [maxQValue, setMaxQValue] = useState<number>(0)
    const theme = useTheme()

    const oblicz = () => {

        let dane = [{ v: 0, h: 0, m: 0, aPozorne: 0 }];
        let v0 = 0
        for (let t: number = 1; t <= maxTime; t += 0.5) {
            let m: number = parseFloat(((rocketStartMass * 1000) - (t * fuelFlow)).toFixed(6))

            let a: number = parseFloat(((((thrust * 1000) / (m * 9.80665)) - 1) * 9.80665).toFixed(6))
            if (a < 0) {
                alert("a<0");
                return;
            }

            let aPozorne: number = parseFloat((a * Math.cos(gravityTurnAngle(dane[t % 1 == 0 ? t - 1 : t - 0.5].h) * (Math.PI / 180))).toFixed(6))
            //console.log(aPozorne);
            if (aPozorne < 0) {
                console.log("aPozorne<0");
                console.log(t)
                console.table(dane)
                console.log(a)
                return;
            }
            let v: number = parseFloat(((aPozorne * t)).toFixed(6));

            if (v < 0) {
                alert("v<0");
                return;
            }
            let sredniaAPozornego = 0;
            dane.forEach((e) => {
                sredniaAPozornego += e.aPozorne
            })
            sredniaAPozornego = parseFloat((sredniaAPozornego / dane.length).toFixed(6))
            let h: number = parseFloat(((v * t) + (((sredniaAPozornego * t * t) / 2))).toFixed(6))
            if (h < 0) {
                alert("h<0");
                return;
            }
            v0 = v;
            //let p: number = parseFloat((101325 * Math.pow((1 - ((-3 * h) / 288.15)), -0.01138)).toFixed(6))
            //let q: number = parseFloat((p * v * v / 2).toFixed(6))

            dane.push({ v: v, h: h, m: m, aPozorne: aPozorne })



        }
        console.table(dane)
        v0 = 0

        let finalData = [{ p: 0, L: 0, q: 0 }];
        //console.error(dane[dane.length - 1].h)

        for (let t: number = 1; t < dane.length; t++) {
            let h: number = dane[t].h
            let v: number = dane[t].v
            let L: number = remap(h, 110000)
            L = L > 0 ? finalData[t - 1].L + 0.008 * finalData[t - 1].L : L;
            let potegowana = 1 - ((L * h) / 288.15)
            let wykladnik = (0.034165 / L) - 1
            let potega = Math.pow(potegowana, wykladnik)
            let p: number = parseFloat((1.225 * potega).toFixed(6))
            let q: number = parseFloat(((p * v * v) / 2).toFixed(3))
            finalData.push({ p: p, L: L, q: q })
        }

        let maxIndex: number = 0;

        finalData.forEach((e, i) => {
            if (i == 0) {

            }
            else {
                if (e.q > finalData[maxIndex].q) {
                    maxIndex = i
                }
            }
        })
        //console.table(finalData)
        //console.log(maxIndex)
        let labels = [];
        let qArray = [];
        for (let i = 0; i < maxTime * 2; i++) {
            labels.push(String(i / 2))
            qArray.push(finalData[i].q)
        }
        let config = {
            xAxis: labels,
            series: qArray
        }
        setConfig(config)
        setMaxQTime(maxIndex)
        setMaxQValue(finalData[maxIndex].q)
    }

    const remap = (height: number, maxHeight: number) => {
        let x1 = 0
        let x2 = maxHeight
        let y1 = -6.5
        let y2 = 2.8
        let remaped: number = (y1 + ((height - x1) * (y2 - y1)) / (x2 - x1))
        return remaped
    }


    return (
        <>
            <section className="calc" style={{ backgroundColor: theme.palette.background.paper }}>
                <h2 style={{ backgroundColor: theme.palette.secondary.main }}>Kalkulator max Q</h2>
                <article>
                    <Tooltip title={"Początkowa masa rakiety (t)"}>
                        <TextField onChange={(e) => { setRocketStartMass(parseFloat(e.target.value)) }} label='Początkowa masa rakiety (t)' type='number' />
                    </Tooltip>
                    <Tooltip title="Przepływ paliwa (kg/s)">
                        <TextField onChange={(e) => { setFuelFlow(parseFloat(e.target.value)) }} label='Przepływ paliwa (kg/s)' type='number' />
                    </Tooltip>
                    <Tooltip title="Ciąg rakiety">
                        <TextField onChange={(e) => { setThrust(parseFloat(e.target.value)) }} label='Ciąg rakiety' type='number' />
                    </Tooltip>
                    <Tooltip title="Czas spalania (s)">
                        <TextField onChange={(e) => { setMaxTime(parseFloat(e.target.value)) }} label='Czas spalania (s)' type='number' />
                    </Tooltip>
                </article>
                <Button size='large' variant='contained' onClick={oblicz}>Oblicz</Button>

            </section>
            {
                config ? (<section style={{ backgroundColor: theme.palette.background.paper }} className="chart">
                    <h2>Max Q zostanie osiągnięte w {maxQTime / 2} sekundzie i będzie wynosić {maxQValue}Pa</h2>
                    <LineChart width={window.innerWidth * 0.8} height={500} xAxis={[{ data: config.xAxis }]} series={[{ data: config.series }]} />
                </section>) : null
            }



        </>
    )
}

export default Calc