export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build Your Ideal
            <br />
            <span className="gradient-brand-text">Development Stack</span>
          </h1>
          <p className="mt-6 text-lg text-base-content/70 max-w-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="btn gradient-brand text-white border-0 rounded-lg">
              Explore Technologies
            </button>
            <button className="btn btn-outline rounded-lg">Learn More</button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}hero.png`}
            alt="Layered 3D technology stack illustration"
            className="w-64 md:w-96 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}