
import {path} from "../../../system/variables";

export interface Article {
  id:string;
  name: string;
  symbol: string;
  logo: string;

}


export function findArticleByTitle(id: string): Article | undefined {
  return News.find(article => article.id === id);
}




export const News: Article[] = [
  {
    id:'1',
    name: "Ethereum",
    symbol: "ETH",
    logo: path + 'etherium.webp',
     },


]
