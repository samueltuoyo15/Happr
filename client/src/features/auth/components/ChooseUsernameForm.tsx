import Button from "@/components/ui/Button";
import type { Dispatch, SetStateAction } from "react";

type FormProps = {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
};

const ChooseUsernameForm = ({ username, setUsername }: FormProps) => {
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="w-full flex flex-col items-center gap-4 py-4 mt-4"
    >
      <div className="w-full flex items-center py-3 px-5 text-sm bg-input text-input-foreground border border-input rounded-full">
        <p> https://happr.me/</p>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
          className="h-full bg-transparent text-muted-foreground px-[.1rem]"
        />
      </div>

      <Button className="w-full"> Continue </Button>
    </form>
  );
};
export default ChooseUsernameForm;
