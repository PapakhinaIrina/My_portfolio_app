/* eslint-disable unicorn/no-nested-ternary */
import { useMatchMedia } from '../../shared/utils/hooks/matchMediaHook';
import { Container, Typography, Box } from '@mui/material';
import { headerHeight } from '../../shared/constants/componentSize';
import { spacing } from '../../shared/constants/spacing';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Lottie from 'lottie-react';
import Animation from '../../shared/ui/animation/animationLandingPage.json';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const { t } = useTranslation();

  return (
    <Container>
      <Container
        sx={{
          alignItems: 'center',
          display: 'grid',
          flexDirection: 'column',
          gridTemplateRows: '1fr 100px',
          height: `calc(100vh - ${headerHeight})`,
          justifyContent: 'center',
          paddingTop: spacing[3],
          minWidth: isMobile ? '390px' : null || isTablet ? '767px' : null || isDesktop ? '1820px' : null,
          maxWidth: isMobile ? '766px' : null || isTablet ? '1199px' : null || isDesktop ? '3000px' : null,
        }}
      >
        <Typography
          variant='subtitle1'
          align='center'
          sx={{
            fontWeight: 'bold',
          }}
        >
          {t('landing_title')}
        </Typography>
        <KeyboardDoubleArrowDownIcon
          sx={{
            fontSize: '50px',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-10px',
            left: '10px',
            minWidth: isMobile ? '390px' : null || isTablet ? '767px' : null || isDesktop ? '1820px' : null,
            maxWidth: isMobile ? '766px' : null || isTablet ? '1199px' : null || isDesktop ? '3000px' : null,
          }}
        >
          <Lottie animationData={Animation} loop={true} autoplay={true} style={{ height: '300px', width: '300px' }} />
        </Box>
      </Container>
    </Container>
  );
};
export default Landing;
