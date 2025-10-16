import { useState } from "react";
import { toast } from "sonner";
import { Camera } from "lucide-react";
import Button from "@/components/ui/Button";
// import { uploadToServer } from "../utils/uploadToServer";

type AvatarUploaderProps = {
  currentUrl?: string;
  size?: "small" | "medium" | "large";
  // onUploadSuccess?: (url: string) => void;
};

const sizeClasses = {
  small: "w-16 h-16",
  medium: "w-24 h-24",
  large: "w-36 h-36"
};

const AvatarUploader = ({
  currentUrl,
  size = "medium" // onUploadSuccess
}: AvatarUploaderProps) => {
  const [preview, setPreview] = useState(currentUrl || "");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size cannot exceed 5MB");
      return;
    }

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    /* if (!selectedFile) {
      toast.error("No file selected");
      return;
    }

    setLoading(true);
    try {
      const url = await uploadToServer(selectedFile, "pfp");
      toast.success("Profile picture uploaded!");
      onUploadSuccess?.(url);
      setSelectedFile(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error("Upload failed. Try again.");
        console.error(err);
      }
    } finally {
      setLoading(false);
    }*/
  };

  return (
    <div className="flex flex-col items-center gap-2 relative">
      <label
        htmlFor={`${loading ? "" : "file-uploader"}`}
        className={`relative bg-black/20 text-foreground z-20 rounded-full ${
          loading ? "opacity-80" : ""
        }`}
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

      {selectedFile && (
        <Button onClick={handleUpload} disabled={loading} className="my-3">
          {loading ? "Uploading..." : "Upload"}
        </Button>
      )}
    </div>
  );
};

export default AvatarUploader;
