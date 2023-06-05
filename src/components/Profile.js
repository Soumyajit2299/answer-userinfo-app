import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
const Profile = ({ userid }) => {
  const [profileData, setProfileData] = useState([]);
  async function profileDetails() {
    const response = await fetch(
      `http://localhost:5000/test/v1/getuserdetails/${userid}`
    );
    const data = await response.json();
    setProfileData(data);
  }

  // eslint-disable-next-line
  useEffect(() => {
    profileDetails();
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100vh",
          height: "100vh",
          marginLeft: "25%",
          mt: 5,
        }}
      >
        {profileData.userid ? (
          <Card>
            <CardMedia
              component="img"
              alt="Titans"
              height="500"
              image={profileData.photo}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {`${profileData.firstname} ${profileData.lastname}`}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {profileData.comment}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ) : (
          <Typography variant="h4">
            {userid ? profileData : "Not Authorized!!"}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Profile;
