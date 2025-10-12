function Specialists() {
  const specialists = [
    {
      name: 'Psicologia',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Urologia',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dermatologia',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="especialistas" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-bold mb-8">
            " Palavra do Especialista"
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-4 transform transition-all duration-300 group-hover:scale-105">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="relative w-48 h-48 object-cover rounded-full shadow-2xl border-4 border-white/30"
                />
              </div>
              <h3 className="text-white text-xl font-bold">{specialist.name}</h3>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-start mb-16">
          <span className="text-white font-bold text-xl">H⊕MIN+</span>
        </div>
      </div>
    </section>
  );
}

export default Specialists;
