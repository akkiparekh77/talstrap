import { boolean, select } from '@storybook/addon-knobs'
import { useState } from 'react'

import { makeStyles } from '../../styles'
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from '..'

const useStyles = makeStyles(() => ({
  dialog: {
    width: 480,
  },
}))

export default {
  title: 'Dialog',
  component: Dialog,
}

export const playground = (): JSX.Element => {
  const knobs = {
    fullWidth: boolean('fullWidth', true),
    maxWidth: select('maxWidth', ['xs', 'sm', 'md', 'lg', 'xl'], 'xs'),
  }

  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth={knobs.fullWidth} maxWidth={knobs.maxWidth}>
        <DialogTitle showClose onClose={handleClose}>
          Edit Name
        </DialogTitle>
        <DialogContent>
          <TextField label="Name" defaultValue="Max Mustermann" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export const examples = (): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.dialog}>
            <DialogTitle showClose>Form Dialog</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControlLabel label="Same as booking party" control={<Checkbox color="primary" />} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Company Name"
                    defaultValue="Musterfirma GmbH"
                    fullWidth
                    InputProps={{ className: 'Mui-focused' }}
                    InputLabelProps={{ focused: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Contact Person" defaultValue="Max Mustermann" fullWidth />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button>Cancel</Button>
              <Button variant="contained">Save</Button>
            </DialogActions>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.dialog}>
            <DialogTitle>Confirmation Dialog</DialogTitle>
            <DialogContent>
              <DialogContentText>
                You have made changes to 34 records. Do you want to save all the changes?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button>Cancel</Button>
              <Button variant="contained">Save</Button>
            </DialogActions>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.dialog}>
            <DialogTitle showClose>Information Dialog</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </DialogContentText>
            </DialogContent>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
