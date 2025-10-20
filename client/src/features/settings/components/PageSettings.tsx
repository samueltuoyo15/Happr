import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import CoverUploader from "./CoverUploader";
import AvatarUploader from "./AvatarUploader";

const PageSettings = () => {
  const [displayName, setDisplayName] = useState<string>("Charmingdc");
  const [about, setAbout] = useState<string>("");
  const [userLink, setUserLink] = useState<string>(
    "https://adebayomuis.is-a.dev"
  );

  return (
    <div aria-labelledby="Page Settings" className="w-full">
      <h2 className="text-2xl"> Page Settings </h2>

      <form
        aria-label="account settings form"
        onSubmit={e => e.preventDefault()}
        className="w-full flex flex-col gap-10 p-4 border rounded-md mt-4"
      >
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-xl"> Avatar </h3>

          <AvatarUploader
            currentUrl={`https://ui-avatars.com/api/?name=Charmingdc&background=random&bold=true&size=128.png`}
            size="large"
            onFileSelect={file => console.log(file)}
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <h3 className="text-xl"> Cover Photo </h3>

          <CoverUploader
            currentUrl={`https://ui-avatars.com/api/?name=Charmingdc&background=random&bold=true&size=128.png`}
            onFileSelect={file => console.log(file)}
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <label htmlFor="diaplay-name-input">
            <h3 className="text-xl"> Display Name </h3>
          </label>

          <Input
            type="text"
            id="diaplay-name-input"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <label htmlFor="about-input">
            <h3 className="text-xl"> About </h3>
          </label>

          <textarea
            id="about-input"
            autoComplete="off"
            value={about}
            onChange={e => setAbout(e.target.value)}
            className="w-full h-[10rem] p-3 text-sm bg-input text-input-foreground border border-input rounded-lg"
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <label htmlFor="user-link-input">
            <h3 className="text-xl"> Websie or Social Link </h3>
          </label>

          <Input
            type="url"
            id="user-link-input"
            value={userLink}
            onChange={e => setUserLink(e.target.value)}
          />
        </div>

        <Button> Save Changes </Button>
      </form>
    </div>
  );
};
export default PageSettings;
