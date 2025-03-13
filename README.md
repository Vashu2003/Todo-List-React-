# Modern Todo List Application

A beautiful and responsive Todo List application built with React and Tailwind CSS, featuring a modern glass-morphism design and a serene forest background.

![Todo List App Screenshot]

## Features

- **Modern Glass-morphism Design**: Elegant UI with backdrop blur and transparency effects
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop devices
- **Dark Theme**: Beautiful dark theme with teal/turquoise accents
- **Task Management**:
  - Add new tasks
  - Mark tasks as complete/incomplete
  - Delete tasks
  - Filter tasks (All/Active/Completed)
- **Visual Feedback**:
  - Smooth transitions and hover effects
  - Clear visual hierarchy
  - Intuitive task status indicators

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Next-generation frontend build tool
- **PostCSS**: CSS transformation tool

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd todo-list
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
todo-list/
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── background.jpeg
│   ├── components/
│   │   ├── TodoInput.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoFilter.jsx
│   │   └── TodoList.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── postcss.config.cjs
├── tailwind.config.js
└── README.md
```

## Features in Detail

### Task Management
- **Add Tasks**: Enter task description and press Enter or click Add button
- **Complete Tasks**: Click the checkbox to toggle task completion
- **Delete Tasks**: Remove tasks with the delete button
- **Filter Tasks**: Use the dropdown to filter All, Active, or Completed tasks

### UI/UX Features
- **Glass-morphism Effects**: Modern transparent UI elements with backdrop blur
- **Responsive Design**: Adapts to different screen sizes
- **Animated Transitions**: Smooth state changes and hover effects
- **Custom Styling**: 
  - Tailored dark theme
  - Custom checkbox design
  - Styled dropdown with custom arrow
  - Consistent spacing and typography

## Customization

### Colors
The application uses a custom color palette defined in `tailwind.config.js`:
- Primary: Teal/Turquoise (#00BFA5)
- Secondary: Darker Teal (#008C79)
- Dark theme shades
- Light text colors

### Background
The application features a forest background image with a dark overlay and blur effect for better readability.

## Contributing

Feel free to submit issues and enhancement requests!

## License

[Your chosen license]

## Acknowledgments

- Background image source: [Add source if applicable]
- Design inspiration: Modern glass-morphism UI trend
