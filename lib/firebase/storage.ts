import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "./clientApp";

export async function uploadLocationImage(
  location: string,
  image: File
): Promise<string> {
  try {
    if (!location) {
      throw new Error("No location is provided valid");
    }
    if (!image || !image.name) {
      throw new Error("A valid image has not been provided.");
    }

    const publicImageUrl = await uploadImage(location, image);

    return publicImageUrl;
  } catch (error) {
    throw error;
  }
}

export async function updateLocationImage() {}

async function uploadImage(locationId: string, image: File): Promise<string> {
  const filePath = `images/${locationId}/${image.name}`;
  const newImageRef = ref(storage, filePath);
  await uploadBytesResumable(newImageRef, image);

  return await getDownloadURL(newImageRef);
}
