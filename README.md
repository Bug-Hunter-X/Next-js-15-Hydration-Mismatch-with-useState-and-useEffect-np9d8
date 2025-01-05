# Next.js 15 Hydration Mismatch Bug Report

This repository demonstrates a hydration mismatch bug in Next.js 15. The bug occurs when using `useState` and `useEffect` hooks to update component state based on browser window resize events.  The client-side rendering produces different results than the server-side rendering, leading to hydration errors.

## Bug Description

A hydration mismatch occurs when the initial HTML rendered on the server differs from the HTML rendered on the client. This typically happens when client-side JavaScript updates the DOM in a way that's inconsistent with the initial server-rendered HTML.  In this case, the `useState` hook in the `About` page updates the state based on the browser window size, but the server-side render does not have access to this information.  This leads to a mismatch between the server-rendered and client-rendered content causing hydration issues.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`. You should see the hydration mismatch error in your browser's console.

## Solution

The solution involves using the `useLayoutEffect` hook instead of `useEffect`.  `useLayoutEffect` runs after all DOM mutations.  This ensures that the state update happens after the initial render.  Additionally, adding a check for `typeof window !== 'undefined'` ensures that the code runs only in the browser, preventing issues on the server-side.

## Note

This bug is specific to Next.js 15's approach to hydration, and understanding the timing of hooks (useEffect vs. useLayoutEffect) is crucial to avoid such mismatches.  Always ensure that the client-side rendering is consistent with the server-side rendering to prevent hydration errors.
