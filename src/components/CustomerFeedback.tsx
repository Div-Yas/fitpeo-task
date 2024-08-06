import {
  Avatar,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import image3 from "../assets/images/7.jpg";
import image4 from "../assets/images/8.jpg";
import image5 from "../assets/images/9.jpg";

const CustomerFeedback: React.FC = () => {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const reviews = [
    {
      name: "Jenny Wilson",
      pic: image3,
      review:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger with greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    },
    {
      name: "Dianne Russell",
      pic: image5,
      review:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    },
    {
      name: "Devon Lane",
      pic: image4,
      review:
        "Normally wings are wings, but theirs are lean meaty and tender, and the sauces are top-notch.",
    },
  ];
  return (
    <Grid item xs={12} md={4}>
      <Item>
        <Typography
          variant="h6"
          sx={{ fontSize: 15, fontWeight: 600 }}
          textAlign={"start"}
        >
          Customer's Feedback
        </Typography>
        <List sx={{ height: "72.6vh", overflow: "auto" }}>
          {reviews.map((review, index) => (
            <Box key={index}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    src={review.pic}
                    alt={review.name}
                  >
                    {!review.pic && review.name[0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={review.name}
                  secondary={
                    <>
                      <Box display="flex" alignItems="center">
                        {Array.from({ length: 3 }).map((_, starIndex) => (
                          <StarIcon key={starIndex} color="warning" />
                        ))}
                        {Array.from({ length: 2 }).map((_, starIndex) => (
                          <StarIcon key={starIndex} color="primary" />
                        ))}
                      </Box>
                      <Typography sx={{ fontSize: "13.1px" }}>
                        {review.review}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < 2 && <Divider />}
            </Box>
          ))}
        </List>
      </Item>
    </Grid>
  );
};

export default CustomerFeedback;
