# Portfolio Content Customization Guide

This guide details all files, lines, and placeholder elements in your video portfolio project. You can use it to replace the default templates with your own personal info, skills, projects, and custom assets.

---

## 1. Global & Header Settings

### Webpage Title
The HTML page title shown in the browser tab.
* **File:** [index.html](file:///c:/Users/Admin/Desktop/umesh_portfolio-main/index.html#L7)
* **Target Line:**
  ```html
  <title>umesh_portfolio</title>
  ```
  *Change this to your full name or branding (e.g., `John Doe | Full Stack Developer`).*

### Branding Name
The text logo displayed in the top-left of the page.
* **File:** [Navbar.jsx](file:///c:/Users/Admin/Desktop/umesh_portfolio-main/src/components/Navbar.jsx#L36-L38)
* **Target Lines:**
  ```jsx
  <a href="#" className="text-white text-2xl font-black tracking-tight">
    Leeshark<span className="text-red-500">.</span>
  </a>
  ```

---

## 2. Hero Section

The intro screen featuring a background video, headings, call-to-actions, and a play reel button.
* **File:** [Hero.jsx](file:///c:/Users/Admin/Desktop/umesh_portfolio-main/src/components/Hero.jsx)

### Main Headings
* **Location:** [Hero.jsx:L54-L68](file:///c:/Users/Admin/Desktop/umesh_portfolio-main/src/components/Hero.jsx#L54-L68)
* **Target Lines:**
  ```jsx
  <h1 
    data-aos="fade-up"
    className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
  >
    Hi, I’m a <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_black]">Full Stack Developer</span>
  </h1>
  ```
  ```jsx
  <p 
    data-aos="fade-up"
    data-aos-delay="200"
    className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
  >
    I build fast, scalable and modern web applications using React, Node.js and Tailwind CSS.
  </p>
  ```

### Background Video Reel
* **Location:** [Hero.jsx:L5](file:///c:/Users/Admin/Desktop/umesh_portfolio-main/src/components/Hero.jsx#L5)
* **Target Line:**
  ```jsx
  import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';
  ```
  *To replace this video:*
  1. Add your own `.mp4` video inside the `src/assets/hero video/` directory.
  2. Update this import path to point to your new filename.

---

## 3. About Section

The section with an ID badge lanyard visual, your intro bio, and core technology stack icons.
* **File:** [About.jsx](file:///c:/Users/Admin/Desktop/umesh_portfolio-main/src/components/About.jsx)

### Profile Photo & Stack Logos
* **Location:** [About.jsx:L2-L5](file:///c:/Users/Admin/Desktop/umesh_portfolio-main/src/components/About.jsx#L2-L5)
* **Target Lines:**
  ```jsx
  import stackImage from '../assets/about/image.png';
  import reactImage from '../assets/about/react.png';
  import nodeImage from '../assets/about/node.png';
  import mongoImage from '../assets/about/mongodb.png';
  ```
  *To replace the photo:*
  1. Replace the file at `src/assets/about/image.png` with your portrait photo (recommended ratio 3:4), or save your photo there and update `stackImage`'s import.
  2. To update tech logos, add your logo images to `src/assets/about/` and update these imports.

### Greeting, Name, and Bio Text
* **Location:** [About.jsx:L43-L46](file:///c:/Users/Admin/Desktop/umesh_portfolio-main/src/components/About.jsx#L43-L46)
* **Target Lines:**
  ```jsx
  <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
  <p className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50">
    Hi, my name is <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">Leeshark</span>, a passionate full-stack developer based in [Location], dedicated to crafting clean, functional, and highly scalable web applications.
  </p>
  ```

---

## 4. Services (How We Work) Section

An interactive section demonstrating your workflow step-by-step.
* **File:** [Services.jsx](file:///c:/Users/Admin/Desktop/umesh_portfolio-main/src/components/Services.jsx)

### Main Headings
* **Location:** [Services.jsx:L87-L97](file:///c:/Users/Admin/Desktop/umesh_portfolio-main/src/components/Services.jsx#L87-L97)
* **Target Lines:**
  ```jsx
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
    Let us show you how we drive your brand to new heights
  ```
  ```jsx
  <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
    We follow a structured, creative, and highly technical approach to turn your ideas into robust full-stack applications.
  </p>
  ```

### Workflow Steps (Define, Design, Build, Launch)
* **Location:** [Services.jsx:L176-L218](file:///c:/Users/Admin/Desktop/umesh_portfolio-main/src/components/Services.jsx#L176-L218)
* **Target Lines:**
  You can customize the `title` and `text` for each of the four cards:
  ```jsx
  <TagCard 
    number="01"
    title="Define"
    text="We start by understanding your goals, user requirements, and technical constraints..."
  ```
  *(Repeat for steps 02: Design, 03: Build, and 04: Launch).*

---

## 5. Contact Section

A section containing the contact form.
* **File:** [Contact.jsx](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Contact.jsx)

* **Contact Title Layout:** If you wish to change the big scrolling background text "CONTACT", search for `Contact` in [Contact.jsx:L25](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Contact.jsx#L25).
* **Legal Links:** Modify the privacy policy and terms links inside [Contact.jsx:L99](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Contact.jsx#L99) and [Contact.jsx:L103](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Contact.jsx#L103).

---

## 6. Footer Section

Features links, experience level, a giant signature text, and copyright details.
* **File:** [Footer.jsx](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Footer.jsx)

### Developer Skills & Expertise List
* **Location:** [Footer.jsx:L10-L12](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Footer.jsx#L10-L12)
* **Target Lines:**
  ```jsx
  <p>Cinematic & Creative Production</p>
  <p>Lighting, Editing, Photo</p>
  <p>Motion Graphics</p>
  ```
  *Change these to fit your skills (e.g., `Web & Mobile Development`, `UI/UX Design`, `APIs & Databases`).*

### Experience & Location
* **Location:** [Footer.jsx:L16-L21](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Footer.jsx#L16-L21)
* **Target Lines:**
  ```jsx
  <p>5+ years of experience</p>
  ```
  ```jsx
  <p>Worldwide Available</p>
  ```

### Giant Signature Branding
* **Location:** [Footer.jsx:L28-L30](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Footer.jsx#L28-L30)
* **Target Lines:**
  ```jsx
  <h2 className="text-[18vw] md:text-[16vw] ...">
    leeshark
  </h2>
  ```

### Email & Copyright Text
* **Location:** [Footer.jsx:L38-L43](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Footer.jsx#L38-L43)
* **Target Lines:**
  ```jsx
  &copy; {new Date().getFullYear()} Leeshark Studio | Built with React
  ```
  ```jsx
  <a href="mailto:hello@leeshark.com" ... >hello@leeshark.com</a>
  ```

---

## 7. Fixing Section IDs and Navigation Links

Currently, the navigation links in the header are partially disconnected because the target sections do not all have the matching CSS IDs. To ensure clicking links scroll to the right place, you should add IDs to the main sections.

### Step 1: Add IDs to sections
1. Open [Hero.jsx](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Hero.jsx#L35) and add `id="home"` to the `<section>` tag:
   ```jsx
   <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
   ```
2. Open [About.jsx](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/About.jsx#L9) and add `id="about"` to the `<section>` tag:
   ```jsx
   <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 ...">
   ```
3. Open [Services.jsx](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Services.jsx#L76) and note it has `id="services"`. You might want to update the link in `Navbar.jsx` from `Skills` to `Services` to match it.

### Step 2: Configure navbar links
Open [Navbar.jsx](file:///c:/Users/Admin/Desktop/video_portfolio-main/src/components/Navbar.jsx#L20) and adjust the list of pages matching your sections:
```jsx
const navLinks = ['Home', 'About', 'Services', 'Contact'];
```
*(You can also build a custom Projects or Skills component to handle other page links as you expand your portfolio!)*
