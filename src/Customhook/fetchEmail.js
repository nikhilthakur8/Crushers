/* eslint-disable no-undef */
import axios from "axios";
import { Jimp } from "jimp";
import jsQR from "jsqr";

import { updateUserEmail } from "../appwrite/config";

export const fetchEmail = async (mobileNumber, docId) => {
    try {
        const parser = new DOMParser();
        const { data } = await axios.post(
            "/college/payment_history/show_history",
            { mobile: mobileNumber },
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        const doc = parser.parseFromString(data, "text/html");
        const receiptElement = doc.querySelector(
            "tr:last-of-type td:first-child"
        );
        if (!receiptElement) throw new Error("No Email Found");

        const receiptNo = receiptElement.innerText;
        const receiptLink = new URL(
            doc.querySelector("tr:last-of-type td:last-of-type a").href
        ).pathname;

        await axios.get(receiptLink);
        const qrLink = `/college/sitedata/qrcode/${receiptNo}.png`;

        // Fetch QR code image data
        const { data: imageData } = await axios.get(qrLink, {
            responseType: "arraybuffer",
        });
        const image = await Jimp.read(imageData);

        return await decodeQRCode(image, docId);
    } catch (error) {
        throw new Error(error.message);
    }
};

const decodeQRCode = (image, docId) => {
    return new Promise((resolve, reject) => {
        const { data, width, height } = image.bitmap;
        // Convert Jimp's Buffer data to a Uint8ClampedArray
        const clampedData = new Uint8ClampedArray(
            data.buffer,
            data.byteOffset,
            data.byteLength
        );

        // Decode the QR code using jsQR
        const code = jsQR(clampedData, width, height, {
            inversionAttempts: "dontInvert", // change to "attemptBoth" if needed
        });

        if (!code) {
            return reject(new Error("Error in parsing QR code"));
        }

        // Adjust the extraction logic as needed.
        const email = code.data.split("\n")[7];
        updateUserEmail(email, docId);
        resolve(email);
    });
};
