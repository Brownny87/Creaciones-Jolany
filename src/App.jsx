import React, { useState } from 'react';
import { Shirt, Sparkles, School, Briefcase, Scissors, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [logoError, setLogoError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Construct WhatsApp message
    const whatsappText = `Hola, soy ${name}. Mi correo es ${email}. Mensaje: ${message}`;
    const whatsappUrl = `https://wa.me/573134302081?text=${encodeURIComponent(whatsappText)}`;
    
    // Construct Mailto link
    const mailtoUrl = `mailto:creaciones.jolany@hotmail.com?subject=Nuevo Mensaje Web de ${name}&body=${encodeURIComponent(message + "\n\nDe: " + name + "\nEmail: " + email)}`;

    // Open WhatsApp (Primary action for "aviso")
    window.open(whatsappUrl, '_blank');
    
    // Try to open email client as well (might be blocked by popup blocker, but we try)
    window.location.href = mailtoUrl;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const galleryItems = [
    {
      id: 1,
      category: 'Academias',
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Vestuario Ballet',
    },
    {
      id: 2,
      category: 'Disfraces',
      image: 'https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Disfraz Fantasía',
    },
    {
      id: 3,
      category: 'Uniformes',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Uniforme Escolar Deportivo',
    },
    {
      id: 4,
      category: 'Uniformes',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Chaleco Corporativo',
    },
    {
      id: 5,
      category: 'Vestuarista',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Traje Danza Contemporánea',
    },
    {
      id: 6,
      category: 'Disfraces',
      image: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Disfraz Superhéroe',
    },
    {
      id: 7,
      category: 'Uniformes',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Uniforme Diario',
    },
    {
      id: 8,
      category: 'Uniformes',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Camisetas Estampadas',
    },
  ];

  const categories = ['Todos', 'Uniformes', 'Academias', 'Disfraces', 'Vestuarista'];

  const filteredItems = activeCategory === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            {logoError ? (
              <div className="text-2xl font-bold text-[#354f32] flex items-center gap-2">
                <Scissors size={28} />
                <span>Creaciones Jolany</span>
              </div>
            ) : (
              <img 
                src="logo.png" 
                alt="Creaciones Jolany" 
                className="h-12 md:h-16 object-contain" 
                onError={() => setLogoError(true)}
              />
            )}
          </div>
          <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <li><a href="#home" className="hover:text-[#b99f8a] transition">Inicio</a></li>
            <li><a href="#services" className="hover:text-[#b99f8a] transition">Servicios</a></li>
            <li><a href="#gallery" className="hover:text-[#b99f8a] transition">Galería</a></li>
            <li><a href="#about" className="hover:text-[#b99f8a] transition">Nosotros</a></li>
            <li><a href="#contact" className="hover:text-[#b99f8a] transition">Contacto</a></li>
          </ul>
          <a href="#contact" className="bg-[#354f32] text-white px-5 py-2 rounded-full hover:bg-[#2b2e32] transition shadow-sm hidden md:block">
            Cotizar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative bg-[#2b2e32] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Diseño y Confección Profesional
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Expertos en vestuario artístico, disfraces y manejo de Lycra. También ofrecemos soluciones integrales en uniformes y dotaciones empresariales.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#services" className="bg-white text-[#2b2e32] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Nuestros Servicios
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-[#2b2e32] transition shadow-lg">
              Contáctanos
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo Que Hacemos</h2>
            <div className="w-20 h-1 bg-[#354f32] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">Ofrecemos soluciones textiles completas, desde la creatividad artística hasta la formalidad corporativa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 4 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-[#b99f8a]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#354f32] transition duration-300">
                <Scissors className="text-[#354f32] group-hover:text-white transition duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Vestuarista</h3>
              <p className="text-gray-600">
                Diseño y confección de vestuario para producciones y eventos especiales.
              </p>
            </div>

            {/* Service 1 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-[#b99f8a]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#354f32] transition duration-300">
                <School className="text-[#354f32] group-hover:text-white transition duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Uniformes</h3>
              <p className="text-gray-600">
                Colegios, Universidades y Dotaciones Empresariales. Calidad y resistencia.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-[#b99f8a]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#354f32] transition duration-300">
                <Sparkles className="text-[#354f32] group-hover:text-white transition duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Academias</h3>
              <p className="text-gray-600">
                Vestuario especializado para academias de danza y teatro.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-[#b99f8a]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#354f32] transition duration-300">
                <Shirt className="text-[#354f32] group-hover:text-white transition duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Disfraces</h3>
              <p className="text-gray-600">
                Creación de personajes y disfraces temáticos con acabados de alta calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Trabajos</h2>
            <div className="w-20 h-1 bg-[#354f32] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Explora nuestra galería de proyectos realizados con dedicación y detalle.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                  activeCategory === category
                    ? 'bg-[#354f32] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-[#b99f8a]/20 hover:text-[#354f32]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#b99f8a] text-sm font-bold uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section id="about" className="py-20 bg-[#b99f8a]/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Taller de costura" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <span className="text-[#354f32] font-bold tracking-wider uppercase text-sm">Sobre Mí</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Pasión por el Arte Textil y la Confección</h2>
              <p className="text-gray-700 text-lg mb-6">
                Soy una vestuarista apasionada, especialista en pintura y arte textil. Mi trabajo fusiona la creatividad con la técnica, transformando telas en obras de arte vivas.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Con experiencia en el manejo de la lycra para vestuarios artísticos de alto rendimiento, así como en la creación de disfraces únicos y dotaciones empresariales que destacan por su calidad y diseño.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Scissors className="text-green-600" size={16} />
                  </div>
                  <span className="text-gray-700">Ajuste perfecto y comodidad garantizada.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Scissors className="text-green-600" size={16} />
                  </div>
                  <span className="text-gray-700">Materiales de primera calidad para mayor durabilidad.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Scissors className="text-green-600" size={16} />
                  </div>
                  <span className="text-gray-700">Atención personalizada para cada cliente y proyecto.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2b2e32] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl text-[#b99f8a] mb-8 max-w-2xl mx-auto">Desde un traje único hasta la dotación completa de tu empresa, estamos listos para ayudarte.</p>
          <a href="#contact" className="inline-block bg-white text-[#2b2e32] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Solicitar Cotización
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <div className="w-20 h-1 bg-[#354f32] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800">Información de Contacto</h3>
              <div className="flex items-start space-x-4">
                <div className="bg-[#b99f8a]/20 p-3 rounded-full">
                  <Phone className="text-[#354f32]" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Teléfono / WhatsApp</p>
                  <p className="text-gray-600">+57 313 430 2081</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#b99f8a]/20 p-3 rounded-full">
                  <Mail className="text-[#354f32]" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <p className="text-gray-600">creaciones.jolany@hotmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#b99f8a]/20 p-3 rounded-full">
                  <MapPin className="text-[#354f32]" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Ubicación</p>
                  <p className="text-gray-600">Bogotá, Colombia</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="font-bold text-gray-900 mb-4">Síguenos en Redes Sociales</p>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/creacionesjolany/?hl=es-la" target="_blank" rel="noopener noreferrer" className="bg-[#b99f8a]/20 p-3 rounded-full hover:bg-[#354f32] hover:text-white transition duration-300 text-[#354f32]">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.facebook.com/creaciones.jolany" target="_blank" rel="noopener noreferrer" className="bg-[#b99f8a]/20 p-3 rounded-full hover:bg-[#354f32] hover:text-white transition duration-300 text-[#354f32]">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#354f32] focus:border-transparent transition" 
                  placeholder="Tu nombre" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#354f32] focus:border-transparent transition" 
                  placeholder="tucorreo@ejemplo.com" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">Mensaje</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#354f32] focus:border-transparent transition" 
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-[#354f32] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2b2e32] transition shadow-md">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2b2e32] text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Creaciones Jolany. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send?phone=573134302081&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition z-50 animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
