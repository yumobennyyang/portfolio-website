import { Portfolio, allPortfolios } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import "../globals.css";
import { motion } from 'framer-motion';
import Transition from "../template";

const satoshi = localFont({ src: '../../fonts/PPNeueMontrealMono-Book.otf' });
const text = localFont({ src: '../../fonts/PPNeueMontreal-Book.otf' });
const neoTetra = localFont({ src: '../../fonts/NeoTetra-Regular.ttf' });

const boldd = localFont({ src: '../../fonts/PPNeueMontreal-Medium.otf' });


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


    return <div className={` leading-6 text-zinc-900  ${text.className}`}>

        <div className="brightness-95 flex vercelBackground pointer-events-none  -z-40 w-full h-screen fixed">

            <div className="opacity-70 m-auto relative flex place-items-center before:absolute before:h-[700px] before:w-[900px] before:-translate-x-full before:rounded-full before:bg-gradient-radial before:from-rose-50 before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[400px] after:w-[700px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-100 after:via-purple-50 after:blur-3xl after:content-[''] ">
            </div>
        </div>

        <div className="z-50 absolute my-6 h-14 w-14  self-center flex left-1/2  -translate-x-1/2  place-items-center  mix-blend-difference">
            <Image
                src="/images/portfolio/logo.gif"
                alt="Yang Logo"
                fill={true}
                priority
                draggable={false}
            />

        </div>

        <div className={`flex mix-blend-difference sm:mx-4 my-2 z-50 left-0 top-0 fixed w-auto leading-6 text-zinc-500 text-sm ${satoshi.className}`}>

            <a
                className={` justify-between hover:text-zinc-50`}
                href="/#portfolio"
            >
                <p className=" justify-center pl-4 pr-2 py-2  w-auto underline underline-offset-4 decoration-[0.2px] hover:decoration-2">
                    return home
                </p>

            </a>

        </div>


        <div className={`flex mix-blend-difference sm:mx-4 my-2 z-50 right-0 top-0 fixed w-auto leading-6 text-zinc-500  text-sm ${satoshi.className}`}>


            <a
                className={` justify-between hover:text-zinc-50`}
                href="https://read.cv/bennyyyang"
                target="_blank"
            >
                <p className=" justify-center pr-4 pl-2 py-2  w-auto underline underline-offset-4 decoration-[0.2px] hover:decoration-2">
                    ↗ cv
                </p>

            </a>

        </div>




        <div className="gradient gradient-blur z-20 w-screen   pointer-events-none  fixed ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className="gradient gradient-background z-20 w-screen   pointer-events-none  fixed " />


        <div className="w-full !h-1/2 px-4 sm:px-8 pt-[104px] object-contain" >
            <Image className="w-full" src={item?.preview?.src ?? ''} alt={item?.title} width={item?.preview?.width} height={item?.preview?.height} />
        </div>


        <div className="flex tracking-[0.015rem]">
            <div className={` px-8 sticky top-0 left-0 w-1/3 h-screen pt-[104px] sm:block hidden `}>

                <div className={` text-zinc-500  pb-1 text-xs ${satoshi.className}`}>INTERFACES</div>
                <div className="pb-4">
                    <div className="flex ">
                        <a href="/tencent" className="hover-item ">Tencent</a>
                        <div className="hover-menu text-zinc-400 truncate">&nbsp;Interaction Design Internship</div>
                    </div>

                    <div className=" flex ">
                        <a href="/spec-mobile" className="hover-item " >Spectator 1.0</a>
                        <div className="hover-menu text-zinc-400 truncate">&nbsp;Mobile UI/UX</div>

                    </div>

                    <div className=" flex ">
                        <a href="/playground" className="hover-item ">Playground</a>
                        <div className="hover-menu text-zinc-400 truncate">&nbsp;Interactive Experiments</div>

                    </div>

                </div>

                <div className={` text-zinc-500  pb-1 text-xs ${satoshi.className}`}>COMPOSITIONS</div>
                <div className="pb-4">
                    <div className="flex  ">
                        <a href="/neo-tetra" className="hover-item  ">Neo Tetra</a>
                        <div className="hover-menu text-zinc-400 truncate">&nbsp;Typeface Design</div>
                    </div>

                    <div className=" flex ">
                        <a href="/valorant" className="hover-item " >Valorant</a>
                        <div className="hover-menu text-zinc-400 truncate">&nbsp;Promotional Graphics</div>

                    </div>

                    <div className=" flex  ">
                        <a href="/usa" className="hover-item ">United States of Achromatism</a>
                        <div className="hover-menu text-zinc-400 truncate">&nbsp;Photshop Project</div>

                    </div>

                </div>

                <div className={` text-zinc-500  pb-1 text-xs ${satoshi.className}`}>CRAFTS</div>
                <div className="pb-4">
                    <div className="flex ">
                        <a href="/sleep" className="hover-item ">Euphemism for a Good Night&apos;s Sleep</a>
                        <div className="hover-menu text-zinc-400 truncate">&nbsp;2023</div>
                    </div>

                    <div className=" flex ">
                        <a href="/paintings" className="hover-item " >Flat Collection</a>
                        <div className="hover-menu text-zinc-400 truncate">&nbsp;2019 - 2024</div>

                    </div>

                    <div className=" flex">
                        <a href="/heads" className="hover-item ">Heads</a>
                        <div className="hover-menu text-zinc-400 truncate">&nbsp;2020 - 2024</div>

                    </div>

                </div>

            </div>

            <div className=" max-w-3xl px-4 sm:px-8   ">
                <div className={` z-30 py-8 text-4xl  font-medium !tracking-[0.015rem] ${boldd.className}`}>{item?.title}</div>
                <div className={` text-zinc-500 pb-1 text-xs ${satoshi.className}`} >OVERVIEW</div>
                <div className="pb-4"> {item?.overview}</div>



                <div className="flex justify-between space-x-4 pb-4 ">

                    {item.role && (
                        <div className="flex-1 pb-4">
                            <div className={` text-zinc-500 text-xs pb-1 ${satoshi.className}`}>ROLE</div>
                            <ul>
                                {item?.role?.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>

                    )}

                    {item.tools && (
                        <div className="flex-1 pb-4 ">
                            <div className={` text-zinc-500 text-xs pb-1 ${satoshi.className}`}>TOOLS</div>
                            <ul>
                                {item?.tools?.map((tools, index) => (
                                    <li key={index}>{tools}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {item.duration && (
                        <div className="flex-1 pb-4 ">
                            <div className={` text-zinc-500 text-xs pb-1 ${satoshi.className}`}>DURATION</div>
                            <div> {item?.duration}</div>
                        </div>
                    )}

                    {item.team && (
                        <div className="flex-1 pb-4 ">
                            <div className={` text-zinc-500 text-xs pb-1 ${satoshi.className}`}>TEAM</div>
                            <ul>
                                {item?.team?.map((team, index) => (
                                    <li key={index}>{team}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {item.media && (
                        <div className="flex-1 pb-4 ">
                            <div className={` text-zinc-500 text-xs pb-1 ${satoshi.className}`}>MEDIA</div>
                            <ul>
                                {item?.media?.map((media, index) => (
                                    <li key={index}>{media}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {item.dimensions && (
                        <div className="flex-1 pb-4 ">
                            <div className={` text-zinc-500 text-xs pb-1 ${satoshi.className}`}>DIMENSIONS</div>
                            <div> {item?.dimensions}</div>
                        </div>
                    )}

                </div>

                {item.textarea && (
                    <div contentEditable className={`leading-[49px] text-5xl rounded-sm px-3 py-2 pb-4 bg-[#F0F0F0] text-[#D93A34] border !border-white layer-shadow textareaElement ${neoTetra.className}`}>Try here...</div>
                )}








                <div className={`markDown pb-24 !tracking-wide [&_*]:  `} dangerouslySetInnerHTML={{ __html: item?.body?.html }} />










                {item.isPlayground && (
                    <div className="-translate-y-24" >

                        <div>
                            <br></br>
                            <span className=" font-bold">Three.js</span>
                            <br></br>

                            <span className="opacity-80">Gidd is an interactive blob with an inexplicable connection to your cursor. </span>
                            <br></br>
                            <span className="opacity-50">Try moving your cursor around Gidd.</span>
                            <br></br>
                            <br></br>



                            <div className="iframe-container rounded layer-shadow">
                                <iframe src="https://yumobennyyang.github.io/gidd-blob/" width="100%" height="375px" className="iframe  " />
                            </div>




                            <br></br>
                            <br></br>


                            <div className="" dangerouslySetInnerHTML={{ __html: item?.body?.html }} />
                        </div>




                        <div>
                            <br></br>
                            <span className=" font-bold">Pure CSS</span>
                            <br></br>
                            <span className="opacity-80">A 3d effect...</span>
                            <br></br>
                            <span className="opacity-50">Hover cursor over the image.</span>
                            <br></br>
                            <br></br>



                            <div className="iframe-container rounded layer-shadow">
                                <iframe src="https://hover-lighting.vercel.app/" className="iframe  " />
                            </div>



                            <br></br>
                            <br></br>


                            <div className="" dangerouslySetInnerHTML={{ __html: item?.body?.html }} />
                        </div>



                        <div>
                            <br></br>
                            <span className=" font-bold">Vanilla Javascript</span>
                            <br></br>
                            <span className="opacity-80">What if responsive sites are designed like that hospital from&nbsp;
                                <a className="underline underline-offset-4 italic hover:opacity-80" href="https://www.google.com/search?sca_esv=b32a931cfe3322f6&sxsrf=ADLYWIJmm7dqlSqfd2-1UDaQIsPBqf-emQ:1717042113497&q=Hospital+from+Idiocracy&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiI3PSpwLSGAxUfEFkFHXl-AaEQ0pQJegQICxAB&biw=1476&bih=839&dpr=2#imgrc=mRoYrEfpOGD_PM">
                                    Idiocracy
                                </a>
                                &nbsp;?
                            </span>
                            <br></br>
                            <span className="opacity-50">Drag the bottom right corner of the window to resize.</span>
                            <br></br>
                            <br></br>



                            <div id="hospital-container" className="iframe-container rounded layer-shadow">
                                <iframe id="hospital" src="https://stgodsmemorialhospital.vercel.app/" className="iframe  " />
                            </div>



                            <br></br>
                            <br></br>


                            <div className="" dangerouslySetInnerHTML={{ __html: item?.body?.html }} />
                        </div>



                        <div>
                            <br></br>
                            <span className=" font-bold">Interaction Prototyping</span>
                            <br></br>
                            <span className="opacity-80">An experimental AI interface centered around an entity that self-chromatizes as it incrementally takes in instructions to create content.</span>
                            <br></br>
                            <span className="opacity-50">Prototyped with Figma</span>

                            <br></br>
                            <br></br>



                            <div className="w-full h-auto rounded  overflow-hidden layer-shadow border border-white/50">
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



                            <br></br>
                            <br></br>

                            <div className="" dangerouslySetInnerHTML={{ __html: item?.body?.html }} />
                        </div>



                        <div>
                            <br></br>
                            <span className=" font-bold">Figma Illustrations</span>
                            <br></br>
                            <span className="opacity-80">Some gradient explorations with figma aiming to create realistic renders.</span>
                            <br></br>
                            <span className="opacity-50">yee</span>
                            <br></br>
                            <br></br>



                            <div className="w-full h-auto rounded overflow-hidden border border-white layer-shadow">
                                <img src="/images/playground/playground2.png " alt="" />
                            </div>



                            <br></br>
                            <br></br>

                        </div>

                    </div>

                )}





            </div>




        </div>
        {nextItem && (
            <div className={`hidden hideScrollText px-8 z-10 bottom-0 w-full pb-6 leading-6 justify-between text-zinc-500 text-sm ${satoshi.className}`}>
                <div className="justify-center  pointer-events-auto ">
                    <p>
                        <a href={`/${nextItem.slug}`} className="underline underline-offset-4 hover:text-zinc-950">next project ({nextItem.title} - {nextItem.description})</a>
                    </p>
                </div>
            </div>
        )}


    </div >
}

export default Page 