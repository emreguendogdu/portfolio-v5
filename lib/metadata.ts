import { Metadata } from "next";

export const siteConfig = {
  name: "Emre Gundogdu",
  titleTemplate: "%s | Emre Gundogdu",
  defaultTitle: "Emre Gundogdu | Creative Developer & Designer",
  description:
    "Portfolio of Emre Gundogdu, a creative developer and designer focusing on premium digital experiences.",
};

export function constructMetadata({
  title,
  description,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: title
      ? siteConfig.titleTemplate.replace("%s", title)
      : siteConfig.defaultTitle,
    description: description || siteConfig.description,
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    // Add other common metadata like openGraph, twitter here if needed
  };
}
