import { useState } from "react";
import { toast } from "sonner";
import { ImagePlus } from "lucide-react";

type CoverUploaderProps = {
  currentUrl?: string;
  aspect?: "wide" | "square";
  onFileSelect?: (file: File | null) => void;
};

const aspectClasses = {
  wide: "w-full h-32 sm:h-40 md:h-48",
  square: "w-48 h-48"
};

const CoverUploader = ({
  currentUrl,
  aspect = "wide",
  onFileSelect
}: CoverUploaderProps) => {
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
    <div className="flex flex-col items-center gap-2 relative w-full">
      <label
        htmlFor="cover-uploader"
        className="relative bg-black/20 text-foreground z-20 rounded-xl overflow-hidden cursor-pointer w-full"
      >
        <img
          src={preview}
          alt="Cover preview"
          className={`${aspectClasses[aspect]} object-cover w-full`}
        />

        <div className="absolute inset-0 flex items-center justify-center transition-colors bg-transparent hover:bg-black/40">
          <ImagePlus
            aria-label="add cover"
            size={42}
            className="text-gray-200"
          />
        </div>
      </label>

      <input
        type="file"
        id="cover-uploader"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default CoverUploader;
