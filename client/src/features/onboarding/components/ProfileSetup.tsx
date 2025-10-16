import type { Dispatch, SetStateAction } from "react";
import Input from "@/components/ui/Input";
import { AvatarUploader } from "@/features/settings";

type PageProps = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  about: string;
  setAbout: Dispatch<SetStateAction<string>>;
  userLink: string;
  setUserLink: Dispatch<SetStateAction<string>>;
};

const ProfileSetup = ({
  name,
  setName,
  about,
  setAbout,
  userLink,
  setUserLink
}: PageProps) => {
  return (
    <form
      aria-label="onboarding welcome page"
      className="w-full flex flex-col gap-6 [&_label]:font-bold"
    >
      <h3 className="text-2xl text-center"> Setup your page </h3>

      <AvatarUploader
        currentUrl={`https://ui-avatars.com/api/?name=Charmingdc&background=random&bold=true&size=128.png`}
      />

      <div className="w-full flex flex-col gap-3">
        <label htmlFor="name-input"> Name </label>
        <Input
          type="text"
          id="name-input"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="w-full flex flex-col gap-3">
        <label htmlFor="about-input"> About </label>
        <textarea
          id="about-input"
          autoComplete="off"
          value={about}
          onChange={e => setAbout(e.target.value)}
          className="w-full h-[10rem] p-3 text-sm bg-input text-input-foreground border border-input rounded-lg"
        />
      </div>

      <div className="w-full flex flex-col gap-3">
        <label htmlFor="link-input"> Website or social link </label>
        <Input
          type="url"
          id="link-input"
          value={userLink}
          onChange={e => setUserLink(e.target.value)}
        />
      </div>
    </form>
  );
};

export default ProfileSetup;
