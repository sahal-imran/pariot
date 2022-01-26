import HorizontalScroll from 'react-scroll-horizontal';
import { Box } from '@mui/system';
import { Fade } from "react-reveal";

function ArtGallery() {

    const child = { width: `15em`, height: `15em`, borderRadius: "30px", margin: "0px 15px" };
    const parent = { width: `100%`, height: `30vh` };

    return <>
        <Box component="div" sx={{ mt:-12,transition:"all 0.3s ease",transform:"skew(0deg,175deg)" }} >
            <Fade right cascade>
                <Box component="div" sx={{ mb: 3 }} style={parent}>
                    <HorizontalScroll
                        reverseScroll={true}
                        pageLock={false}
                        animValues={120}
                        config={{ stiffness: 100, damping: 5 }}
                    >
                        {
                            ImgURL.map((data) => {
                                return <Box key={data.id} component="div" >
                                    <img style={child} src={data.URL} alt="" />
                                </Box>
                            })
                        }
                    </HorizontalScroll>
                </Box>
            </Fade>
            <Fade left cascade>
                <Box component="div" sx={{}} style={parent}>
                    <HorizontalScroll
                        reverseScroll={true}
                        pageLock={true}
                        animValues={120}
                        config={{ stiffness: 100, damping: 5 }}
                    >
                        {
                            ImgURL2.map((data) => {
                                return <Box key={data.id} component="div" >
                                    <img style={child} src={data.URL} alt="" />
                                </Box>
                            })
                        }
                    </HorizontalScroll>
                </Box>
            </Fade>
        </Box>
    </>
}

export default ArtGallery;

const ImgURL = [
    {
        id: 1,
        URL: "img/gif.gif",
    },
    {
        id: 2,
        URL: "img/sample2.png",
    },
    {
        id: 3,
        URL: "img/sample3.png",
    },
    {
        id: 4,
        URL: "img/sample1.png",
    },
    {
        id: 5,
        URL: "img/sample2.png",
    },
    {
        id: 6,
        URL: "img/sample3.png",
    },
    {
        id: 7,
        URL: "img/sample1.png",
    },
    {
        id: 8,
        URL: "img/sample3.png",
    },
    {
        id: 9,
        URL: "img/sample2.png",
    },
];

const ImgURL2 = [
    {
        id: 1,
        URL: "img/sample3.png",
    },
    {
        id: 2,
        URL: "img/gif.gif",
    },
    {
        id: 3,
        URL: "img/sample1.png",
    },
    {
        id: 4,
        URL: "img/sample2.png",
    },
    {
        id: 5,
        URL: "img/sample1.png",
    },
    {
        id: 6,
        URL: "img/sample3.png",
    },
    {
        id: 7,
        URL: "img/sample1.png",
    },
    {
        id: 8,
        URL: "img/sample3.png",
    },
    {
        id: 9,
        URL: "img/sample2.png",
    },
];