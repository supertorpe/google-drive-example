# google-drive-example
Google GSI client example that creates a folder and uploads a file to google drive.
A service (google-drive-service) is provided with the following functions:

```typescript
googleInit(client_id: string): Promise<string|undefined>
createFolderIfNotExists(folderName: string, token: string): Promise<string>
findFolder(folderName: string, token: string): Promise<string | undefined>
createFolder(folderName: string, token: string): Promise<string>
uploadJsonToFolder(jsonData: any, filename: string, folderId: string, token: string): Promise<string>
findFile(filename: string, folderId: string, token: string): Promise<string | undefined>
getFileContent(fileId: string, token: string): Promise<string | undefined>
updateFileContent(fileId: string, jsonData: any, filename: string, token: string): Promise<void>
```

# Setup
```
git clone https://github.com/supertorpe/google-drive-example.git
cd google-drive-example
pnpm install
pnpm build
```

# Run project
```
pnpm dev
```
Write your CLIENT_ID in the text box and click "Get Access Token" and "Upload File".
A folder /.google-drive-tests will be created on your gdrive and a file test.json inside the folder.