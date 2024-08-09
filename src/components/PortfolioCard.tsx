import { Portfolio } from "contentlayer/generated";
import Image from "next/image";
import Video from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import localFont from "next/font/local";

const regularText = localFont({ src: '../fonts/PPNeueMontreal-Book.otf' })

interface PortfolioCardProps {
    item: Portfolio
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {

    if (!item.enabled) {
        return null;
    }

    return < Link href={"/" + item.slug}>



        <div className=" w-full backdrop-blur-2xl tracking-wide mb-4 ">



            <div id="portfolioCard" className=" bg-white  duration-300 ease-[cubic-bezier(0,0,.5,1)] w-full flex-col relative flex rounded-xl overflow-hidden group layer-shadow layer-shadow-hover sm:hover:scale-[1.01] sm:hover:scale-z-[1.01]  ">



                {item.image && (
                    <div className="overflow-hidden  rounded-t-xl">
                        <Image className=" object-cover  !border-none !rounded-none" src={item.image.src} alt={item.title} width={item.image.width} height={item.image.height} />
                    </div>
                )}


                {item.video && ( 
                    <div className="overflow-hidden  rounded-t-xl">
                        <video
                            playsInline
                            autoPlay
                            muted
                            loop
                            className=" object-cover "
                            width={item.video.width}
                            height={item.video.height}>

                            <source src={item.video.src} type="video/mp4" />

                        </video>
                    </div>
                )}

                <div className="z-20 px-4 pb-3 relative w-full flex-row">
                    <div className="text-zinc-950 w-full pl-2 pb-1 truncate text-xl ">{item.title}</div>
                    <div className={`text-zinc-400 opacity-80 w-full pl-2 pb-2 truncate text-xs uppercase tracking-wider ${regularText.className}`}>{item.description}</div>


                </div>


            </div>



        </div>

    </Link>
}