import { TextField, styled } from '@mui/material';
import { useTheme } from './Theme/Theme';

const CustomTextField = () => {
  const { theme } = useTheme();

  const StyledTextField = styled(TextField)(() => ({
    marginLeft: '1vw',
    marginRight: '1vw',
    paddingLeft: '1vw',
    backgroundImage: `linear-gradient(${theme.palette.primary.main}, #3268a8)`,
    borderRadius: '20px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 0
      }
    }
  }));

  return <StyledTextField />;
};

export default CustomTextField;