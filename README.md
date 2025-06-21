# Berkeley District 5 Council Website

A clean, accessible website for Berkeley District 5 constituents to stay informed about city council meetings, local issues, and community events. Built with HTML, CSS, and JavaScript featuring expandable content sections and a responsive design.

## 🚀 Features

- **Council Calendar**: Interactive calendar with upcoming meetings, agendas, and filtering options
- **Local Business Spotlight**: Featured local businesses with expandable details
- **Community Voice**: Constituent ideas and feedback with council responses
- **City News**: Latest updates from Berkeley City Hall with expandable articles
- **Contact Form**: Easy way for constituents to reach their council member
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Clean & Elegant**: Information is organized with expandable sections to avoid overwhelming users
- **Accessible**: Built with accessibility in mind for all constituents

## 🎨 Design

- **Color Scheme**: Berkeley District 5 brand colors
  - Primary Blue: #0081b9
  - Primary Yellow: #ec9f2f
- **Logo**: Ginkgo leaf symbol representing District 5
- **Typography**: Clean, readable Inter font family
- **Layout**: Card-based design with smooth animations and hover effects

## 📁 File Structure

```
d5website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── ginkgo-leaf.png     # District 5 logo (add your image here)
└── README.md           # This file
```

## 🛠️ Setup Instructions

### Option 1: Open Directly in Browser
1. Simply double-click the `index.html` file to open it in your default web browser
2. The website will load with all features working

### Option 2: Using a Local Server (Recommended)
For the best experience, especially with form functionality:

1. **Using Python** (if you have Python installed):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js** (if you have Node.js installed):
   ```bash
   # Install a simple server globally
   npm install -g live-server
   
   # Run the server
   live-server
   ```

3. **Using VS Code**:
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

4. Open your browser and go to `http://localhost:8000`

## 🎯 Key Sections

### Council Calendar
- Upcoming city council meetings with dates and times
- Meeting agendas with expandable details
- Filter by meeting type (Council, Committee, Community)
- Direct links to join meetings

### Local Business Spotlight
- Featured District 5 businesses
- Business details, hours, and special offerings
- Expandable sections for more information
- Support for local economy

### Community Voice
- Constituent ideas and feedback
- Council responses and status updates
- Voting system for community priorities
- Easy submission form for new ideas

### City News
- Latest updates from Berkeley City Hall
- Featured articles with full content
- Impact on District 5 highlighted
- Expandable articles for detailed reading

### Contact Section
- Direct contact information for council member
- Office hours and location
- Topic-based contact form
- Quick response commitment

## 🎨 Customization

### Adding Your Logo
1. Replace `ginkgo-leaf.png` with your actual logo file
2. Ensure the image is 40x40px for the header and 30x30px for the footer
3. Update the alt text if needed

### Updating Content
1. **Calendar Events**: Edit the calendar items in `index.html`
2. **Business Spotlights**: Update business information and details
3. **Community Feedback**: Add new constituent ideas and responses
4. **News Articles**: Update with latest city news and updates
5. **Contact Information**: Update office hours, phone, and email

### Adding New Features
1. **New Sections**: Add HTML sections and corresponding CSS styles
2. **Interactive Elements**: Add JavaScript functionality as needed
3. **Forms**: Create new forms with proper validation
4. **Animations**: Add CSS animations for enhanced user experience

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 🚀 Performance Features

- Optimized CSS with efficient selectors
- Minimal JavaScript for fast loading
- Smooth animations using CSS transforms
- Lazy loading for better performance
- Mobile-first responsive design

## 📞 Contact Form

The contact form includes:
- Name, email, topic selection, and message fields
- Client-side validation
- Success/error notifications
- Form reset after submission

**Note**: The form currently shows a success message but doesn't actually send emails. To make it functional, you'll need to:
1. Set up a backend server
2. Configure email sending (using services like SendGrid, Mailgun, etc.)
3. Update the JavaScript to make actual HTTP requests

## 🎯 SEO Features

- Semantic HTML5 structure
- Meta tags for better search engine visibility
- Fast loading times
- Mobile-friendly design
- Clean URL structure

## 🔒 Security Considerations

- Form validation on both client and server side
- XSS protection through proper input sanitization
- HTTPS recommended for production

## 📈 Analytics Integration

To add Google Analytics:
1. Get your tracking ID from Google Analytics
2. Add the tracking code to the `<head>` section of `index.html`

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and save

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be live instantly

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push

## 🆘 Support

If you need help customizing or deploying this website:
1. Check the browser console for any errors
2. Ensure all files are in the same directory
3. Try using a local server instead of opening the file directly
4. Make sure your logo file is properly named and sized

## 🔄 Content Management

### Regular Updates Needed:
- **Weekly**: Update council calendar with new meetings
- **Monthly**: Add new community feedback and responses
- **Quarterly**: Update business spotlights
- **As needed**: Add new city news articles

### Easy Content Updates:
- All content is in the HTML file for easy editing
- No database required
- Simple text editing for most updates
- Image updates just require file replacement

---

**Making government more accessible, one district at a time! 🍃** 