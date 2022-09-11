// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { SVG } from 'path/to/types';

export interface Service {
  id?: string;
  detail: string;
  svg: string;
  title: string;
}

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
