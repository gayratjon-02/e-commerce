import React from "react";
import "../css/app.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Box, Button, Container, Stack, Typography} from "@mui/material";


function App() {
    return <Container maxWidth={"sm"}>
        <Stack flexDirection={"column"}>
            <Box sx={{my: 4}}>
                <Typography variant={'h4'} component={'h4'}>Create React app with Redux and TypeScript</Typography>
            </Box>
        </Stack>
    </Container>
}
    export default App;





