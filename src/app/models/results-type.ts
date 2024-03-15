export interface ResultsType {
  count: number;
  next:string;
  previous: string;
  results: [];
}

export interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches?: (LaunchesEntity | null)[] | null;
  events?: (null)[] | null;
}

export interface LaunchesEntity {
  launch_id: string;
  provider: string;
}

export interface SpaceFlightNewsApiResponseBase<T> {
  count: number;
  next: string;
  previous?: null;
  results?: (T)[] | null;
}

export interface SpaceFlightNewsApiResponseArticlesGet extends SpaceFlightNewsApiResponseBase<Article> {

}




