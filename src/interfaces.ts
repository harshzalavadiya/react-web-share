export interface ShareData {
  text?: string;
  title?: string;
  url?: string;
}

export interface RWebShareProps {
  children: any;
  onClick?;
  closeText?: string;
  data: ShareData;
  sites: string[];
}

export interface SocialIconsProps {
  onClose;
  onClick?;
  closeText?: string;
  sites: string[];
  data: Required<ShareData>;
}

export interface IconProps {
  onClose;
  onClick?;
  name: string;
  data: Required<ShareData>;
}
