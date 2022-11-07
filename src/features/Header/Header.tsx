import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Typography, Button, Modal, Box } from "@mui/material";
import CompanyLogo from "assets/logo.png";
import HelpIcon from "@mui/icons-material/Help";
import { translations } from "./translations";

const StyledImage = styled("img")(() => ({
  width: "30px",
  height: "30px",
}));

const modelDescriptionStyles = {
  direction: "rtl",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Header: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      <StyledImage src={CompanyLogo} alt="charisma" />

      <Typography>Code Challenge</Typography>

      <Button onClick={handleOpenPopup} sx={{ minWidth: 0, p: 1 }}>
        <HelpIcon sx={{ color: "white" }} />
      </Button>
      <Modal
        open={isPopupOpen}
        onClose={handleClosePopup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modelDescriptionStyles}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {translations.itemsInNeed}
          </Typography>
          <Typography id="modal-modal-description">
            {translations.item1}
          </Typography>
          <Typography>{translations.item2}</Typography>
          <Typography>{translations.item3}</Typography>
          <Typography>{translations.item4}</Typography>
          <Typography>{translations.item5}</Typography>
        </Box>
      </Modal>
    </AppBar>
  );
};
