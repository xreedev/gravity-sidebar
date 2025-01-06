# Sidebar Component

The `Gravity Sidebar` component is a customizable sidebar navigation menu for React applications. It includes expandable and collapsible states, supports dynamic icons, and is fully configurable through props.

---

## Usage

Import the `Sidebar` component into your React application and configure it by passing the necessary props such as `options`, `footerOptions`, and `sidebarButton`.

```jsx
import React from "react";
import {Sidebar} from "gravity_sidebar"

const options = [
  { name: "Home", icon: "fa fa-home" },
  { name: "Events", icon: "fa fa-envelope-open" },
  { name: "Communities", icon: "fa fa-users" },
];

const footerOptions = [
  { icon: "fa fa-user" },
  { icon: "fa fa-cog" },
  { icon: "fa fa-sign-out" },
];

export default function App() {
  return (
    <Sidebar
      options={options}
      footerOptions={footerOptions}
      sidebarButton="fa fa-bars"
    />
  );
}
```

---

## Props

### `options`

- **Type**: `Array<{ name: string, icon: string }>`
- **Description**: Defines the list of items to display in the sidebar menu.
- **Example**:

```jsx
const options = [
  { name: "Home", icon: "fa fa-home" },
  { name: "Events", icon: "fa fa-envelope-open" },
  { name: "Communities", icon: "fa fa-users" },
];
```

### `footerOptions`

- **Type**: `Array<{ icon: string }>`
- **Description**: Defines the list of icons to display in the footer section of the sidebar. Only the first three icons are displayed.
- **Example**:

```jsx
const footerOptions = [
  { icon: "fa fa-user" },
  { icon: "fa fa-cog" },
  { icon: "fa fa-sign-out" },
];
```

### `sidebarButton`

- **Type**: `string`
- **Description**: Specifies the icon class for the sidebar toggle button.
- **Example**:

```jsx
const sidebarButton = "fa fa-bars";
```

---

## CSS Classes

Ensure the following CSS classes are defined in your `style.css` file to style the component properly:

### Container Classes

- **`sidebar-container-collapsed`**: Styles for the collapsed sidebar state.
- **`sidebar-container-expanded`**: Styles for the expanded sidebar state.

### Header Classes

- **`sidebar-header`**: Styles for the header section.
- **`header-icon`**: Styles for the toggle button.

### List Classes

- **`sidebar-content`**: Styles for the sidebar list container.
- **`sidebar-item`**: Styles for each item in the list.
- **`active-sidebar-item`**: Styles for the active item in the list.
- **`inactive-sidebar-item`**: Styles for inactive items.
- **`sidebar-list-icon`**: Styles for the icons in the list items.

### Footer Classes

- **`sidebar-footer`**: Styles for the footer container.
- **`footer-icon`**: Styles for the icons in the footer.

### No Sidebar Classes (for Collapsed View)

- **`no-sidebar`**: Styles for elements visible only in the expanded state.

---

## Example

Below is a complete example of how to integrate the `Sidebar` component into an application:

### Code

```jsx
import React from "react";
import { Sidebar } from "./Sidebar";
import "./style.css";

const options = [
  { name: "Home", icon: "fa fa-home" },
  { name: "Events", icon: "fa fa-envelope-open" },
  { name: "Communities", icon: "fa fa-users" },
];

const footerOptions = [
  { icon: "fa fa-user" },
  { icon: "fa fa-cog" },
  { icon: "fa fa-sign-out" },
];

function App() {
  return (
    <div>
      <Sidebar
        options={options}
        footerOptions={footerOptions}
        sidebarButton="fa fa-bars"
      />
    </div>
  );
}

export default App;
```

### Result

- The sidebar will display the `options` list as menu items.
- The footer will show the first three icons from `footerOptions`.
- Clicking the toggle button (defined by `sidebarButton`) will expand or collapse the sidebar.

