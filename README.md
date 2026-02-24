# Universal Redirector

A Chrome extension that opens the current page through a configurable redirect service.

## How it works

Click the extension icon in the toolbar. The extension encodes the current tab's URL and opens it via your redirect endpoint in a new tab.

The URL is encoded as: `base64(encodeURIComponent(url))`, then appended to the redirect base URL.

## Installation

1. Open `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked** and select this directory

## Configuration

Right-click the extension icon → **Options** (or go to `chrome://extensions` → Universal Redirector → Details → Extension options).

Set your redirect endpoint, e.g.:

```
https://your-site.com/redirect?hash=
```

The current tab's encoded URL will be appended to this base string.
