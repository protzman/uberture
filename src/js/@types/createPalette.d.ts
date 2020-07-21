import {
  PaletteColor,
  PaletteColorOptions,
} from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface TagPaletteColor {
    government: string;
    advertising: string;
    world: string;
    religion: string;
    energy: string;
    local: string;
    domestic: string;
    weather: string;
    middle: string;
    social: string;
  }

  interface TagPaletteColorOptions {
    government?: string;
    advertising?: string;
    world?: string;
    religion?: string;
    energy?: string;
    local?: string;
    domestic?: string;
    weather?: string;
    middle?: string;
    social?: string;
  }

  interface Palette {
    topics: TagPaletteColor;
  }

  interface PaletteOptions {
    topics?: TagPaletteColorOptions;
  }
}
