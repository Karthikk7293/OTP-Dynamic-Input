# OTP Validation Input Boxes

A polished and reusable **OTP Validation Input Boxes** application built with **React**, **Vite**, and **TypeScript**. This completed app provides a dynamic OTP input component for secure and intuitive OTP entry, featuring customizable input box counts, auto-focus, and seamless focus switching. Perfect for enhancing authentication workflows in web applications.

## 📋 Project Description
A dynamic OTP input component built with React, Vite, and TypeScript. It supports configurable input box counts, auto-focus on load, and automatic focus switching between inputs, delivering a smooth and responsive user experience for OTP-based authentication.

## ✨ Features
- **Dynamic Input Boxes**: Generate any number of input boxes based on OTP length.
- **Auto-Focus**: Automatically focuses the first input box when the component loads.
- **Focus Switching**: Moves focus to the next input on entry and to the previous input on deletion.
- **TypeScript Support**: Fully typed for enhanced type safety and developer productivity.
- **Responsive Design**: Adapts to various screen sizes with clean, modern styling.
- **Customizable**: Configure input box count and styles via props.
- **Error Handling**: Validates input to ensure only valid characters (e.g., numbers) are entered.

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Karthikk7293/otp-validation-input.git
   cd otp-validation-input
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open `http://localhost:5173` in your browser to view the app.

### Build for Production
```bash
npm run build
# or
yarn build
```

## 🛠️ Usage
1. Import the `OtpInput` component into your React project:
   ```tsx
   import OtpInput from './components/OtpInput';

   function App() {
     const handleOtpChange = (otp: string) => {
       console.log('OTP:', otp);
     };

     return (
       <div>
         <h1>Enter OTP</h1>
         <OtpInput length={6} onChange={handleOtpChange} />
       </div>
     );
   }
   ```

2. Customize the component with props:
   - `length`: Number of input boxes (e.g., `6` for a 6-digit OTP).
   - `onChange`: Callback to receive the complete OTP value.

Example:
```tsx
<OtpInput length={4} onChange={(otp) => console.log('Entered OTP:', otp)} />
```

## 📂 Project Structure
```
otp-validation-input/
├── src/
│   ├── components/
│   │   └── OtpInput.tsx       # OTP input component logic and styling
│   ├── App.tsx               # Main app component with demo
│   ├── main.tsx              # Application entry point
│   └── styles/               # CSS/SCSS for component styling
├── public/                   # Static assets
├── vite.config.ts            # Vite configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## 🤝 Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Please ensure your code follows the project's **ESLint** and **Prettier** configurations.

## 📫 Contact
- GitHub: [YourUsername](https://github.com/Karthikk7293)
- Email: [karthikk7293@gmail.com]

## ⚡ Acknowledgments
Built with ❤️ using **React**, **Vite**, and **TypeScript**. Inspired by the need for a seamless OTP input experience in modern web apps.

---

⭐️ Star this repo if you find it helpful!  
Happy coding! 😄
