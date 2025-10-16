import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Settings = () => {
  const [thankYouMsg, setThankYouMsg] = useState<string>(
    "Thanks for the smiles,  I really appreciate."
  );
  const [supportBtnMsg, setSupportBtnMsg] = useState<string>("Support");
  const [smilePrice, setSmilePrice] = useState<number>(100);

  return (
    <section
      aria-labelledby="settings"
      className="relative w-full flex flex-col gap-4"
    >
      <h2 className="text-2xl"> Settings </h2>

      <div className="w-full flex flex-col gap-1 p-4 border rounded-md">
        <h3 className="text-lg"> Thank You Message </h3>
        <p className="text-xs text-muted-foreground">
          Edit the thank you message that shows up after a supporter tips you.
        </p>

        <Input
          type="text"
          value={thankYouMsg}
          onChange={e => setThankYouMsg(e.target.value)}
          className="mt-3 mb-1"
        />
        <Button className="w-fit"> Update Message </Button>
      </div>

      <div className="w-full flex flex-col gap-1 p-4 border rounded-md">
        <h3 className="text-lg"> Button Wording </h3>
        <p className="text-xs text-muted-foreground">
          Edit the message on your support page.
        </p>

        <Input
          type="text"
          value={supportBtnMsg}
          onChange={e => setSupportBtnMsg(e.target.value)}
          className="mt-3 mb-1"
        />
        <Button className="w-fit"> Update Message </Button>
      </div>

      <div className="w-full flex flex-col gap-1 p-4 border rounded-md">
        <h3 className="text-lg"> Smile Price </h3>
        <p className="text-xs text-muted-foreground">
          Edit the price per smiles.
        </p>

        <Input
          type="number"
          value={smilePrice}
          onChange={e => setSmilePrice(Number(e.target.value))}
          className="mt-3 mb-1"
        />
        <Button className="w-fit"> Update Price </Button>
      </div>
    </section>
  );
};

export default Settings;
