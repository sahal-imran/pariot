import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Typography from "@mui/material/Typography";
import { Fade } from "react-reveal";
import Zoom from 'react-reveal/Zoom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Roadmap() {
    return <>
        <Container
            id='roadmap'
            component="div"
            maxWidth="xl"
            sx={{
                position: "relative", display: "flex", justifyContent: {
                    md: 'space-between',
                    sm: 'center'
                }, flexWrap: 'wrap', alignItems: "start", py: 18
            }}
        >
            <Box component="div" sx={{
                width: {
                    md: "37%",
                    sm: "100%"
                },
                ml:{
                    md:10
                },
                mb:4,
                display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column"
            }} >
                <Zoom>
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: `'Paytone One', sans-serif`,
                            fontWeight: "600",
                            color: "#4c1d95",
                            mb: 6,
                            fontFamily: "'Patrick Hand', cursive",
                        }}
                        component="div"
                    >
                        Roadmap
                    </Typography>
                </Zoom>
                <Fade bottom cascade>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#4c1d95",
                            mb: 2,
                            fontFamily: "'Balsamiq Sans', cursive",
                            fontSize: '20px',
                        }}
                        component="div"
                        gutterBottom
                    >
                        We’re in this for the long haul. Our team is working full-time on multiple milestones simultaneously. Check our Twitter feed and Discord announcements for the latest updates!
                    </Typography>
                </Fade>
            </Box>
            <Box component="div" sx={{
                width: {
                    md: "50%",
                    sm: "100%"
                },
                display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column"
            }} >
                <Box component="div" sx={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column" }} >
                    <Fade right cascade>
                        <Typography
                            variant="h3"
                            sx={{
                                // fontWeight: "600",
                                color: "#f87171",
                                mb: 4,
                                fontFamily: "'Patrick Hand', cursive",
                            }}
                            component="div"
                        >
                            25%
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Donating $25k to WildlifeSOS.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                HowRareIs Integration.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Solana Floor Integration.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                RPS Private Website V1.
                            </Typography>
                        </Box>
                    </Fade>
                </Box>
                <Box component="div" sx={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column" }} >
                    <Fade right cascade>
                        <Typography
                            variant="h3"
                            sx={{
                                // fontWeight: "600",
                                color: "#f87171",
                                mb: 4,
                                fontFamily: "'Patrick Hand', cursive",
                            }}
                            component="div"
                        >
                            50%
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Donating $25k to Red Panda Network
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#d5cbee' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Member exclusive Red Panda Squad merch store gets unlocked, featuring limited edition -
                                Phone cases, mousepads, hoodies, facemasks, shirts, tanktops, caps, mugs, socks, stickers, shorts.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Merch package giveaways.
                            </Typography>
                        </Box>
                    </Fade>
                </Box>
                <Box component="div" sx={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column" }} >
                    <Fade right cascade>
                        <Typography
                            variant="h3"
                            sx={{
                                // fontWeight: "600",
                                color: "#f87171",
                                mb: 4,
                                fontFamily: "'Patrick Hand', cursive",
                            }}
                            component="div"
                        >
                            75%
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#d5cbee' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Donating $25k to Red Panda Network.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Street art red panda creation in London with Graffiti Kings.
                            </Typography>
                        </Box>
                    </Fade>
                </Box>
                <Box component="div" sx={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column" }} >
                    <Fade right cascade>
                    <Typography
                        variant="h3"
                        sx={{
                            // fontWeight: "600",
                            color: "#f87171",
                            mb: 4,
                            fontFamily: "'Patrick Hand', cursive",
                        }}
                        component="div"
                    >
                        100%
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                        <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#d5cbee' }} />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "#4c1d95",
                                mb: 2,
                                fontFamily: "'Balsamiq Sans', cursive",
                                fontSize: '20px',
                            }}
                            component="div"
                            gutterBottom
                        >
                            Donating $25k.
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                        <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "#4c1d95",
                                mb: 2,
                                fontFamily: "'Balsamiq Sans', cursive",
                                fontSize: '20px',
                            }}
                            component="div"
                            gutterBottom
                        >
                            Launch of the Pandaboard with benefits for top holders.
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                        <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "#4c1d95",
                                mb: 2,
                                fontFamily: "'Balsamiq Sans', cursive",
                                fontSize: '20px',
                            }}
                            component="div"
                            gutterBottom
                        >
                            RPS surprise wheel.
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                        <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "#4c1d95",
                                mb: 2,
                                fontFamily: "'Balsamiq Sans', cursive",
                                fontSize: '20px',
                            }}
                            component="div"
                            gutterBottom
                        >
                            The squad gallery.
                            An interactive image gallery of all the adopted (minted) Red Pandas
                        </Typography>
                    </Box>
                    </Fade>
                </Box>
                <Box component="div" sx={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column" }} >
                    <Fade right cascade>
                        <Typography
                            variant="h3"
                            sx={{
                                // fontWeight: "600",
                                color: "#f87171",
                                mb: 4,
                                fontFamily: "'Patrick Hand', cursive",
                            }}
                            component="div"
                        >
                            BYI Branding (beyond your imagination)
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#d5cbee' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Partnerships and 1 of 1 NFT auctions, collaborating with blue chip projects.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Ongoing Celebrity & Influencer on-boarding.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                DJ live sets for our holders.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Real-life events - A trip to the red pandas & more.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#d5cbee' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Continuous marketing campaigns
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#d5cbee' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Launch of our animated mini-series.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#d5cbee' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Launch of our animated mini-series.
                            </Typography>
                        </Box>
                    </Fade>
                </Box>
                <Box component="div" sx={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column" }} >
                    <Fade right cascade>
                        <Typography
                            variant="h3"
                            sx={{
                                // fontWeight: "600",
                                color: "#f87171",
                                mb: 4,
                                fontFamily: "'Patrick Hand', cursive",
                            }}
                            component="div"
                        >
                            True Value
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#d5cbee' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                The RPS DAO: A community-backed organisation helping the Solana ecosystem flourish, through incubation of new projects, arranging partnerships with various protocols and mutual investing in rare SOL collectibles.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Private RPS website for Red Panda NFT holders with unique events, fun games (tamagotchi style) and more.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Development of the RPSG (Red Panda Squad Game) where we enter the metaverse and can use our red pandas to play and earn.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#6fe7b8' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Special airdrops for holders as puzzle pieces of the animated series.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#d5cbee' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Exclusive Halloween Airdrop for holders of specific traits.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#d5cbee' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Launch of our own marketplace with 50%+ royalty redistribution to the Red Panda DAO.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", }} >
                            <CheckCircleOutlineIcon sx={{ fontSize: "30px", mr: 2, color: '#d5cbee' }} />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#4c1d95",
                                    mb: 2,
                                    fontFamily: "'Balsamiq Sans', cursive",
                                    fontSize: '20px',
                                }}
                                component="div"
                                gutterBottom
                            >
                                Ongoing integration of our Red Panda NFTs with a multitude of Metaverse projects.
                            </Typography>
                        </Box>
                    </Fade>
                </Box>
            </Box>
        </Container>
    </>
}

export default Roadmap;
