import {Mail, Notifications, ShoppingCart,} from '@mui/icons-material';
import Badge from '@mui/material/Badge';

export function Notify() {
    return (
    <Badge badgeContent={6} color="error">
        <Notifications color='primary'/>
      </Badge>
    );
  }

  export function Cart() {
    return (
      <Badge badgeContent={4} color="error">
        <ShoppingCart color='primary'/>
      </Badge>
    );
  }
  export function Message() {
    return (
      <Badge badgeContent={5} color="error">
        <Mail color='primary'/>
      </Badge>
    );
  }
  