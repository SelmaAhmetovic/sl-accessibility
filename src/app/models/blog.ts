import { Event } from "./event";
import { Launche } from "./launche";

export interface Blog {
id: number;
title?: string;
url?: string;
image_url?: string;
news_site: string;
summary?: string;
published_at: string;
updated_at: string;
featured: boolean;
launches?: (Launche | null)[] | null;
events?: (Event)[] | null;
}
