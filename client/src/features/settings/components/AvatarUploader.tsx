import { useState } from "react";
import { toast } from "sonner";
import { Camera } from "lucide-react";

type AvatarUploaderProps = {
  currentUrl?: string;
  size?: "small" | "medium" | "large";
  onFileSelect?: (file: File | null) => void;
};

const sizeClasses = {
  small: "w-16 h-16",
  medium: "w-24 h-24",
  large: "w-36 h-36"
};

const AvatarUploader = ({
  currentUrl,
  size = "medium",
  onFileSelect
}: AvatarUploaderProps) => {
  const [preview, setPreview] = useState(currentUrl || "");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size cannot exceed 5MB");
      return;
    }

    setPreview(URL.createObjectURL(file));
    onFileSelect?.(file);
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <label
        htmlFor="file-uploader"
        className="relative w-fit rounded-full overflow-hidden cursor-pointer"
      >
        <img
          src={preview}
          alt="Profile preview"
          className={`${sizeClasses[size]} rounded-full object-cover`}
        />

        <div className="absolute inset-0 flex items-center justify-center transition-colors bg-transparent hover:bg-black/40">
          <Camera
            aria-label="camera icon"
            size={36}
            className="text-gray-200"
          />
        </div>
      </label>

      <input
        type="file"
        id="file-uploader"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default AvatarUploader;
