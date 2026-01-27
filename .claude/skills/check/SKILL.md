---
name: check
description: Run build and lint to validate the project before committing
---

# /check

Run build and lint to validate the project before committing.

## Usage

```
/check
```

## Arguments

None.

## Instructions

When the user runs this skill:

1. **Run the build command**
   ```bash
   npm run build
   ```

2. **Run the lint command**
   ```bash
   npm run lint
   ```

3. **Report results**

   If both pass:
   - Confirm success with a brief summary
   - Show "Ready to commit" message

   If build fails:
   - Show the build error output
   - Identify the file(s) and line number(s) with issues
   - Offer to help fix the errors

   If lint fails:
   - Show the lint warnings/errors
   - Offer to auto-fix with `npm run lint -- --fix` if appropriate
   - List any remaining issues that need manual attention

4. **Common issues to watch for**
   - TypeScript type errors (strict mode)
   - Missing `'use client'` directive on interactive components
   - Unused imports or variables
   - Missing dependencies in useEffect/useCallback arrays

## Example Output

### Success
```
Build: Passed
Lint: Passed

Ready to commit.
```

### Failure
```
Build: Failed

Error in /app/zendesk/slides.tsx:45
  Type 'string' is not assignable to type 'number'

Would you like me to fix this?
```
