// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { SVG } from 'path/to/types';

export type SVG = {
  id: number;
  name: string;
  color: string;
};

export interface Avatar {
  id: number;
  name: string;
  size: number;
}

export interface SidebarItem {
  title: string;
  iconOpened?: any;
  iconClosed?: any;
  subnav?: SidebarItem[];
}
