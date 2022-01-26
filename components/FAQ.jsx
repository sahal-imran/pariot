import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fade } from "react-reveal";
import Zoom from 'react-reveal/Zoom';

function FAQ() {
    return <Container
            id='FAQ'
            component="div"
            maxWidth="fluid"
            sx={{
                display: "flex", justifyContent: 'center', alignItems: "center", minHeight: "100vh", py: 14, flexDirection: "column", background: '#ede9fe'
            }}
        >
            <Zoom>
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: `'Paytone One', sans-serif`,
                        fontWeight: "400",
                        color: "#4c1d95",
                        mb: 6,
                        fontFamily: "'Patrick Hand', cursive",
                        textAlign: 'center'
                    }}
                    component="div"
                >
                    Frequently Asked<br />Questions
                </Typography>
            </Zoom>
            <Fade bottom cascade>
            <Box component="div" sx={{
                width: {
                    md: "60%",
                    sm: "90%"
                }, m: "auto"
            }} >
                {
                    faq.map((data) => {
                        return <Accordion key={data.id} sx={{ background: "unset", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: 'none', py: 2, }} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: "#f87171" }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="h4" sx={{
                                    // fontWeight: "600",
                                    color: "#f87171",
                                    fontFamily: "'Patrick Hand', cursive",
                                }}>{data.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: "#4c1d95",
                                        fontFamily: "'Balsamiq Sans', cursive",
                                        fontSize: '20px',
                                    }}
                                    component="div"
                                    gutterBottom
                                >
                                    {data.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    })
                }
            </Box>
            </Fade>

        </Container>
}

export default FAQ;

const faq = [
    {
        id: 1,
        question: "When was lunch day?",
        answer: "We’re in this for the long haul. Our team is working full-time on multiple milestones simultaneously. Check our Twitter feed and Discord announcements for the latest updates!"
    },
    {
        id: 2,
        question: "How can I get a Red Panda?",
        answer: "We have sold out! But you can buy your Red Panda on verified secondary marketplaces such as at Solanart, Alpha Art, FTX US, MagicEden, Digital Eyes & SolSea"
    },
    {
        id: 3,
        question: "What is good ren panda to buy?",
        answer: "HowRareIs shows you the ranking for our whole collection and Solana Floor shows you undervalued red pandas and statistics."
    },
    {
        id: 4,
        question: "What was the price of miniting?",
        answer: "2.5 SOL"
    },
    {
        id: 5,
        question: "Where do the red panda live?",
        answer: "Our Red Pandas reside in the world of Solana. A land with cheap gas, instant transactions, and an unstoppable community."
    },
    {
        id: 6,
        question: "More Questions?",
        answer: "Join our community on either Discord or Twitter and ask us anything there."
    },
]
