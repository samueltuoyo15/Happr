import { axios } from "@/lib";

type UploadType = "pfp" | "crp";

const uploadToServer = async (
  file: File,
  type: UploadType
): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);

    const response = await axios.post<{ url: string }>(
      "/api/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );

    return response.url;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Upload failed");
    }
  }
};

export default uploadToServer;
