import { blogData } from "./blogData";

export function getBlogByDate(date:String) {
    return blogData.find((post) => post.date === date) || null;

}