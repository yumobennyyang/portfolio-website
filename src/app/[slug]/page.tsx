import { Portfolio, allPortfolios } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

const satoshi = localFont({ src: '../../fonts/PPNeueMontrealMono-Book.otf' });
const text = localFont({ src: '../../fonts/PPNeueMontreal-Variable.ttf' });
const neoTetra = localFont({ src: '../../fonts/NeoTetra-Regular.ttf' });


interface Params {
    params: {
        slug: string
    }
}

const Page: React.FC<Params> = ({ params: { slug } }) => {








    const item = allPortfolios.find((item) => item.slug === slug)

    if (!item) {
        notFound();
    }

    const currentIndex = item.orderIndex;
    const nextItem = allPortfolios.find((portfolio) => portfolio.orderIndex === currentIndex + 1);


    return <div className={`leading-6 text-white  tracking-wide ${text.className}`}>


        <div className="z-50 absolute my-6 h-14 w-14  self-center flex left-1/2  -translate-x-1/2  place-items-center opacity-50">
            <Image
                src="/images/portfolio/logo.gif"
                alt="Yang Logo"
                fill={true}
                priority
                draggable={false}
            />

        </div>

        <div className={`flex changeBlendMode m-4 z-50 left-0 top-0 fixed w-auto leading-6 text-white/50  text-sm ${satoshi.className}`}>

            <a
                className={` justify-between hover:text-white/100`}
                href="/#portfolio"
            >
                <p className=" justify-center pl-4 pr-2 py-2  w-auto underline underline-offset-4">
                    return home
                </p>

            </a>

        </div>


        <div className={`flex changeBlendMode m-4 z-50 right-0 top-0 fixed w-auto leading-6 text-white/50  text-sm ${satoshi.className}`}>

            <a
                className={` justify-between hover:text-white/100`}
                href="https://read.cv/yumobennyyang"
                target="_blank"
            >
                <p className=" justify-center pl-4 pr-2 py-2  w-auto underline underline-offset-4">
                    ↗ manifesto
                </p>

            </a>

            <a
                className={` justify-between hover:text-white/100`}
                href="https://read.cv/yumobennyyang"
                target="_blank"
            >
                <p className=" justify-center pr-4 pl-2 py-2  w-auto underline underline-offset-4">
                    ↗ cv
                </p>

            </a>



        </div>

        <div className="mx-auto max-w-3xl px-8">



            <div className="gradient gradient-blur z-20 w-screen   pointer-events-none  fixed ">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="gradient gradient-background z-20 w-screen   pointer-events-none  fixed " />

        </div>


        <div className="w-full !h-1/2 object-contain" >
            <Image className="w-full px-8 pt-[104px]" src={item?.preview?.src ?? ''} alt={item?.title} width={item?.preview?.width} height={item?.preview?.height} />
        </div>

        <div className="mx-auto max-w-3xl px-8 tracking-wider ">
            <div className={` z-30 py-8 text-xl font-black`}>{item?.title}</div>
            <div className={` opacity-50 pb-1 text-xs ${satoshi.className}`} >OVERVIEW</div>
            <div className="pb-4"> {item?.overview}</div>



            <div className="flex justify-between space-x-4 pb-4">

                {item.role && (
                    <div className="flex-1 pb-4">
                        <div className={` opacity-50 text-xs pb-1 ${satoshi.className}`}>ROLE</div>
                        <ul>
                            {item?.role?.map((role, index) => (
                                <li key={index}>{role}</li>
                            ))}
                        </ul>
                    </div>

                )}

                {item.tools && (
                    <div className="flex-1 pb-4 ">
                        <div className={` opacity-50 text-xs pb-1 ${satoshi.className}`}>TOOLS</div>
                        <ul>
                            {item?.tools?.map((tools, index) => (
                                <li key={index}>{tools}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {item.duration && (
                    <div className="flex-1 pb-4 ">
                        <div className={` opacity-50 text-xs pb-1 ${satoshi.className}`}>DURATION</div>
                        <div> {item?.duration}</div>
                    </div>
                )}

                {item.team && (
                    <div className="flex-1 pb-4 ">
                        <div className={` opacity-50 text-xs pb-1 ${satoshi.className}`}>TEAM</div>
                        <ul>
                            {item?.team?.map((team, index) => (
                                <li key={index}>{team}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>

            {item.textarea && (
                <div contentEditable className={`leading-[49px] text-5xl rounded-sm px-3 py-2 pb-4 bg-[#EADFCD] text-[#D93A34] textareaElement ${neoTetra.className}`}>Try here...</div>
            )}








            <div className={`markDown pb-24 !tracking-wider [&_*] `} dangerouslySetInnerHTML={{ __html: item?.body?.html }} />

            {item.isPlayground && (
                <div className="-translate-y-24" >

                    <div>
                        <br></br>
                        <span className=" font-bold">Three.js</span>
                        <br></br>
                        <br></br>
                        <span>Gidd is an interactive blob who has a mysterious connection to your cursor. </span>
                        <br></br>
                        <br></br>



                        <div className="iframe-container rounded-md ">
                            <iframe src="https://yumobennyyang.github.io/gidd-blob/" width="100%" height="375px" className="iframe  " />
                        </div>


                        <span className="opacity-50">Try moving your cursor around Gidd.</span>

                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="opacity-20" dangerouslySetInnerHTML={{ __html: item?.body?.html }} />
                    </div>





                    <div>
                        <br></br>
                        <span className=" font-bold">Pure CSS</span>
                        <br></br>
                        <br></br>
                        <span>A fake 3d effect...</span>
                        <br></br>
                        <br></br>



                        <div className="iframe-container rounded-md ">
                            <iframe src="https://hover-lighting.vercel.app/" className="iframe  " />
                        </div>

                        <span className="opacity-50">Hover cursor over the image.</span>

                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="opacity-20" dangerouslySetInnerHTML={{ __html: item?.body?.html }} />
                    </div>



                    <div>
                        <br></br>
                        <span className=" font-bold">Vanilla Javascript</span>
                        <br></br>
                        <br></br>
                        <span>What if responsive sites are designed like that hospital from&nbsp;
                            <a className="underline underline-offset-4 italic hover:opacity-80" href="https://www.google.com/search?sca_esv=b32a931cfe3322f6&sxsrf=ADLYWIJmm7dqlSqfd2-1UDaQIsPBqf-emQ:1717042113497&q=Hospital+from+Idiocracy&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiI3PSpwLSGAxUfEFkFHXl-AaEQ0pQJegQICxAB&biw=1476&bih=839&dpr=2#imgrc=mRoYrEfpOGD_PM">
                                Idiocracy
                            </a>
                            &nbsp;?
                        </span>
                        <br></br>
                        <br></br>



                        <div id="hospital-container" className="iframe-container rounded-md ">
                            <iframe id="hospital" src="https://stgodsmemorialhospital.vercel.app/" className="iframe  " />
                        </div>

                        <span className="opacity-50">Drag the bottom right corner of the window to resize.</span>

                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="opacity-20" dangerouslySetInnerHTML={{ __html: item?.body?.html }} />
                    </div>



                    <div>
                        <br></br>
                        <span className=" font-bold">Interaction Prototyping</span>
                        <br></br>
                        <br></br>
                        <span>An experimental AI interface centered around an entity that self-chromatizes as it incrementally takes in instructions to create content.</span>
                        <br></br>
                        <br></br>



                        <div className="w-full h-auto rounded-md  overflow-hidden border border-white/10">
                            <video
                                playsInline
                                muted
                                controls
                                className=" object-contain rounded"
                                width="100%"
                                height="auto">

                                <source src="/images/playground/playground3.mp4 " />

                            </video>
                        </div>

                        <span className="opacity-50">Prototyped with Figma</span>

                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="opacity-20" dangerouslySetInnerHTML={{ __html: item?.body?.html }} />
                    </div>



                    <div>
                        <br></br>
                        <span className=" font-bold">Figma Illustrations</span>
                        <br></br>
                        <br></br>
                        <span>Some gradient explorations with figma aiming to create realistic renders.</span>
                        <br></br>
                        <br></br>



                        <div className="w-full h-auto rounded-md overflow-hidden border border-white/10">
                            <img src="/images/playground/playground2.png " />
                        </div>

                        <span className="opacity-50">yee</span>

                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="opacity-20" dangerouslySetInnerHTML={{ __html: item?.body?.html }} />
                    </div>

                </div>

            )}

            {nextItem && (
                <div className={`hideScrollText items-center text-center z-10 bottom-0 w-full pb-6 leading-6 justify-between text-white/50 text-sm ${satoshi.className}`}>
                    <div className="justify-center ml-auto  pointer-events-auto ">
                        <p>
                            <a href={`/${nextItem.slug}`} className="underline underline-offset-4 hover:text-white">next project ({nextItem.description})</a>
                        </p>
                    </div>
                </div>
            )}



        </div>






    </div>
}

export default Page 