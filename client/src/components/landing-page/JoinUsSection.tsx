import CtaButton from "./CtaButton";

const JoinUsSection = () => {
  return (
    <section
      id="join-us"
      className="w-full flex flex-col items-center gap-4 py-8"
    >
      <h2 className="text-primary text-3xl font-semibold text-center">
        Join the Happr Community
      </h2>

      <div className="w-full flex flex-col items-center justify-center gap-6 bg-card p-4 rounded-lg">
        <p className="text-center text-card-foreground">
          Musicians, artists, writers, gamers - anyone can receive Smiles from
          fans. Start your Happr page today and make your passion pay - one
          smile at a time.
        </p>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-4 px-3 py-2 text-sm text-muted-foreground  border border-border mt-4 rounded-lg md:rounded-full">
          <div className="flex items-center w-full sm:w-auto flex-grow overflow-hidden">
            <p className="whitespace-nowrap text-xs sm:text-sm text-muted-foreground">
              https://happr.me/
            </p>
            <input
              type="text"
              placeholder="username"
              className="flex-grow bg-transparent rounded-full px-2 py-1 focus:outline-none text-xs sm:text-sm"
            />
          </div>

          <CtaButton className="text-sm py-2 px-4 w-full whitespace-nowrap rounded-lg sm:w-auto md:rounded-full">
            Claim
          </CtaButton>
        </div>
      </div>
    </section>
  );
};
export default JoinUsSection;
