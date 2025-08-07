export default function Hero() {
  return (
    <section className="relative flex h-[55vh] items-center justify-center overflow-hidden">
      <img
        src="https://source.unsplash.com/1600x900/?technology,dark"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 text-center text-white">
        <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
          Welcome to MyWebApp
        </h2>
        <p className="mx-auto max-w-xl text-lg text-neutral-200">
          A sleek React + Node boilerplate with auth, routing & notifications.
        </p>
      </div>
    </section>
  );
}
