'use client';

export default function Background() {
  return (
    <>
      <div className="block -z-50 fixed h-screen pointer-events-none w-screen items-center bg-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover sm:object-fill blur-xl opacity-80"
        >
          <source src="/images/portfolio/background.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex brightness-100 vercelBackground darkBackground pointer-events-none -z-40 w-full h-full fixed">
        <div className="opacity-0 m-auto relative flex place-items-center before:absolute before:h-[700px] before:w-[900px] before:-translate-x-full before:rounded-full before:bg-gradient-radial before:from-rose-100 before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[400px] after:w-[700px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-purple-200 after:blur-3xl after:content-['']">
        </div>
      </div>

      <div className="gradient gradient-background z-20 w-screen pointer-events-none fixed hidden" />
      <div className="gradient gradient-blur z-20 w-screen pointer-events-none fixed hidden">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
