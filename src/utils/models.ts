export type URLType =
  | "facebook"
  | "linkedin"
  | "instagram"
  | "spotify"
  | "github"
  | "mail";

export interface URLProps {
  url: string;
  type: URLType;
}
