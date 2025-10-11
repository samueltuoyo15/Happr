const FooterSection = () => {
  return (
    <section
      id="footer"
      className="w-full flex flex-col items-center justify-center gap-2 p-4 bg-card text-card-foreground rounded-lg"
    >


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
