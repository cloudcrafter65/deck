---
name: preview
description: Start the development server and open a deck in the browser
argument-hint: [deck-name]
---

# /preview

Start the development server and open a deck in the browser.

## Usage

```
/preview [deck-name]
```

## Arguments

- `deck-name` (optional): The deck folder name to preview (e.g., `zendesk`, `example`). If omitted, opens the root URL.

## Instructions

When the user runs this skill:

1. **Check if dev server is already running**
   - Look for an existing process on port 3000
   - If running, skip starting a new server

2. **Start the development server** (if not running)
   ```bash
   npm run dev
   ```
   - Run in background so it doesn't block
   - Wait briefly for server to start (check for "Ready" message or port availability)

3. **Construct the preview URL**
   - If `deck-name` provided: `http://localhost:3000/<deck-name>/`
   - If no argument: `http://localhost:3000/`

4. **Open in browser**
   ```bash
   open <url>  # macOS
   ```

5. **Confirm** by showing:
   - The URL being opened
   - Reminder about keyboard navigation (Arrow keys, Space, Home/End)
   - Note that the server will continue running in background

## Example

```
/preview zendesk
```

Output:
```
Dev server running on http://localhost:3000
Opening http://localhost:3000/zendesk/

Navigation: Arrow keys | Space | Home/End
Server running in background. Use Ctrl+C in terminal to stop.
```

## Notes

- The dev server supports hot reload - changes to slides will appear automatically
- URL hash navigation works: `http://localhost:3000/zendesk/#5` jumps to slide 5
- Touch swipe is supported for mobile testing
