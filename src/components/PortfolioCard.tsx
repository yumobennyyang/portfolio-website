import { Portfolio } from "contentlayer/generated";
import Image from "next/image";
import Video from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

interface PortfolioCardProps {
    item: Portfolio
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {

    return < Link href={"/" + item.slug}>


        <div className=" w-full backdrop-blur-2xl tracking-wide ">



            <div id="portfolioCard" className=" bg-white  transition ease-in duration-250 w-full flex-col relative flex rounded-lg  overflow-hidden group layer-shadow layer-shadow-hover sm:hover:scale-[1.005] border-b !border-white/40 ">



                {item.image && (
                    <div className=" transition duration-250 ease-in overflow-hidden  rounded-t-lg">
                        <Image className=" object-cover  !border-none !rounded-none" src={item.image.src} alt={item.title} width={item.image.width} height={item.image.height} />
                    </div>
                )}


                {item.video && ( 
                    <div className="transition duration-250 ease-in overflow-hidden  rounded-t-lg">
                        <video
                            playsInline
                            autoPlay
                            muted
                            loop
                            className="aspect-square object-cover "
                            width={item.video.width}
                            height={item.video.height}>

                            <source src={item.video.src} type="video/mp4" />

                        </video>
                    </div>
                )}

                <div className="z-20 px-4 py-3 relative w-full flex-row">
                    <div className="text-zinc-900 w-full font-medium truncate">{item.title}</div>
                    <div className="text-zinc-400 w-full font-medium truncate ">{item.description}</div>


                </div>


            </div>



        </div>

    </Link>
}