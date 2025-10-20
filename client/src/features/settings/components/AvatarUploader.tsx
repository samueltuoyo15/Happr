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
    <div className="flex flex-col items-center gap-2 relative">
      <label
        htmlFor="file-uploader"
        className="relative bg-black/20 text-foreground z-20 rounded-full cursor-pointer"
      >
        <img
          src={preview}
          alt="Profile preview"
          className={`${sizeClasses[size]} rounded-full object-cover`}
        />
        <Camera
          aria-label="camera icon"
          size={40}
          className="absolute top-[35%] left-[37%] text-gray-300 z-50"
        />
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
