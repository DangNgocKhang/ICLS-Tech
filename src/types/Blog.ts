export default interface BlogPost {
  id: string;
  date: string;
  tag: string;
  title: string;
  imageUrl: string;
  category?:string
}
