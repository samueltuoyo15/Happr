import Button from "@/components/ui/Button";
import { toast } from "sonner";
import type { Dispatch, SetStateAction } from "react";

type FormProps = {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  setIsUsernameChosen: Dispatch<SetStateAction<boolean>>;
};

const ChooseUsernameForm = ({
  username,
  setUsername,
  setIsUsernameChosen
}: FormProps) => {
  const handleSubmit = async () => {
    if (username.trim().length < 3) {
      toast.warning("Username must be greater than two characters");
      return;
    }

    setUsername("");
    setIsUsernameChosen(true);
  };

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        await handleSubmit();
      }}
      className="w-full flex flex-col items-center gap-4 py-4 mt-4"
    >
      <div className="h-14 w-full flex items-center py-3 px-5 text-sm bg-input text-input-foreground border border-input rounded-full">
        <p> https://happr.me/</p>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
          className="h-full bg-transparent text-input-foreground px-[.1rem]"
        />
      </div>

      <Button disabled={!username} className="w-full">
        Continue
      </Button>
    </form>
  );
};
export default ChooseUsernameForm;
