import {
  PaletteColor,
  PaletteColorOptions,
} from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface TagPaletteColor {
    domestic: string;
    local: string;
    world: string;
    government: string;
  }

  interface TagPaletteColorOptions {
    domestic?: string;
    local?: string;
    world?: string;
    government?: string;
  }

  interface Palette {
    topics: TagPaletteColor;
  }

  interface PaletteOptions {
    topics?: TagPaletteColorOptions;
  }
}
