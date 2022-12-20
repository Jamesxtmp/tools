import Navbar from "./Navbar";
import { Container } from "@mui/material";

export default function Layout ({children}) {
    return (
        <div>
            <Navbar />
            <Container sx={{ display:'flex', justifyContent: "space-around",  flexWrap: "wrap" }} >
                {children}
            </Container>
            <style></style>
        </div>
    );
}