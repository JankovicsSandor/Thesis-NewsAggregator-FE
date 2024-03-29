import { NewsAuthor } from './news-author.interface';

export interface NewsConfiguration {
  title: string;
  description: string;
  publishDate: Date;
  picture: string;
  link: string;

  author: NewsAuthor;
}
