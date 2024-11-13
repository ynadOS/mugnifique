import backgroundImage from "../assets/cup-2315563_1280.jpg";
function Banner() {

    return (
      <>
        <div className="hero min-h-screen mb-20" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="hero-content text-neutral-content  bg-[#A1C6EA] rounded-lg p-12  mx-auto md:ml-auto md:mr-8 lg:mr-24">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Bienvenue</h1>
                    <p className="mb-5">
                    Bienvenue sur notre site de mugs personnalisables ! Créez le mug qui vous ressemble ou offrez un cadeau unique, avec des designs et textes à personnaliser selon vos envies. À chaque tasse, son histoire !
                    </p>
                    <button className="btn bg-[#E5E5E5] text-[#A1C6EA] border-none">Voir Les nouvelles collections</button>

                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Banner
  

