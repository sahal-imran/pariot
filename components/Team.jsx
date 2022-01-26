import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link';
import { Fade } from "react-reveal";
import Zoom from 'react-reveal/Zoom';

function Team() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'start',
        background: "none",
        boxShadow: 'none'
    }));

    return <>
        <Box component="div" sx={{ width: "100%", background: "#6d28d9" }} >
            <Container
                id='TEAM'
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
                            color: "#c4b5fd",
                            mb: 6,
                            fontFamily: "'Patrick Hand', cursive",
                            textAlign: 'center'
                        }}
                        component="div"
                    >
                        The Team
                    </Typography>
                </Zoom>
                <Fade bottom cascade>
                    <Box sx={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Grid container rowSpacing={10} columnSpacing={{ xs: 10 }} columns={{ xs: 1, sm: 2, md: 3 }} >
                            {
                                TeamData.map((data) => {
                                    return <Grid key={data.id} item xs={1}>
                                        <Item sx={{ display: "flex", justifyContent: "center", alignItems: "start", flexDirection: 'column' }} >
                                            <img style={{ width: "100%", borderRadius: '30px', border: "3px solid white", marginBottom: '20px' }} src={data.imgURL} alt="Member" />
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    // fontWeight: "600",
                                                    color: "#c4b5fd",
                                                    mb: 2,
                                                    fontFamily: "'Patrick Hand', cursive",
                                                }}
                                                component="div"
                                            >
                                                {data.name}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    color: "white",
                                                    mb: 2,
                                                    fontFamily: "'Balsamiq Sans', cursive",
                                                    fontSize: '18px',
                                                }}
                                                component="div"
                                                gutterBottom
                                            >
                                                {data.des}
                                            </Typography>
                                            <Link target="_blank" href="#"><TwitterIcon id="twitter" sx={{
                                                fontSize: '25px', border: '1px solid #f87171', borderRadius: '30px', p: 1, color: "#f87171", "&hover": {
                                                    background: '#f87171',
                                                    color: "white",
                                                }
                                            }} /></Link>
                                        </Item>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Box>
                </Fade>
            </Container>
        </Box>

    </>
}

export default Team;


const TeamData = [
    {
        id: 1,
        imgURL: "img/sample1.png",
        name: "Cookie",
        des: "Cookie, our social octopus finds his strengths in bringing people together and getting shit done while leading projects from scratch to building large communities. Marketing is what he is specialized in."
    },
    {
        id: 2,
        imgURL: "img/sample2.png",
        name: "JK",
        des: "JK, our skilled artist from Florida is not only a genuine and warm character, he developed truly magnificent skills in design and drawing over the years since he was a child. JK joined the cryptosphere in 2017 and has created countless designs for projects, never disappointing his clients.With this collection, JK has dug very deep not leaving any important details unseen, always pushing the barrier for new challenges."
    },
    {
        id: 3,
        imgURL: "img/sample3.png",
        name: "Anondev",
        des: "Anondev, a veteran open source developer, has been building for the web since 2005. He co-founded a full-service digital agency and engineered solutions for numerous Fortune 500 brands. Anondev is naturally skilled in turning around development projects, improving team productivity, and creating dynamic solutions. He has advised several NFT projects on Ethereum and Solana."
    },
    {
        id: 4,
        name: "The Prophet",
        imgURL: "img/sample4.png",
        des: "Our second developer Prophet joined the crypto space in 2017. In addition to supporting our technical foundation, he oversees strategy and operations, continuing to improve in his field day in day out. He has launched, supported and advised many projects in the crypto space over the time."
    },
    {
        id: 5,
        imgURL: "img/sample1.png",
        name: "Grim Reaper",
        des: "Grim focuses on creating, implementing and optimizing social media strategies. He loves to build sustainable communities and hone the art of storytelling. He is a huge cinephile and enjoys spending time around energetic individuals."
    },
    {
        id: 6,
        imgURL: "img/sample2.png",
        name: "The Lama King",
        des: "Having his roots in Scandinavia, our web dev has won countless awards for interactive web development performing in his field for 10+ years. While it’s super easy going and fun working together with our Llama King, he likes to surprise with special website features over and over again."
    }
]
