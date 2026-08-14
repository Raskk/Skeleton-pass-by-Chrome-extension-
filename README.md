# Skeleton Rarely Passes By 👀

A simple Browser extension that has a very small chance, every second, of showing a random skeleton running across your screen.

You browse normally, forget the extension is even installed, and then suddenly:

**HOLY FUCK DID YOU SEE THAT???**

## Installation (Chrome)

1. Download this repository as a ZIP.

2. Extract the ZIP file.

3. Open Google Chrome.

4. Go to:

   `chrome://extensions`

5. Enable **Developer mode**.

6. Click **Load unpacked**.

7. Select the extracted extension folder.

8. Done.

The extension will now run automatically while you browse.

## Installation (Firefox)

1. Download this repository as a ZIP.

2. Extract the ZIP file.

3. Open Mozilla Firefox.

4. Go to:

   `about:debugging`

5. Click **This Firefox**.

6. Click **Load Temporary Add-on...**.

7. Select the `manifest.json` file inside the extracted extension folder.

8. Done.

## How It Works

Every second, the extension performs a random check.

There is a very small chance that the event triggers and the skeleton video appears over the current webpage.

The probability can be changed inside `content.js`.

For example:

```javascript
const PROBABILITY = 1 / 10000;
```

This means roughly a **1 in 10,000 chance every second**.

## Files

```text
extension/
├── manifest.json
├── content.js
├── video.webm
└── icons/
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    └── icon128.png
```

## Notes

* The extension only runs on normal `http` and `https` webpages.
* Chrome and Firefox internal pages such as `chrome://extensions` or `about:debugging` cannot be modified by extensions.
* If you modify the extension files, reload the extension from `chrome://extensions` or `about:debugging` (for Firefox) and refresh any already-open webpages.
* This extension might work on chromium based browsers (and maybe anothers) but im not sure, i wont check it neither. :3

## Disclaimer

No disclaimer hehe, just have fun.
