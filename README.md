## Travel List

A simple React app to plan and track items for your trips. Add items with a quantity, mark them as packed, sort the list, clear all items, and see progress stats.

---

### Features

- **Add items**: Enter a description and choose a quantity (1–20).
- **Toggle packed**: Mark items as packed/unpacked via checkbox.
- **Delete items**: Remove any item individually.
- **Sort options**: By input order, description, or packed status.
- **Clear all**: Delete all items with a confirmation prompt.
- **Live stats**: Total items, packed items, and percentage packed.

---

### Tech Stack

- **React 19** (functional components, hooks)
- **Create React App (CRA)** for build/dev tooling
- **CSS** for styling
- **Testing Library** dependencies included by CRA template

---

### Project Structure

packing-list-app/
├── public/ # Static assets
├── src/ # Source code
│ ├── components/ # React components
│ └── App.js # Main app component
│ └── index.js # Index component
│ └── index.css # CSS Style component
├── README.md # Project documentation
├── package.json # Project dependencies

```markdown
## Travel List

A simple React app to plan and track items for your trips. Add items with a quantity, mark them as packed, sort the list, clear all items, and see progress stats.

---

### Features

- **Add items**: Enter a description and choose a quantity (1–20).
- **Toggle packed**: Mark items as packed/unpacked via checkbox.
- **Delete items**: Remove any item individually.
- **Sort options**: By input order, description, or packed status.
- **Clear all**: Delete all items with a confirmation prompt.
- **Live stats**: Total items, packed items, and percentage packed.

---

### Tech Stack

- **React 19** (functional components, hooks)
- **Create React App (CRA)** for build/dev tooling
- **CSS** for styling
- **Testing Library** dependencies included by CRA template

---

### Project Structure
```

src/
components/
App.js // App state + orchestration
Form.js // Add item form
PackingList.js // List + sorting + clear action
Item.js // Single item (toggle/delete)
Logo.js // App title
Stats.js // Footer stats
index.css // Global styles
index.js // App bootstrap

````

---

### How It Works

- **App.js**
  - Manages `items` state: `[{ id, description, quantity, packed }]`
  - Handlers:
    - `handleAddItems(item)`: add a new item
    - `handleDeleteItem(id)`: remove by id
    - `handleToggleItem(id)`: toggle `packed`
    - `handleClearList()`: confirm and clear all items
  - Renders `Logo`, `Form`, `PackingList`, `Stats`

- **Form.js**
  - Local state: `description`, `quantity`
  - On submit: creates `{ id: Date.now(), description, quantity, packed: false }`
  - Resets inputs after adding

- **PackingList.js**
  - Local state: `sortBy` (`input` | `description` | `packed`)
  - Sorts items accordingly
  - Renders items and a clear-all button

- **Item.js**
  - Checkbox toggles `packed`
  - Delete button removes the item
  - Strikethrough styling when `packed === true`

- **Stats.js**
  - If empty, shows a friendly prompt to add items
  - Shows counts and percent packed
  - Special message when 100% packed

---

### Scripts

From the project root:

```bash
npm install
npm start
````

- `npm start` — run the app in development at `http://localhost:3000`
- `npm run build` — build for production
- `npm test` — run tests
- `npm run eject` — eject CRA config (irreversible)

---

### Requirements

- **Node.js 18+** recommended
- **npm 8+**

---

### Styling

- Google Fonts: Monoton, Quicksand
- Responsive grid for list items
- Accessible checkbox controls
- High-contrast, clear buttons and controls

---

### Notes

- Items are stored in-memory only; a page refresh clears the list.
- Item ids are generated via `Date.now()` for this demo.

---

### Possible Improvements

- Persist items to `localStorage`
- Keyboard accessibility improvements
- Edit existing items
- Grouping, filtering, and search
- Component/unit tests

---

### License

MIT

````
Happy packing! 🎒 ```
````
