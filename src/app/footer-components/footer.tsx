// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Anas Saleem. All rights reserved.</p>
          <p>
            Built with Next.js and Tailwind CSS
          </p>
          <div className="mt-4">
            <a href="https://github.com/AnasSaleem285" target="_blank" className="text-blue-400 hover:underline mx-2">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/anassaleem1/" target="_blank" className="text-blue-400 hover:underline mx-2">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }
  