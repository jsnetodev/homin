function Hero() {
  return (
    <section id="inicio" className="pt-20 pb-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0 max-w-xl">
            <h1 className="text-6xl font-bold mb-8 tracking-tight">
              H<span className="inline-flex items-center justify-center w-14 h-14 rounded-full border-4 border-white mx-1">
                <span className="text-3xl">⊕</span>
              </span>MIN+
            </h1>
            <p className="text-2xl mb-8 font-light leading-relaxed">
              Sua jornada para o<br />
              Bem-estar começa aqui!
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
