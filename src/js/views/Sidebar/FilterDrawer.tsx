import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  TextField,
  Chip,
} from "@material-ui/core";
import faker from "faker";
import { Close, Sort, CalendarToday, Done } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: "25%",
    },
    drawerPaper: {
      width: "25%",
    },
    title: {
      flexGrow: 1,
    },
    clearButton: {
      marginRight: theme.spacing(2),
    },
    filterContainer: {
      padding: theme.spacing(1, 3),
    },
    textField: {
      borderRadius: theme.shape.borderRadius,
    },
    adornment: {
      marginRight: "-4px",
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    badge: {
      width: "auto !important",
      backgroundColor: `${theme.palette.primary.light} !important`,
      fontSize: "small !important",
    },
    topicBadge: {
      width: "auto !important",
      backgroundColor: `${theme.palette.primary.light} !important`,
    },
  })
);

enum topics {
  DOMESTIC = "domestic",
  LOCAL = "local",
  WORLD = "world",
  GOVERNMENT = "government",
}
interface Country {
  name: string;
  count: number;
}

interface Topic {
  name: topics;
  count: number;
}
interface Props {
  onClose(): void;
  open: boolean;
}

export default function FilterDrawer({ open, onClose }: Props) {
  const classes = useStyles();

  const generateFakeCountries = (count: number): Array<Country> => {
    let x = 0;
    let countries = [];
    while (x < count) {
      countries.push({
        name: faker.address.country(),
        count: faker.random.number(),
      });
      x++;
    }
    return countries;
  };

  const generateFakeKeyword = (count: number): Array<Country> => {
    let x = 0;
    let keywords = [];
    while (x < count) {
      keywords.push({
        name: faker.lorem.word(),
        count: faker.random.number(),
      });
      x++;
    }
    return keywords;
  };

  const generateFakeTopics = (): Array<Country> => {
    let x = 0;
    let topicTags = [];
    for (const topic in topics) {
      topicTags.push({
        name: topics[topic as keyof typeof topics],
        count: faker.random.number(),
      });
    }
    return topicTags;
  };

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      elevation={0}
      anchor="left"
      open={open}
      ModalProps={{
        hideBackdrop: true,
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Filter Articles
          </Typography>
          <Button
            className={classes.clearButton}
            color="primary"
            startIcon={<Sort />}
          >
            Clear Filters
          </Button>
          <IconButton color="inherit" onClick={onClose}>
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.filterContainer} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="overline">Date Range</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="From"
            variant="filled"
            InputProps={{
              fullWidth: true,
              autoComplete: "off",
              className: classes.textField,
              disableUnderline: true,
              endAdornment: (
                <IconButton color="primary" className={classes.adornment}>
                  <CalendarToday />
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="To"
            variant="filled"
            InputProps={{
              fullWidth: true,
              autoComplete: "off",
              className: classes.textField,
              disableUnderline: true,
              endAdornment: (
                <IconButton color="primary" className={classes.adornment}>
                  <CalendarToday />
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Typography variant="overline">Country</Typography>
        </Grid>
        <Grid item xs={12}>
          {generateFakeCountries(15).map((country) => (
            <Button
              className={classes.chip}
              color="primary"
              startIcon={
                <Chip
                  classes={{ root: classes.badge }}
                  variant="default"
                  color="primary"
                  size="small"
                  label={country.count}
                />
              }
            >
              {country.name}
            </Button>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="overline">Topic</Typography>
        </Grid>
        <Grid item xs={12}>
          {generateFakeTopics().map((topic) => (
            // <Chip
            //   className={classes.chip}
            //   avatar={
            //     <Chip
            //       classes={{ root: classes.badge }}
            //       variant="default"
            //       color="primary"
            //       size="small"
            //       label={keyword.count}
            //     />
            //   }
            //   label={keyword.name}
            //   clickable
            //   color="primary"
            //   deleteIcon={<Done />}
            //   variant="default"
            // />
            <Button
              className={classes.chip}
              color="primary"
              variant="outlined"
              startIcon={
                <Chip
                  classes={{ root: classes.badge }}
                  variant="default"
                  color="primary"
                  size="small"
                  label={topic.count}
                />
              }
            >
              {topic.name}
            </Button>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="overline">Keyword</Typography>
        </Grid>
        <Grid item xs={12}>
          {generateFakeKeyword(8).map((keyword) => (
            // <Chip
            //   className={classes.chip}
            //   avatar={
            //     <Chip
            //       classes={{ root: classes.badge }}
            //       variant="default"
            //       color="primary"
            //       size="small"
            //       label={keyword.count}
            //     />
            //   }
            //   label={keyword.name}
            //   clickable
            //   color="primary"
            //   deleteIcon={<Done />}
            //   variant="default"
            // />
            <Button
              className={classes.chip}
              color="primary"
              startIcon={
                <Chip
                  classes={{ root: classes.badge }}
                  variant="default"
                  color="primary"
                  size="small"
                  label={keyword.count}
                />
              }
            >
              {keyword.name}
            </Button>
          ))}
        </Grid>
      </Grid>
    </Drawer>
  );
}
