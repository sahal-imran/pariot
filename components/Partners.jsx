import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Fade } from "react-reveal";
import Zoom from 'react-reveal/Zoom';

function Partners() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        background: "none",
        boxShadow: 'none',
        width: '100%',
        height: "100%"
    }));

    return <Box component="div" sx={{ width: "100%", background: "#6d28d9", minHeight: '100vh' }} >
            <Container
                id={'PARTNER'}
                component="div"
                maxWidth="xl"
                sx={{
                    display: "flex", justifyContent: 'center', alignItems: "center", py: 8, flexDirection: "column"
                }}
            >
                <Zoom>
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: `'Paytone One', sans-serif`,
                            fontWeight: "600",
                            color: "white",
                            mb: 12,
                            fontFamily: "'Patrick Hand', cursive",
                            textAlign: 'center'
                        }}
                        component="div"
                    >
                        Our Partners
                    </Typography>
                </Zoom>
                <Fade bottom cascade>
                    <Box sx={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Grid container rowSpacing={10} columnSpacing={{ xs: 10 }} columns={{ xs: 1, sm: 2, md: 5 }} >
                            {
                                PartnerData.map((data) => {
                                    return <Grid key={data.id} item xs={1}>
                                        <Item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                            <img style={{ width: "80%" }} src={data.imgURL} alt="Member" />
                                        </Item>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Box>
                </Fade>
            </Container>
        </Box>
}

export default Partners;


const PartnerData = [
    {
        id: 1,
        imgURL: "img/partner/partner1.png",
    },
    {
        id: 2,
        imgURL: "img/partner/partner2.png",
    },
    {
        id: 3,
        imgURL: "img/partner/partner4.png",
    },
    {
        id: 4,
        imgURL: "img/partner/partner7.png",
    },
    {
        id: 5,
        imgURL: "img/partner/partner6.png",
    },
    {
        id: 6,
        imgURL: "img/partner/partner8.png",
    },
    {
        id: 7,
        imgURL: "img/partner/partner1.png",
    },
    {
        id: 8,
        imgURL: "img/partner/partner2.png",
    },
    {
        id: 9,
        imgURL: "img/partner/partner4.png",
    },
    {
        id: 10,
        imgURL: "img/partner/partner7.png",
    },
]