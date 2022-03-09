import * as React from 'react';
import Stack from '@mui/material/Stack';
import { StyledBadge } from './Avatar.styled';
import Avatar from '@mui/material/Avatar';



export const UserAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Support" src="https://media.istockphoto.com/vectors/customer-service-icon-vector-id1245132709?k=20&m=1245132709&s=612x612&w=0&h=nzIlrw4nH8RMkjD8OPz9w6kzHyiOI63S1K7VHfiXq78=" />
      </StyledBadge>
    </Stack>
  );
}
