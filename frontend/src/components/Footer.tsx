export default function Footer() {
    return (
      <footer className="bg-void py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-4">© 2023 Cogent Solutions. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-cyber transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyber transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    )
  }