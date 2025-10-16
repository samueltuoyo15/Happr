import { motion } from "motion/react";

const stories: { content: string; writer: string }[] = [
  {
    content:
      "I got my first three Smiles within an hour! Happr made it so easy for my fans to support me.",
    writer: "Adaeze, digital artist."
  },
  {
    content:
      "No withdrawal button, no delays — just instant love from my fans!",
    writer: "Malik, content creator."
  },
  {
    content:
      "Since I can't use BuyMeACoffee, I have searched for an alternative but couldn't find any. And finally, Happr shows up.",
    writer: "David, chess master."
  }
];

const CreatorStories = () => {
  return (
    <section
      id="creator-stories"
      className="w-full flex flex-col gap-6 py-10 scroll-mt-20"
    >
      <h2 className="text-primary text-3xl font-semibold text-center">
        Creator Stories
      </h2>

      <div className="w-full flex flex-wrap gap-6 pl-4 pt-12 md:gap-x-12">
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{
              rotate: -50,
              opacity: 0,
              transformOrigin: "top left",
              y: -50
            }}
            whileInView={{
              rotate: 3,
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 140,
                damping: 10,
                bounce: 0.4,
                delay: idx * 0.25
              }
            }}
            whileTap={{
              rotate: 0,
              transition: { type: "spring", stiffness: 200, damping: 10 }
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex flex-col gap-3 bg-card text-card-foreground p-4 rounded-lg md:w-[19rem] origin-top-left"
          >
            <div className="h-8 w-8 flex items-center justify-center border border-border rounded-full">
              📌
            </div>

            <p className="text-sm"> {story.content} </p>

            <p className="text-xs italic text-muted-foreground">
              {`> ${story.writer}`}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CreatorStories;
