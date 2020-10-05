import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { CenteredDialogTitle, CenterLoginIcon } from './Login.component.styled';
import { EMAIL, PASS } from '../../utils/constants';
import { useAuth } from '../../providers/Auth';
import { useApp } from '../../providers/App';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const { login } = useAuth();
  const { openLogin, setOpenLogin } = useApp();

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setOpenLogin(false);
  };

  const authenticate = () => {
    if (email === EMAIL && password === PASS) {
      login();
      setEmail('');
      setPassword('');
      setOpenLogin(false);
      return;
    }
    setError(true);
  };

  return (
    <div>
      <Dialog open={openLogin} onClose={handleClose} aria-labelledby="form-dialog-title">
        <CenteredDialogTitle>Login</CenteredDialogTitle>
        <DialogContent>
          <CenterLoginIcon>
            <AccountCircle fontSize="large" />
          </CenterLoginIcon>
          <TextField
            error={error}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(evt) => {
              setEmail(evt.target.value);
              setError(false);
            }}
            helperText={error && 'Incorrect user or password'}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(evt) => {
              setPassword(evt.target.value);
              setError(false);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={authenticate} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginForm;
