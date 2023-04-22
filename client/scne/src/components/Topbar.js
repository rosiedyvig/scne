import React from 'react';
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Box from '@mui/material/Box';
import { ReactComponent as UfoLogo } from '../ufologo.svg';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  left: '0.1rem',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
  '& .MuiSpeedDial-fab': {
    backgroundColor: 'transparent',
    borderRadius: '50%',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
  '& .MuiSpeedDialAction-staticTooltipLabel': {
    width: 'auto',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: '#f7f7f7',
    color: '#333',
    fontWeight: 'bold',
  },
  '& .MuiSpeedDialAction-fab': {
    borderRadius: '0.5rem',
  },
}));
const Topbar = ({ scene, onSceneChange }) => {
  const handleChange = (value) => {
    onSceneChange(value);
  };

  return (
    <>
      <div className="topbar">
        <StyledSpeedDial
          ariaLabel="SpeedDial"
          icon={
            <Box sx={{ bgcolor: 'transparent', p: 1 }}>

              <UfoLogo width="80px" height="80px" />
            </Box>
          }
          direction="left"
          onClose={() => handleChange(scene)}
          onOpen={() => handleChange(scene)}
          
        >
          <SpeedDialAction
            icon={'coffee'}
            tooltipTitle="coffee"
            sx={{
              borderRadius: '4px',
              width: '85px',
              height: '40px',
              minWidth: '85px',
            }}
            onClick={() => handleChange('coffee')}
          />
          <SpeedDialAction
            icon={'wellness'}
            tooltipTitle="wellness"
            sx={{
              borderRadius: '4px',
              width: '85px',
              height: '40px',
              minWidth: '85px',
            }}
            onClick={() => handleChange('wellness')}
          />
          <SpeedDialAction
            icon={'mixology'}
            tooltipTitle="mixology"
            sx={{
              borderRadius: '4px',
              width: '85px',
              height: '40px',
              minWidth: '85px',
            }}
            onClick={() => handleChange('mixology')}
          />
        </StyledSpeedDial>
      </div>
    </>
  );
};

export default Topbar;