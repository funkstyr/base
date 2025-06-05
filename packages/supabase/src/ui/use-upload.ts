import { useState } from "react";

import type { SupabaseClient } from "@base/supabase/client/web";
import { upload } from "@base/supabase/storage";

interface UseUploadProps {
  client: SupabaseClient;
}

interface UploadParams {
  file: File;
  path: string[];
  bucket: string;
}

interface UploadResult {
  url: string;
  path: string[];
}

export function useUpload(props: UseUploadProps) {
  const { client } = props;
  const [isLoading, setLoading] = useState<boolean>(false);

  const uploadFile = async (params: UploadParams): Promise<UploadResult> => {
    const { file, path, bucket } = params;
    setLoading(true);

    try {
      const url = await upload(client, {
        path,
        file,
        bucket,
      });

      return {
        url,
        path,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    uploadFile,
    isLoading,
  };
}
