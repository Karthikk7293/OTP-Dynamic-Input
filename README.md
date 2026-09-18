# Dynamic OTP input

A React, TypeScript, and Vite demo of a configurable one-time-code input interface.

[Live demo](https://otp-dynamic-input.vercel.app/)

## What it does

- Starts with three input fields; the plus/minus controls change the field count.
- Focuses the first field on load and after the count changes.
- Advances focus after numeric input and moves backward when Backspace is pressed in an empty field.
- Keeps the input array in React state.

The implementation lives directly in [src/App.tsx](src/App.tsx). It is not currently exported as a separate `OtpInput` component and does not accept `length` or `onChange` props. The demo handles code entry; generating, delivering, and verifying codes would require a backend.

## Run locally

```sh
git clone https://github.com/Karthikk7293/OTP-Dynamic-Input.git
cd OTP-Dynamic-Input
pnpm install
pnpm run dev
```

Use the local URL printed by Vite. Use a Node.js version compatible with the Vite version in [package.json](package.json).

## Checks and build

```sh
pnpm run lint
pnpm run build
```

## Implementation notes

The input-count controls currently need lower and upper bounds before reuse in an application. The example is a focused input-handling exercise, not a complete authentication flow.
