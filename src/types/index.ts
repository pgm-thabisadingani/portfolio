// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { SVG } from 'path/to/types';

export interface Service {
  id?: string;
  title: string;
  detail: string;
  svg: string;
}
export interface Project {
  id?: string;
  title: string;
  detail: string;
  img: string;
  linkGit: string;
  linkLive?: string;
  date?: string;
  lang: string[];
}
export interface Tech {
  id?: string;
  title: string;
  svg: string;
}
export interface Contact {
  id?: string;
  svg: string;
  url: string;
}

export interface SidebarItem {
  title: string;
  iconOpened?: any;
  iconClosed?: any;
  subnav?: SidebarItem[];
}
