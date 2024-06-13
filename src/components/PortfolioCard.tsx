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



            <div id="portfolioCard" className="bg-white/80 hover:bg-white/100 transition duration-200 w-full flex-col relative flex rounded  overflow-hidden group layer-shadow sm:hover:scale-[1.005] border !border-white/100 ">



                {item.image && (
                    <div className="bg-[#f0f0f0] transition duration-200 rounded-t overflow-hidden border-b border-neutral-200  ">
                        <Image className=" object-cover rounded-t " src={item.image.src} alt={item.title} width={item.image.width} height={item.image.height} />
                    </div>
                )}


                {item.video && ( 
                    <div className="bg-[#f0f0f0] transition duration-200 rounded-t overflow-hidden border-b border-neutral-200 ">
                        <video
                            playsInline
                            autoPlay
                            muted
                            loop
                            className="aspect-square object-cover rounded-t"
                            width={item.video.width}
                            height={item.video.height}>

                            <source src={item.video.src} type="video/mp4" />

                        </video>
                    </div>
                )}

                <div className="z-20 px-4 py-3 relative w-full flex-row ">
                    <div className="text-neutral-900 w-full font-medium text-nowrap">{item.title}</div>
                    <div className="text-neutral-400 w-full font-medium text-nowrap">{item.description}</div>


                </div>


            </div>



        </div>

    </Link>
}