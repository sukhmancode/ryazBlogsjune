type Props = {
    title: string;
    date: string;
    content: string;
  };
  
  export default function BlogEntry({ title, date, content }: Props) {
    const formattedDate = new Date(date).toDateString();
  
    return (
      <main className="h-full p-5 flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-2xl md:text-5xl">{title}</h1>
        <p><em>{formattedDate}</em></p>
        <div className="text-center"> {content}</div>
      </main>
    );
  }
  