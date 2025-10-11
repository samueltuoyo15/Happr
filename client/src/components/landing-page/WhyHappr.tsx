type Benefits = {
  emoji: string;
  title: string;
  desc: string;
};

const benefits: Benefits[] = [
  {
    emoji: "💸",
    title: "Instant Payouts",
    desc: "Funds go straight to your bank after every tip."
  },
  {
    emoji: "🇳🇬",
    title: "Built for Nigerians",
    desc: "Paystack-powered, works with all local banks."
  },
  {
    emoji: "😊",
    title: "Fun and Transparent",
    desc: "Smiles instead of boring donations. We take just 5% per transaction, clearly shown."
  },
  {
    emoji: "😌",
    title: "Zero Setup Stress",
    desc: "No Paystack key, no coding — just create your page and share."
  }
];

const WhyHappr = () => {
  return (
    <section className="w-full flex flex-col gap-4">
      <h2 className="text-primary text-3xl text-center">
        Why Creators Love Happr
      </h2>

      <div className="w-full flex flex-col items-center gap-3 bg-card text-card-foreground p-4 rounded-lg md:flex-row md:flex-wrap md:justify-center">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 p-4 rounded-lg md:w-[48%]"
          >
            <div className="w-16 h-16 bg-background flex items-center justify-center rounded-lg">
              <h3> {benefit.emoji} </h3>
            </div>

            <h3 className="text-xl"> {benefit.title} </h3>

            <p> {benefit.desc} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyHappr;
