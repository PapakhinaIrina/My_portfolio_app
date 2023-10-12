import React from "react";
import { AppBar, Container, Box, Button, Toolbar, Typography } from "@mui/material"
import { useMatchMedia } from "../../shared/utils/hooks/matchMediaHook"
import { headerHeight } from "../../shared/constants/componentSize"
import { LanguageButton } from "../LanguageButton/index"
import { useTranslation } from 'react-i18next';


const textHeader = "Papakhina's Portfolio"
export const Header = () => {
  const {isMobile, isTablet, isDesktop} = useMatchMedia();
  const { t } = useTranslation();
  return (
    <AppBar
    position="static"
    color="transparent"
    sx={{
      height: headerHeight,
      minWidth: isMobile ? '390px' : null || isTablet ? '767px' : null || isDesktop ? '1820px' : null,
      maxWidth: isMobile ? '766px' : null || isTablet ? '1199px' : null || isDesktop ? '3000px' : null,
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Typography 
            variant="h6" 
            noWrap 
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: isMobile ? 200 : null || isTablet ? 500 : null || isDesktop ?  700 : null,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
              { textHeader }
          </Typography>
          <Box 
            sx={{
              display: "flex",
              gap: 2
            }}>
              <Button
                variant="text"
                href="/about"
                sx={{
                  color: "black",
                  fontSize: isMobile ? 10 : null || isTablet ? 20 : null || isDesktop ?  70 : null,
                }}>
                  {t("about")}
              </Button>
              <Button
                variant="text"
                href="/contact"
                sx={{
                  color: "black",
                  fontSize: isMobile ? 10 : null || isTablet ? 20 : null || isDesktop ?  70 : null,

                }}>
                  {t("contact")}
              </Button>
              <Button
                variant="text"
                href="/portfolio"
                sx={{
                  color: "black",
                  fontSize: isMobile ? 10 : null || isTablet ? 20 : null || isDesktop ?  70 : null,
                }}>
                  {t("portfolio")}
              </Button>
              <Box
                sx={{
                  position: 'relative',
                  right: '0vh'
                }}>
                <LanguageButton />
              </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}