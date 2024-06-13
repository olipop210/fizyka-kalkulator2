// @ts-nocheck

import { useTheme } from "@mui/material"

const HowToCount = () => {

    const theme = useTheme()

    return (
        <section className="howtocount" style={{ backgroundColor: theme.palette.background.paper }}>
            <h2 style={{ backgroundColor: theme.palette.secondary.main }}>Jak liczyć maxQ?</h2>
            <p>Max Q domyślnie wyznaczane jest ze wzoru: <br></br>
                <math display="inline" linebreakstyle="before" xmlns="http://www.w3.org/1998/Math/MathML">
                    <mi>q</mi>
                    <mo>=</mo>
                    <mfrac>
                        <mrow>
                            <mi>p</mi>
                            <msup>
                                <mi>v</mi>
                                <mn>2</mn>
                            </msup>
                        </mrow>
                        <mn>2</mn>
                    </mfrac>
                    <mspace width="-0.05em" /></math>
            </p>
            <p>
                <math display="inline" linebreakstyle="before" xmlns="http://www.w3.org/1998/Math/MathML">
                    <mo linebreak="newline" >&#xA0;</mo><mtext>gdzie:</mtext><mo>&#xA0;</mo><mi>p</mi><mo>&#xA0;</mo><mtext>to</mtext><mo>&#xA0;</mo><mtext>ci&#x15b;nienie</mtext><mo>&#xA0;</mo><mtext>atmosferyczne,</mtext><mo>&#xA0;</mo><mtext>a</mtext><mo>&#xA0;</mo><mi>v</mi><mo>&#xA0;</mo><mtext>to</mtext><mo>&#xA0;</mo><mtext>chwilowa</mtext><mo>&#xA0;</mo><mtext>szybko&#x15b;&#x107;</mtext><mo>&#xA0;</mo><mo>&#xA0;</mo>
                </math>
            </p>
            <div>
                <p>Jednak w przypadku rakiet pojawiają się pewne komplikacje:</p>
                <ul>
                    <li>Im wyżej jesteśmy, tym atmosfera wywiera mniejsze ciśnienie.</li>
                    <li>Im dłużej lecimy, tym rakieta ma mniej paliwa i jest lżejsza.</li>
                    <li>Im jet lżejsza tym silniki generują większe przyspieszenie</li>
                    <li>Rakieta w trakcie lotu wykonuje tzw. Gravity Turn</li>
                </ul>
                <p>Te czynniki wpływają na ciśnienie dynamiczne i zmieniają się w czasie</p>

                <p>Aby obliczenia były poprawne, należy zawrzeć wszystkie zmienne i odpowiednio zmodyfikować wzór:</p>
                <p><math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mn>101325</mn><mrow><mo>(</mo><mrow><mn>1</mn><mo>-</mo><mfrac><mrow><mn>0.0065</mn><mo>&#xa0;</mo><mo>&#xb7;</mo><mi>h</mi></mrow><mrow><mn>288</mn><mo>,</mo><mn>15</mn></mrow></mfrac><msup><mo>)</mo><mn>5.25588</mn></msup><mo>&#xb7;</mo><mfrac><mrow><msub><mi>F</mi><mn>1</mn></msub><mo>&#xb7;</mo><mi>t</mi></mrow><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>-</mo><mrow><mo>(</mo><mrow><mi>t</mi><mo>&#xb7;</mo><msub><mi>f</mi><mi>f</mi></msub></mrow><mo>)</mo></mrow></mrow></mfrac></mrow></mrow></mrow><mn>2</mn></mfrac></math></p>
                <p><math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>h</mi><mo>=</mo><mfrac><mrow><mfrac><mrow><msub><mi>F</mi><mn>1</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>-</mo><mo>(</mo><mi>t</mi><mo>&#xb7;</mo><msub><mi>f</mi><mi>f</mi></msub><mo>)</mo></mrow></mfrac><mo>&#xb7;</mo><msup><mi>t</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac></math></p>
                <p><math display="inline" xmlns="http://www.w3.org/1998/Math/MathML"><mtext>gdzie&#x2007;</mtext><mo>&#xA0;</mo><msub><mi>F</mi><mn>1</mn></msub><mo>&#xA0;</mo><mtext>to&#x2007;maksyma</mtext><mtext>ln</mtext><mtext>y&#x2007;ci&#x105;g&#x2007;rakiety</mtext><mo>&#xA0;</mo><mo>[</mo><mi>N</mi><mo>]</mo><mo>&#xA0;</mo><mo>,</mo><mo>&#xA0;</mo><msub><mi>f</mi><mi>f</mi></msub><mo>&#xA0;</mo><mtext>to&#x2007;przep&#x142;yw&#x2007;paliwa</mtext><mo>&#xA0;</mo><mo>[</mo><mfrac><mrow><mi>k</mi><mi>g</mi></mrow><mi>s</mi></mfrac><mo>]</mo><mo>&#xA0;</mo><mo>,</mo><mo>&#xA0;</mo><msub><mi>m</mi><mn>0</mn></msub><mo>&#xA0;</mo><mtext>to&#x2007;pocz&#x105;tkowa&#x2007;masa&#x2007;rakiety</mtext><mo>&#xA0;</mo><mo>[</mo><mi>k</mi><mi>g</mi><mo>]</mo></math></p>
            </div>
        </section>
    )
}

export default HowToCount