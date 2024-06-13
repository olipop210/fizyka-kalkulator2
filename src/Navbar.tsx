import { useTheme } from "@mui/material"

const Navbar = () => {

    const theme = useTheme()

    return (
        <header style={{ backgroundColor: theme.palette.primary.main }}>
            <h1>Kalkulator max Q</h1>
        </header>
    )
}

export default Navbar