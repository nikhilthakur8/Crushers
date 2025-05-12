import { Client, Databases, Query, Storage } from "appwrite";
import service from "../service";

const client = new Client();
client.setEndpoint(service.appwriteUrl).setProject(service.appwriteProjectId);

const databases = new Databases(client);
const storage = new Storage(client);

export async function getUserByName(name) {
    const response = await databases.listDocuments(
        service.appwriteDatabaseId,
        service.appwriteCollectionId2,
        [Query.startsWith("name", name.toUpperCase())]
    );
    await Promise.all(
        response.documents.map(async (element) => {
            if (element.ipuImage) {
                element.ipuImage = await getImage(element.ipuImage);
            }
        })
    );
    return response.documents;
}

async function getImage(fileId) {
    const response = await storage.getFileView(service.appwriteBucketId2, fileId);
    return response;
}
