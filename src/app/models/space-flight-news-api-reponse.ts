import { Article } from "./article";
import { Blog } from "./blog";
import { Report } from "./report";

export interface SpaceFlightNewsApiResponseBase<T> {
  count: number;
  next: string;
  previous?: null;
  results?: (T)[] | null;
}

export interface SpaceFlightNewsApiResponseArticlesGet extends SpaceFlightNewsApiResponseBase<Article> {}

export interface SpaceFlightNewsApiResponseBlogGet extends SpaceFlightNewsApiResponseBase<Blog> {}

export interface SpaceFlightNewsApiResponseReportGet extends SpaceFlightNewsApiResponseBase<Report> {}


