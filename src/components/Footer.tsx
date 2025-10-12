import { Instagram, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-white text-3xl font-bold text-center mb-12">
          Parceria & Contato
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-500 tracking-tight">
                H<span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-4 border-blue-500 mx-1">
                  <span className="text-2xl text-blue-500">⊕</span>
                </span>MIN+
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Rede Social</h3>
              <a
                href="https://instagram.com/homin.saude"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-blue-200 transition-colors group"
              >
                <div className="bg-white/20 p-3 rounded-full mr-3 group-hover:bg-white/30 transition-all">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-lg">homin.saude</span>
              </a>
            </div>

            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Email</h3>
              <a
                href="mailto:homin.saude@gmail.com"
                className="flex items-center text-white hover:text-blue-200 transition-colors group"
              >
                <div className="bg-white/20 p-3 rounded-full mr-3 group-hover:bg-white/30 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg">homin.saude@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-white text-lg">
            © Homin + <span className="font-semibold">2025</span>
          </p>
        </div>

        <div className="flex justify-end mt-8">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-white text-sm font-semibold">UNINASSAU</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
