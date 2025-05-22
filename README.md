# Mfanaka Ka Maluleke Photography Website

This is an Angular-based photography portfolio website for Mfanaka Ka Maluleke, a renowned South African fashion and portrait photographer. The site is designed based on Lindsay Adler's website with specific customizations.

## Project Overview

The website features:
- Responsive design with mobile-friendly layout
- Motion background on homepage
- Portfolio categories with grid layout
- About page with photographer information
- Contact form with validation
- Black background with minimalist aesthetic
- Custom color scheme with vibrant pink (#FF3E8F) and emerald green (#00A86B)

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Angular CLI

### Installation
1. Clone this repository
```
git clone https://github.com/Mmoke-Nape/mfanaka-photography.git
```

2. Navigate to the project directory
```
cd mfanaka-photography
```

3. Install dependencies
```
npm install
```

4. Run the development server
```
ng serve
```

5. Open your browser and navigate to `http://localhost:4200`

## Project Structure

- `src/app/components/` - Main page components
  - `home/` - Homepage with motion background
  - `portfolio/` - Portfolio categories grid
  - `about/` - About page
  - `contact/` - Contact form
- `src/app/shared/` - Shared components
  - `header/` - Navigation header
  - `footer/` - Site footer
- `src/assets/` - Images and videos
  - `images/` - Portfolio and photographer images
  - `videos/` - Background video for homepage

## Features

### Homepage
- Full-screen background with motion/video elements
- Grid layout of featured photography work
- Photographer's name prominently displayed

### Portfolio Page
- Grid layout of portfolio categories with hover effects
- Categories: Fashion Editorial, Glamour, Portrait, Studio, Fashion I, Fashion II, Commercial, Lifestyle, Cultural, Advertising

### About Page
- Professional headshot with colored border accent
- Biography text with professional accomplishments
- Clean, minimalist layout with strong typography

### Contact Page
- Functional contact form with validation
- Fields for Name, Email, Inquiry type, and Message
- CAPTCHA verification

## Deployment

To build the project for production:

```
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## GitHub Repository

To push this project to your GitHub repository:

1. Create a new repository on GitHub
2. Add the remote repository URL
```
git remote add origin https://github.com/Mmoke-Nape/mfanaka-photography.git
```
3. Push the code to GitHub
```
git push -u origin master
```

## Credits

- Design inspiration: Lindsay Adler Photography
- Development: Angular framework
