/* eslint-disable no-const-assign */
import { Client, Databases, Query, Storage } from "appwrite";
import service from "../service";

const client = new Client()
  .setEndpoint(service.appwriteUrl)
  .setProject(service.appwriteProjectId);
const databases = new Databases(client);
const storage = new Storage(client);

export const RandomUserList = async () => {
  const { documents } = await databases.listDocuments(
    service.appwriteDatabaseId,
    service.appwriteCollectionId,
    [Query.limit(958)]
  );
  const selectedUser = [];
  for (let index = 0; index <12; index++) {
    selectedUser.push(documents[Math.floor(1 + Math.random() * 958)]);
  }
  selectedUser.forEach(
    (eachUser) => (eachUser["imgLink"] = getPhotoPreview(eachUser.image))
  );
  return selectedUser;
};
export const searchUserByKeyword = async (keyword) => {
  const user = await databases.listDocuments(
    service.appwriteDatabaseId,
    service.appwriteCollectionId,
    [Query.search("fullName", keyword), Query.limit(5)]
  );
  const users = user.documents;
  users.forEach((eachUser) => {
    const fileId = eachUser.image;
    const imgLink = getPhotoPreview(fileId);
    eachUser["imgLink"] = imgLink;
  });
  return users;
};
export const getPhotoPreview = (fileId) => {
  return storage.getFilePreview(
    service.appwriteBucketId,
    fileId,
    );
};
export const getUserById = async (userId) => {
  const user = await databases.getDocument(
    service.appwriteDatabaseId,
    service.appwriteCollectionId,
    userId,
  );
  user["imgLink"] = getPhotoPreview(user.image);
  return user;
};