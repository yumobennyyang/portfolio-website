import { Portfolio } from "contentlayer/generated";
import Image from "next/image";
import Video from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
    item: Portfolio
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {

    return < Link href={"/" + item.slug}>

        <div className=" w-full ">



            <div id="portfolioCard" className=" bg-white/10 backdrop-blur-lg hover:bg-white/50 transition duration-200 w-full flex-col relative flex rounded-sm  overflow-hidden group layer-shadow layer-shadow-hover sm:hover:scale-[1.005] border !border-white/50 ">



                {item.image && (
                    <div className=" transition duration-200  overflow-hidden  rounded-t-sm">
                        <Image className=" object-cover  " src={item.image.src} alt={item.title} width={item.image.width} height={item.image.height} />
                    </div>
                )}


                {item.video && ( 
                    <div className="transition duration-200 overflow-hidden  ">
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
                    <div className="text-neutral-900 w-full font-medium truncate">{item.title}</div>
                    <div className="text-neutral-400 w-full font-medium truncate ">{item.description}</div>


                </div>


            </div>



        </div>

    </Link>
}