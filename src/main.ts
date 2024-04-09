import { googleInit, createFolderIfNotExists, findFile, getFileContent, uploadJsonToFolder } from "./google-drive-service";

const FOLDER = '.google-drive-tests';
const FILE = 'test.json';
const EXAMPLE_CONTENT = { name : 'John', age: 40 };

let access_token: string | undefined;

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('btnGetAccessToken')?.addEventListener('click', async () => {
        access_token = await googleInit((document.getElementById('txtClientId') as HTMLInputElement).value);
        if (!access_token) alert('Error getting access token');
    });

    document.getElementById('btnUploadFile')?.addEventListener('click', async () => {
        if (!access_token) {
            alert('No access token available');
            return;
        }
        const folderId = await createFolderIfNotExists(FOLDER, access_token);
        const fileId = await findFile(FILE, folderId, access_token);
        let info;
        if (fileId) {
            const fileContent = await getFileContent(fileId, access_token);
            if (fileContent) {
                alert(`Current file content: ${fileContent}`);
                info = JSON.parse(fileContent);
                info.age += 1;
            }
        }
        if (!info) {
            info = EXAMPLE_CONTENT;
        }
        await uploadJsonToFolder(info, FILE, folderId, access_token);
        alert('File uploaded');
    });

});

