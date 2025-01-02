# Portfolio 2025

Welcome to my personal portfolio website! This project showcases my skills, projects, and contact information in an interactive and visually appealing way.

## Features

- **Interactive Project Carousel**: View my projects in a 3D-style carousel with smooth animations
- **Dynamic Layout**: Cards automatically adjust to fit the content of the largest description
- **Dark/Light Theme**: Toggle between light and dark modes for comfortable viewing
- **Responsive Design**: Optimized for all screen sizes, from mobile to desktop
- **Project Details**: Each project includes a title, logo, and detailed description
- **Contact Information**: Easy access to my email address

## Technologies Used

- **React**: Frontend JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **CSS**: Custom styles with CSS variables for easy theming
- **JavaScript**: Interactive functionality and dynamic content
- **HTML**: Semantic markup for accessibility

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-2025.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-2025
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Update the `homepage` field in package.json with your GitHub Pages URL
3. Build and deploy:
   ```bash
   npm run deploy
   ```

## Project Structure

```
portfolio-2025/
├── public/
│   └── logos/              # Project logos
├── src/
│   ├── App.css             # Main styles
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles
│   ├── main.jsx            # Entry point
│   └── projects.json       # Project data
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

## Customization

To add or modify projects, edit the `src/projects.json` file:

```json
{
  "projects": [
    {
      "title": "Project Title",
      "url": "https://project-url.com",
      "logo": "/portfolio-2025/logos/project-c.png",
      "summary": "Brief description of the project"
    }
  ]
}
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Alec Grater-Cafiero  
Email: [alecgrater@gmail.com](mailto:alecgrater@gmail.com)

---

**Note**: This project is optimized for modern web browsers and requires JavaScript to be enabled.
