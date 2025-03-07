import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export type ButtonPropTypes = {
  type?: "linkPrimary" | "buttonPrimary" | "linkOutline";
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  url?: string;
  style?: string;
  shine?: boolean;
  shadow?: boolean;
  hover?: boolean;
  link?: boolean;
  color?: boolean;
  hoverColor?: string;
};

export type LogoPropTypes = {
  logo?: string;
  icon?: React.ReactNode;
  stye?: string;
  link?: string;
};

export type NavProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export interface NavItem {
  name: string;
  new?: boolean;
  link: string;
  external?: boolean;
}

export type ThemeToggleProps = {
  onClick?: () => void;
  theme?: string;
};

export interface activity {
  name: string;
  icon: IconType;
}

export interface techStack {
  text: string;
  icon: IconType;
}

export type ToolsInfiniteScrollProps = {
  item: techStack[];
  reverse?: boolean;
};

export type tags = {
  id: number;
  text: string;
  visible?: boolean;
};

export type technologies = {
  id: number;
  text: string;
  Icon: IconType;
};

export type project = {
  name: string;
  description?: string;
  liveLink?: string;
  githubLink?: string;
  thumbnail?: string;
  tags?: number[] | tags[];
  technologies?: {
    frontend?: number[] | technologies[];
    backend?: number[] | technologies[];
    deployment?: number[] | technologies[];
  };
  keyFeatures?: string[];
  technicalChallenges?: {
    challenge: string;
    solution: string;
  }[];
  architecture?: {
    description?: string;
    diagram?: string;
  };
  codeQuality?: {
    standards?: string[];
    codeReviews?: string;
  };
  deployment?: {
    platform?: string;
    ciCd?: string;
  };
  lessonsLearned?: string[];
};

export type WorksInfiniteScrollProps = {
  item: project[];
  reverse?: boolean;
};

export type TitlePropTypes = {
  text: string;
  pulse?: boolean;
};

export interface categoriesCountInterface {
  [tagId: number]: {
    count: number;
    id: number;
  };
}
