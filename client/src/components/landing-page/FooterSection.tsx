const FooterSection = () => {
  return (
    <section
      id="footer"
      className="w-full flex flex-col items-center justify-center gap-2 p-4 bg-card text-card-foreground rounded-lg"
    >
      <div className="self-start h-auto flex items-center justify-evenly gap-2 mb-4">
        <img
          src="/icons/happr-icon.jpg"
          width="32"
          height="32"
          className="rounded-full"
          alt="Happr Logo"
        />
        <h1 className="text-2xl"> Happr </h1>
      </div>

      <p className="text-sm text-center">
        © <span>{new Date().getFullYear()}</span> Happr.
      </p>

      <p className="text-xs text-muted-foreground text-center">
        Built for creators who deserve to smile.
      </p>
    </section>
  );
};
export default FooterSection;
