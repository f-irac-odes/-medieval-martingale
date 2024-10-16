# Martingale 🎩

> 🧙‍♂️ _"Why juggle state manually, when you can let **Martingale** do it for you?"_  
> – A wise developer somewhere in the multiverse

🪄 Welcome to **Martingale** – the enchanting state management library that brings harmony to your application's state while making you feel like a wizard of code!

## 💡 Features

- 🎮 **Simple State Management**: Easily manage state without the fuss. No more headache-inducing complexity! 🤯
- 🕰️ **Undo/Redo Magic**: Travel back and forth through your state history like a time traveler! ⏳
- 📜 **State History**: Keep track of your past states as if you had a magical spell book! 📖
- 🔍 **Getters Galore**: Access your state like a pro, with built-in methods for fetching the current value.
- 🍰 **Flexible Options**: Customize your store's options to fit your needs like a well-tailored robe.

---

## 📓 Installation

Getting started with Martingale is as simple as casting a spell:

```bash
npm install @medieval/martingale --force
```

💡 **Pro Tip:** 🧙‍♂️ Don't forget to run `npm install` – your magic won't work without it!

---

## 🚀 Getting Started

Here’s how you can start managing your state like a true sorcerer:

```typescript
import { makestate, Store } from '@medieval/martingale';

// Create a magical state
const initialState = { count: 0 };
const store: Store<typeof initialState> = makestate(initialState);

// Subscribe to state changes
const unsubscribe = store.subscribe((state) => {
  console.log('🔮 Current State:', state);
});

// Update the state
store.set({ count: 1 }); // 💥 State updated!

// Perform an undo
store.undo(); // ⏪ Back in time!

// Get the current state
const currentState = store.get();
console.log('📜 Retrieved State:', currentState);
```

> 📜 **Disclaimer**: No states were harmed during this state management!

## 🔍 Using the Store

With **Martingale**, you can manage your state like a seasoned wizard. Here’s how:

### Subscribe to State Changes

Subscribe to changes and perform your magic:

```typescript
const unsubscribe = store.subscribe((state) => {
  console.log('🌟 State Updated:', state);
});

// Unsubscribe when you no longer need to watch the state
unsubscribe();
```

### Update the State

Change your state and watch the magic happen:

```typescript
store.set({ count: 2 }); // ✨ Update the state!
```

### Undo and Redo

Time travel with undo and redo capabilities:

```typescript
store.undo(); // ⏪ Go back one state
store.redo(); // ⏩ Go forward one state
```

### Get State History

Retrieve the history of your state changes:

```typescript
const history = store.getStateHistory();
console.log('📜 State History:', history);
```

---

## 🤝 Contributing

We’d love your help to make **Martingale** even more **awesome**! Submit issues, PRs, or just send us a virtual high-five! 🙌

> 🕸️ _"With great state management, comes great responsibility."_ – Not Spider-Man, but very close

Feel free to contribute at the [GitHub repository](https://github.com/yourusername/martingale).

## 📜 License

This project is licensed under the **MIT License**.

---

🎩 Now go ahead and manage your state like a master wizard with **Martingale**! **Enjoy the magic!**
