import Image from "next/image";

function CustomLink({title, link, left, top, rotate}: {title:string, link:string, left:number, top:number, rotate:number}) {
  return (
    <div className={`absolute left-${left} top-${top} ${rotate<0 ? '-' : ''}rotate-${Math.abs(rotate)}`}>
      <p className="group relative w-max uppercase text-5xl text-shadow-sm">
        <a href={link} target="_blank">{title}</a>
        <span className="absolute -bottom-1 left-1/2  w-0 transition-all h-1 bg-white group-hover:w-3/6"></span>
        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-white group-hover:w-3/6"></span>
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="h-screen flex flex-col space-between justify-between items-center">
      {/* // <div className="h-screen flex flex-col space-between justify-between items-center border-solid border-green-100 border-8"> */}
      <div className="h-full flex justify-center items-center">
        <div className="relative inline-block p-15">
          {/* <div className="relative inline-block p-15 border-solid border-red-50 border-8"> */}
          <Image
            className="block"
            src={"/portrait.png"}
            alt={"A portrait picture of singer Omar Price"}
            width={500}
            height={500}
          />
          <CustomLink title="Music" link="https://open.spotify.com/artist/08k8pppcyn77RlZW3Fg8K5" left={2} top={93} rotate={62}/>
          <CustomLink title="Social" link="https://www.instagram.com/omarpierce_/" left={2} top={35} rotate={-55}/>
          <CustomLink title="Merch" link="https://www.shopify.com/" left={55} top={9} rotate={0}/>
          <CustomLink title="Shows" link="https://www.bandsintown.com/a/15581283-omar-pierce" left={-30} top={35} rotate={60}/>
          {/* <a target="_blank" className="uppercase absolute text-5xl text-shadow-sm right-9 top-35 rotate-60" href=""     >Shows</a> */}
          <Image
            src={"/logo.svg"}
            alt={"Omar Pierce logo"}
            width={60}
            height={60}
            className="absolute right-3 bottom-6"
          />
        </div>
      </div>
      <p>2025 website by <a href="https://instagram.com/alvaro.makes.music"><u>Álvaro Cáceres</u></a></p>
    </div>
    // </div>
  );
}
