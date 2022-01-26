import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Typography from "@mui/material/Typography";
import { Fade } from "react-reveal";
import Zoom from 'react-reveal/Zoom';
import Link from '@mui/material/Link';

function RedPandas() {
  return <Container
    component="div"
    maxWidth="xl"
    sx={{
      display: "flex", justifyContent: {
        md: 'space-between',
        sm: 'center'
      }, flexWrap: 'wrap', alignItems: "center", py: 18
    }}
  >
    <Box component="div" sx={{
      width: "50%", display: {
        md: "block",
        xs: "none"
      }
    }} >

    </Box>
    <Box component="div" sx={{
      width: {
        md: '50%',
        sm: '100%'
      }, display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column"
    }} >
      <Zoom>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "600",
            color: "#4c1d95",
            mb: 6,
            fontFamily: "'Patrick Hand', cursive"
          }}
          component="div"
        >
          Red Pandas...
        </Typography>
      </Zoom>
      <Fade right cascade>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#4c1d95",
            mb: 2,
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: '20px',
            // textShadow: "2px 2px 4px #00000066",
          }}
          component="div"
          gutterBottom
        >
          ...are not only cute. They are considered to be very smart animals, living in the bamboo forests of the Himalayan and Heng-Duan Mountains.
        </Typography>
      </Fade>
      <Fade right cascade>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: `'Paytone One', sans-serif`,
            // fontWeight: "600",
            color: "#4c1d95",
            mb: 6,
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: '20px',
            // textShadow: "2px 2px 4px #00000066",
          }}
          component="div"
          gutterBottom
        >
          Did you know that there are less than 10.000 red pandas left in the wild? Our squad has a big heart for them and decided to put the red pandas into the unlimited crypto space.
        </Typography>
      </Fade>
      <Fade right cascade>
        <Link style={{ textDecoration: "underline", textAlign: "justify", fontFamily: "'Balsamiq Sans', cursive", fontSize: '2.5rem', color: "#f87171" }} href="">"So far we have donated $50,000 with over $50,000 more to come"</Link>
      </Fade>
      <Fade right cascade>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: `'Paytone One', sans-serif`,
            // fontWeight: "600",
            color: "#4c1d95",
            mt: 6,
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: '20px',
            // textShadow: "2px 2px 4px #00000066",
          }}
          component="div"
          gutterBottom
        >
          Programmed into the Solana blockchain we provide the opportunity to digitally adopt a red panda as an NFT. So far we have donated $50,000 with over $50,000 more to come, gaining real-world utility by helping the endangered pandas survive through our contributions.
        </Typography>
      </Fade>
      <Fade right cascade>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: `'Paytone One', sans-serif`,
            // fontWeight: "600",
            color: "#4c1d95",
            mb: 2,
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: '20px',
            // textShadow: "2px 2px 4px #00000066",
          }}
          component="div"
          gutterBottom
        >
          Not limiting ourselves to donations, our team is constantly pushing barriers by launching our own marketplace with 50% of the royalties going to our RPS DAO fund as well as creating high-quality streetart, launching individualised merch and more.
        </Typography>
      </Fade>
      <Fade right cascade>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: `'Paytone One', sans-serif`,
            // fontWeight: "600",
            color: "#4c1d95",
            mb: 2,
            fontFamily: "'Balsamiq Sans', cursive",
            fontSize: '20px',
            // textShadow: "2px 2px 4px #00000066",
          }}
          component="div"
          gutterBottom
        >
          We are giving back to everyone in the Red Panda Squad, running exciting giveaways and events on our Discord channel and Twitter page.
        </Typography>
      </Fade>

    </Box>
  </Container>
}

export default RedPandas;
