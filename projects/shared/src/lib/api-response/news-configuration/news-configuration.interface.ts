import { NewsAuthor } from './news-author.interface';

export interface NewsConfiguration {
  title: string;
  description: string;
  publishDate: Date;
  picture: string;

  author: NewsAuthor;
}
