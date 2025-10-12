function AwarenessCampaigns() {
  const campaigns = [
    {
      title: 'Setembro Amarelo',
      color: 'yellow',
      image: 'https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-yellow-400',
      textColor: 'text-yellow-700'
    },
    {
      title: 'Novembro Azul',
      color: 'blue',
      image: 'https://images.pexels.com/photos/579474/pexels-photo-579474.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-blue-400',
      textColor: 'text-blue-700'
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-bold mb-2">
            " Campanhas de Concientização"
          </h2>
        </div>

        <div className="flex items-center justify-center mb-8">
          <span className="text-white font-bold text-xl">H⊕MIN+</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative mb-6 group">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="relative w-64 h-64 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-blue-600 font-bold text-sm">H⊕MIN+</span>
                </div>
              </div>
              <button className={`${campaign.bgColor} ${campaign.textColor} px-8 py-3 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105`}>
                {campaign.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwarenessCampaigns;
