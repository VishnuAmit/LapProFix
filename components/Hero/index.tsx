import Link from "next/link";

const Hero = () => {
  return (
    <>
     <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.ctfassets.net/16nm6vz43ids/7g9t8d7WaVz7BM1L9RmrCl/9f42265945660d42d58111bf3e169aab/Repair_or_replace_laptop.png?fm=webp&q=65')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0" /> {/* Overlay */}
        
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="wow fadeInUp mx-auto max-w-[800px] text-center" data-wow-delay=".2s">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Your Laptop's New Best Friend
                </h1>
                <p className="text-[#d3c6c6] dark:text-[#ffffff] mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl text-center">
  At LapProFix, we understand how crucial your laptop is to your daily life. Whether you're a student, a professional, or someone who relies on technology for entertainment, a malfunctioning laptop can disrupt your routine. That's why we offer convenient at-home repair services, bringing skilled technicians directly to you.
</p>


                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                      href="/signup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🛠️   Fix Now?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
