export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-16 lg:px-24">
      <p className="text-accent-light font-medium mb-4 tracking-wide">
        Hi, my name is
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
        Umer Majeed.
      </h1>
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted mb-6">
        I design and build things.
      </h2>
      <p className="text-muted max-w-xl text-base md:text-lg mb-8">
        I&apos;m a Graphic Designer &amp; UI/UX Designer currently studying
        AI at FUUAST. I create visual identities, digital experiences,
        and explore how design and artificial intelligence intersect.
      </p>
      <a
        href="#gallery"
        className="border border-accent text-accent-light px-6 py-3 rounded-md hover:bg-accent hover:text-background transition-colors"
      >
        View My Work
      </a>
    </section>
  );
}