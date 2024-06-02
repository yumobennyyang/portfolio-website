import { Portfolio } from "contentlayer/generated";
import Image from "next/image";
import Video from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
    item: Portfolio
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {

    return < Link href={"/" + item.slug}>

        <div id="portfolioCard" className="transition duration-150 w-full flex-col relative flex rounded  overflow-hidden group ">

            <div className="z-20 absolute w-full h-full flex rounded overflow-hidden items-center group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out  border !border-white/30">
                <h2 className="p-4 w-full text-center">{item.description}</h2>
            </div>

            {item.image && (
                <div className="bg-[#f0f0f0] transition duration-150  rounded overflow-hidden group-hover:brightness-50 group-hover:scale-[1.02] group-hover:blur-sm">
                    <Image className=" object-cover rounded " src={item.image.src} alt={item.title} width={item.image.width} height={item.image.height} />
                </div>
            )}


            {item.video && (
                <div className="bg-[#f0f0f0] transition duration-150 rounded overflow-hidden group-hover:brightness-50 group-hover:scale-[1.02] group-hover:blur-sm">


                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="aspect-square object-cover rounded"
                        width={item.video.width}
                        height={item.video.height}>

                        <source src={item.video.src} type="video/mp4" />

                    </video>





                </div>
            )}

        </div></Link>
}