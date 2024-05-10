import {
  Box,
  Container,
  Typography,
  Paper,
  BottomNavigation,
} from "@mui/material";
import ImageCollage from "../Components/ImageCollage";
import CustomizedAccordions from "../Components/Accordian";
import BasicModal from "../Components/Modal";

function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragrah" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          nesciunt fugiat harum repudiandae earum illo quibusdam aliquid minima,
          consequuntur quo vel, accusamus omnis, maiores eveniet saepe ipsa ea
          nemo excepturi ipsum vero sequi rem! Dignissimos non consequatur ab
          mollitia assumenda!
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently asked questions
        </Typography>
        <CustomizedAccordions />
      </Box>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
            <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
export default Tour;
// export default Tour;
