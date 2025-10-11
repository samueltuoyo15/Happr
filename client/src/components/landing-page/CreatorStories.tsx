const stories: { content: string; writer: string }[] = [
  {
    content:
      "I got my first three Smiles within an hour! Happr made it so easy for my fans to support me.",
    writer: "Adaeze, gigital artist."
  },
  {
    content:
      "No withdrawal button, no delays — just instant love from my fans!",
    writer: "Malik, content creator."
  }
];

const CreatorStories = () => {
  return (
    <section id="creator-stories" className="w-full flex flex-col gap-6 py-10">
      <h2 className="text-primary text-3xl font-semibold text-center">
        Creator Stories
      </h2>

      <div className="w-full flex flex-wrap gap-6 pl-4 pt-12 md:gap-x-12">
        {stories.map((story, idx) => (
          <div
            className="w-[95%] flex flex-col gap-3 bg-card text-card-foreground p-4 border border-border rounded-lg transform rotate-[10deg] md:w-[18rem]"
            key={idx}
          >
            <div className="h-8 w-8 flex items-center justify-center border border-border rounded-full">
              📌
            </div>

            <p className="text-sm"> {story.content} </p>

            <p className="text-xs italic text-muted-foreground">
              {`> ${story.writer}`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreatorStories;
