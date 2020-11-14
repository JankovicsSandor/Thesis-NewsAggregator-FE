import { SimilarArticle } from './similar-article.interface';

export interface NewsItem {
  title: string;
  description: string;
  publishDate: Date;
  picture: string;
  link: string;

  similar: SimilarArticle[];
}
