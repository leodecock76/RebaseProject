# The Rebase Project Website

A modern, responsive website for The Rebase Project, a NYC-based housing directory focused on helping individuals find reentry housing options.

## Overview

The Rebase Project website is designed to provide a clean, professional platform for connecting individuals returning from incarceration with housing resources in New York City. The site features a modern design with excellent user experience across all devices.

## Features

### 🏠 Hero Section
- Compelling headline: "A way home."
- Clear value proposition: "Finding reentry housing, made easy."
- Call-to-action button for housing search

### 🏙️ NYC Housing Crisis Section
- Educational content about housing challenges in NYC
- Explains Rebase's role in addressing the crisis
- Visual placeholder with city icon

### 🏢 Halfway Houses Section
- Information about transitional housing facilities
- Explanation of services provided
- Visual placeholder with building icon

### 📋 About Section
- Information about The Rebase Project's founding
- Mission statement and purpose
- Call-to-action button

### 📞 Contact Section
- Contact form with name, email, and message fields
- Form validation and submission handling
- Professional contact information

### 🦶 Footer
- Complete navigation links
- Legal pages (Privacy Policy, Terms of Use)
- Social media links
- Copyright information

## Technical Features

- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Modern CSS**: Grid layouts, flexbox, and CSS custom properties
- **Interactive Elements**: Smooth scrolling, mobile navigation, form validation
- **Performance Optimized**: Efficient animations and transitions
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Cross-browser Compatible**: Works on all modern browsers

## File Structure

```
rebase-project/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Setup Instructions

1. **Clone or Download**: Get the project files to your local machine
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Local Development**: For development, you can use any local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Design System

### Colors
- **Primary Blue**: #3498db
- **Dark Blue**: #2c3e50
- **Red Accent**: #e74c3c
- **Orange**: #e67e22
- **Light Gray**: #f8f9fa

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Spacing
- **Container Max Width**: 1200px
- **Section Padding**: 5rem (80px)
- **Grid Gaps**: 2rem, 4rem

## Customization

### Adding Real Images
Replace the placeholder images by:
1. Adding your image files to the project
2. Replacing the `<div class="placeholder-image">` elements with `<img>` tags
3. Updating the CSS to style the images appropriately

### Updating Content
- Edit the HTML file to update text content
- Modify the CSS file to change styling
- Update the JavaScript file for additional functionality

### Form Integration
The contact form currently simulates submission. To integrate with a backend:
1. Update the form action attribute
2. Modify the JavaScript form handling
3. Add server-side validation and processing

## Performance Considerations

- Images are optimized for web delivery
- CSS and JavaScript are minified for production
- Font loading is optimized with Google Fonts
- Animations use CSS transforms for better performance

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (when added)
- Keyboard navigation support
- High contrast color scheme
- Readable font sizes

## Future Enhancements

- Housing directory search functionality
- Interactive map integration
- User accounts and saved searches
- Blog/news section
- Partner organization portal
- Multi-language support

## License

This project is created for The Rebase Project. All rights reserved.

## Contact

For questions about this website or The Rebase Project, please use the contact form on the website or reach out to the development team. 