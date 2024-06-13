import { useTheme } from "@mui/material"

const WhatIs = () => {

    const theme = useTheme()

    return (
        <section className="whatIs" style={{ backgroundColor: theme.palette.background.paper }}>
            <h2 style={{ backgroundColor: theme.palette.secondary.main }}>Czym jest max Q?</h2>
            <p>
                MaxQ to punkt maksymalnego ciśnienia dynamicznego wywieranego na rakietę w trakcie jej lotu. <br></br>Naprężenia wywierane na rakietę są wtedy największe./ Jeśli więc rakeita posiada jakieś wady konstrukcyjne, to powinny się one ujawnić właśnie wtedy.{' '}
            </p>
        </section>
    )
}

export default WhatIs
