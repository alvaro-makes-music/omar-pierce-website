import Image from "next/image";

function CustomLink({title, link, className}: {title:string, link:string, className:string}) {
  return (
    <div className={`absolute opacity-0 ${className}`}>
      <p className="group relative w-max uppercase text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-shadow-sm">
        <a href={link} target="_blank">{title}</a>
        <span className="absolute -bottom-1 left-1/2  w-0 transition-all h-0.75 bg-white group-hover:w-3/6"></span>
        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.75 bg-white group-hover:w-3/6"></span>
      </p>
    </div>
  )
}

export default function Home() {
  const showBorders = false
  return (
    <div className={`h-screen flex flex-col space-between justify-between items-center bg-[url('/wall-4c.webp')] bg-cover bg-bottom ${showBorders && 'border border-solid border-4 border-red-500 sm:border-green-500 md:border-blue-500 lg:border-yellow-500'}`}>
      <div className="h-full flex justify-center items-center">
        <div className={`relative inline-block p-15 ${showBorders && 'border border-solid border-red-600'}`}>
          <Image
            className={`block border ${showBorders && 'border-solid border-yellow-600'} animate-portrait`}
            src={"/portrait-3d.webp"}
            alt={"A portrait picture of singer Omar Price"}
            width={650}
            height={650}
          />
          <CustomLink title="Music" link="https://open.spotify.com/artist/08k8pppcyn77RlZW3Fg8K5"
            // className="-left-10 top-120 rotate-50 animate-fade-in-music"/>
            className="bottom-2/7 left-0 rotate-50 animate-fade-in-music"/>

          <CustomLink title="Social" link="https://www.instagram.com/omarpierce_/"
            // className="-left-13 top-25 -rotate-55 animate-fade-in-social"/>
            className="-left-0 top-1/10 -rotate-45 animate-fade-in-social"/>
          
          <CustomLink title="Merch" link="https://www.shopify.com/"
            // className="left-68 -top-10 animate-fade-in-merch"/>
            className="left-7/17 -top-0 animate-fade-in-merch"/>
          
          <CustomLink title="Shows" link="https://www.bandsintown.com/a/15581283-omar-pierce"
            // className="right-3 top-25 rotate-50 animate-fade-in-shows"/>
            className="right-0 top-1/10 rotate-45 animate-fade-in-shows"/>
          
          <Image
            src={"/logo.svg"}
            alt={"Omar Pierce logo"}
            width={50}
            height={50}
            className="absolute right-0 bottom-2 animate-fade-in-sec"
          />
        </div>
      </div>
      <p className="pb-5 text-xl text-white animate-fade-in-sec">2025 website by <a href="https://instagram.com/alvaro.makes.music"><u>Álvaro Cáceres</u></a></p>
    </div>
  );
}
