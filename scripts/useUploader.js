import React from "react";
import uploadToFirestore from "../scripts/uploadToFirestore";

export const useUploader = () => {
  React.useEffect(() => {
    uploadToFirestore();
  }, []);
};
