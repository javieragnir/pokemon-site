import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';
import {
  Box,
  Input,
  InputLabel,
  FormControl,
} from '@mui/material';

// uses the iMask library for custom form input
const TextMaskCustom = forwardRef((props, ref) => {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
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
        <InputLabel htmlFor="formatted-text-mask-input">Friend Code</InputLabel>
        <Input
          value={value}
          onChange={onChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
          variant="filled"
          size="small"
        />
      </FormControl>
    </Box>
  );
}
