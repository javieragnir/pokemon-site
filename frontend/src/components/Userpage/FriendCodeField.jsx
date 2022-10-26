import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';
import {
  Box,
  Input,
  InputLabel,
  FormControl,
} from '@mui/material';

const TextMaskCustom = forwardRef((props, ref) => {
  const { onChange } = props;
  return (
    <IMaskInput
      mask="0000-0000-0000"
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { value } })}
      overwrite
    />
  );
});

export default function FriendCodeField({ value, onChange }) {
  return (
    <Box>
      <FormControl variant="standard">
        <InputLabel htmlFor="friend-code-input">Friend Code</InputLabel>
        <Input
          value={value}
          onChange={onChange}
          name="textmask"
          id="formatted-friend-code-input"
          inputComponent={TextMaskCustom}
          variant="outlined"
          size="small"
        />
      </FormControl>
    </Box>
  );
}
