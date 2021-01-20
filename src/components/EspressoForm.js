import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { Controller, useForm } from "react-hook-form";

export default function EspressoForm({ open, handleClose, setShots }) {
  const { control, handleSubmit } = useForm();

  const gramAdornment = <InputAdornment position="end">g</InputAdornment>;

  const onSubmit = (data) => {
    data.timestamp = Date.now();
    setShots((current) => [...current, data]);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="espresso-form-dialog"
    >
      <DialogTitle id="espresso-form-title">Record a shot</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                fullWidth
                name="name"
                control={control}
                defaultValue=""
                label="Beans"
                as={TextField}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Controller
                fullWidth
                type="number"
                name="inputWeight"
                control={control}
                defaultValue="18.0"
                label="Input"
                as={TextField}
                variant="outlined"
                InputProps={{
                  inputProps: {
                    min: "1",
                    max: "30",
                  },
                  endAdornment: gramAdornment,
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Controller
                fullWidth
                type="number"
                name="outputWeight"
                control={control}
                defaultValue="36.0"
                label="Output"
                as={TextField}
                variant="outlined"
                InputProps={{
                  inputProps: {
                    min: "1",
                    max: "70",
                  },
                  endAdornment: gramAdornment,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                fullWidth
                type="number"
                name="duration"
                control={control}
                defaultValue="25"
                label="Duration"
                as={TextField}
                variant="outlined"
                InputProps={{
                  inputProps: {
                    min: "1",
                    max: "60",
                  },
                  endAdornment: (
                    <InputAdornment position="end">s</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                fullWidth
                type="number"
                name="grindSetting"
                control={control}
                defaultValue="4"
                min={0}
                max={12}
                label="Grind"
                as={TextField}
                variant="outlined"
                InputProps={{
                  inputProps: {
                    min: "0",
                    max: "12",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <SettingsIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                fullWidth
                multiline
                type="text"
                name="notes"
                control={control}
                defaultValue=""
                label="Notes"
                as={TextField}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
