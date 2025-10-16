const NoSupporters = () => {
  return (
    <div
      aria-labelledby="No Supporters yet"
      className="w-full flex flex-col items-center gap-2 p-4 bg-accent text-accent-foreground text-center rounded-md"
    >
      <h3 className="text-2xl">No supporters yet</h3>
      <p>Share your page with your fans to start receiving smiles.</p>
      <p>😊</p>
    </div>
  );
};

export default NoSupporters;
