import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography, Link } from "@mui/material";

export const Account = () => {
  const { t } = useTranslation();

  return (
    <Container        
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        width: "500px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          {t("has_account")}
        </Typography>
      </Box>
      <Box
        sx={{
          marginLeft: "10px",
        }}
      >
        <Link href="#" underline="none">
          {t("login_in_here")}
        </Link>
      </Box>
    </Container>
  );
};
