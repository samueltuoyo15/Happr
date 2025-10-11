const PricingSection = () => {
  return (
    <section id="pricing" className="w-full flex flex-col gap-6 py-10">
      <h2 className="text-primary text-3xl md:text-3xl font-semibold text-center">
        Transparent Pricing
      </h2>

      <div className="w-full flex flex-col items-center gap-4 p-6 bg-card rounded-lg">
        <h3 className="text-primary text-2xl text-center">
          Only 5% per transaction. No hidden fees.
        </h3>
      </div>
    </section>
  );
};
export default PricingSection;
