# Dev Stack (TypeScript)

A TypeScript + DaisyUI rebuild of the Dev Stack project — explore frontend, backend, database, and tooling technologies and build your own ideal development stack.

# Technologies Used

- React.js with TypeScript (Vite)
- Tailwind CSS + DaisyUI v5
- TypeScript (ES6+)
- React-Toastify
- JSON (local data)
- Deployed on Vercel

# Features

1. Browse 15+ technologies loaded from a JSON file, with category, difficulty, rating, and badge — typed end-to-end with TypeScript interfaces.
2. Add or remove technologies from a live "Your Stack" sidebar with duplicate prevention and toast notifications.
3. Fully responsive DaisyUI UI with a sticky navbar, two-tone gradient hero, and gradient brand theme.

# React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like code inside JavaScript/TypeScript. React uses it because it makes components easier to read and write compared to using `React.createElement` manually.

**2. What is the difference between props and state?**
Props are data passed into a component from its parent and cannot be changed by the child. State is data managed inside a component that can change over time using `useState`.

**3. What does the useState hook do, and where did you use it in this project?**
`useState` lets a component remember and update values. I used it for `technologies`, `stack`, and `loading` in `App.tsx` — all typed, 

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects after render. I used it to fetch `/technologies.json` when the app first loads, then update state with the result.

**5. Why does every item in a .map() list need a unique key prop?**
React uses keys to identify which items changed, were added, or removed. Without unique keys, React may re-render the wrong elements and cause bugs.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI based on a condition. I used it in `YourStack.tsx` to show an empty message when `stack.length === 0`, and the list of items otherwise.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data goes down via props (e.g., `tech` passed to `TechCard`). A child sends data back by calling a function prop provided by the parent (e.g., `onAdd(tech)` from `TechCard` to `App`).

## TypeScript Bonus

Every technology object is typed with a `Technology` interface using union types for `Category` and `Difficulty`. Component props are typed with local interfaces , so any typo or shape mismatch is caught at compile time.