# Node.js File System API

This project is a simple Node.js-based API that allows you to create and retrieve text files within a directory structure organized by date and time. The API is built using Express and provides endpoints for file creation and retrieval.

## Features

- **File Creation:** Creates a `.txt` file containing the current timestamp as its content. The file is named according to the current date and time (e.g., `2024-08-20T14-30-45.txt`).
- **File Retrieval:** Retrieves a list of all `.txt` files in the directory corresponding to the current date.

## API Endpoints

### 1. Create a File

- **URL:** `/create-file`
- **Method:** `GET`
- **Description:** Creates a new `.txt` file in a folder named after the current date. The file is named with the current time and contains a timestamp as its content.

**Example Request:**

```sh
GET /create-file

```

** Example Response:**

``` sh
{
  "msg": "File created successfully at path: /files/2024-08-20/14-30-45.txt"
}

```
### 2. Retrieve All Files

- ** URL:** `/read-files `
- ** Method:** ` GET`
- ** Description:** Retrieves a list of all .txt files created on the current date.

``` sh
GET /read-files
```
** Example Response **
``` sh
[
  {
    "file": "14-30-45.txt",
    "content": "File created at 2024-08-20T14:30:45.123Z"
  },
  {
    "file": "15-00-12.txt",
    "content": "File created at 2024-08-20T15:00:12.456Z"
  }
]

```
