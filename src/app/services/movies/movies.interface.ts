export interface MovieInterface {
  id: number;
  title: string;
  description: string;
  synopsis: string;
  category: number;
  mp4: string;
  thumb: string;
  relevance: number;
  age: number;
  views: number;
  viewsByCountry: any[];
}

export interface CategoryInterface {
  id: number;
  title: string;
  views: number;
  movies: any[];
}
