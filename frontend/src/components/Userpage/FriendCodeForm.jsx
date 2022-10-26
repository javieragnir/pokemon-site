import {
  Stack,
  Typography,
  Switch,
  FormControl,
  Button,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';
import FriendCodeField from './FriendCodeField';

function FriendCodeForm({
  checked, handleCheckedChange, friendCode, handleFriendCodeChange, handleFriendCodeSubmit,
}) {
  return (
    <Stack alignItems="flex-start">
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Update friend code
      </Typography>
      <FormControl variant="standard">
        <FormControlLabel
          sx={{ margin: 0 }}
          control={(
            <Switch
              checked={checked}
              onChange={handleCheckedChange}
            />
          )}
          label="Is code for Nintendo Switch"
          labelPlacement="start"
        />
      </FormControl>
      <FormControl variant="standard">
        <FriendCodeField
          value={friendCode}
          onChange={handleFriendCodeChange}
        />
        <FormHelperText>
          Twelve digits in the form 0000-0000-0000
        </FormHelperText>
      </FormControl>
      <Button variant="contained" onClick={handleFriendCodeSubmit} sx={{ marginTop: 2 }}>
        Update
      </Button>
    </Stack>
  );
}

export default FriendCodeForm;
