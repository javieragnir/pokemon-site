/* eslint-disable no-undef */
import { useState } from 'react';
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

function FriendCodeForm() {
  const [friendCode, setFriendCode] = useState('');
  const [checked, setChecked] = useState(true);

  const handleFriendCodeChange = (event) => {
    setFriendCode(event.target.value);
  };

  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleFriendCodeSubmit = async () => {
    handleOpenProgress();

    try {
      let fc = '';
      if (checked) {
        fc += 'SW-';
      }
      fc += friendCode;
      const response = await userService.updateFriendCode(loggedUser.username, { friendCode: fc });
      setUser(response);
      handleModalClose();
      setFriendCode('');
    } catch (error) {
      console.log(error);
    }

    handleCloseProgress();
  };

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
