const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const exec = require('child_process').exec; // Use "child_process" to execute shell commands
const path = require('path'); // Use "path" for manipulating file paths
const fs = require('fs'); // Use "fs" for file system operations

const app = express();
app.use(cors());

app.use(express.json()); // Parse incoming JSON data

console.log(process.env.PORT);

app.post('/download', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send({ message: 'Missing required field: url' });
  }

  const fileName = url.split('/').pop(); // Extract file name from URL
  const downloadPath = path.join(__dirname, 'repos', fileName); // Construct full path

  try {
    // Check if the repository already exists
    if (fs.existsSync(downloadPath)) {
      return res.status(409).send({ message: 'Repository already exists. Choose a different one.' });
    }

    // Create directories recursively using `mkdirSync`, ensuring proper structure
    fs.mkdirSync(downloadPath, { recursive: true });

    const command = `git clone ${url} ${downloadPath}`; // Construct command

    await new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          console.log(`Downloaded repository: ${url}`);
          resolve();
        }
      });
    });

    res.status(200).send({ message: 'Download successful' });
  } catch (error) {
    res.status(500).send({ message: 'Download failed', error });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
