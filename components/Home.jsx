import Header from "./Header";
import Hero from "./Hero";
import {BiChevronDown} from "react-icons/bi";
import {AiOutlineTwitter} from "react-icons/ai";
import {BsInstagram, BsYoutube} from "react-icons/bs";
import {FaFacebookSquare} from "react-icons/fa";
import logo from "../public/images/discord.svg";
import Image from "next/image";

const Home = () => {
    return (
        <main>
            <Header/>
            <Hero/>

            <section className={"px-20 py-10 md:px-32 md:py-16 mt-7"}>
                {/*section-wrapper*/}
                <article className={"grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"}>
                    {/*image*/}
                    <img src="/images/create.svg" className={"mt-4 md:my-auto md:mx-0 col-span-4 lg:col-span-7"} alt=""/>

                    {/*group-text*/}
                    <div className={"text-group md:my-auto order-1 lg:col-start-9 lg:col-end-13"}>
                        <h2 className={"text-3xl font-serif font-bold"}>Create an invite-only place where you
                            belong</h2>
                        <p>Discord servers are organized into topic-based channels where you can collaborate, share,
                            and just talk about your day without clogging up a group chat.
                        </p>
                    </div>
                </article>
            </section>
            <section className={"px-20 py-10 md:px-32 md:py-16 mt-10 bg-[#f6f6f6]"}>
                {/*section-wrapper*/}
                <article className={"grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"}>
                    <img src="/images/hangout.svg" className={"mt-4 md:my-auto md:mx-0 col-span-4 md:order-1 lg:order-2 lg:col-start-6 lg:col-end-13"} alt=""/>

                    {/*group-text*/}
                    <div className={"text-group md:order-2 lg:order-1 lg:col-span-4"}>
                        <h2 className={"text-3xl font-serif font-bold"}>Where hanging out is easy</h2>
                        <p> Grab a seat in a voice channel when you’re free.
                            Friends in your server can see you’re around and instantly pop in to talk without having to
                            call.</p>
                    </div>

                </article>
            </section>

            <section className={"px-20 py-10 md:px-32 md:py-16 mt-10"}>
                {/*section-wrapper*/}
                <article className={"grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"}>
                    <img src="/images/hangout.svg" className={"mt-4 md:my-auto md:mx-0 col-span-4 lg:col-span-7"} alt=""/>

                    {/*group-text*/}
                    <div className={"text-group lg:col-start-9 lg:col-end-13"}>
                        <h2 className={"text-3xl font-serif font-bold"}>From few to a fandom</h2>
                        <p>
                            Get any community running with moderation tools and custom member access.
                            Give members special powers, set up private channels, and more.
                        </p>
                    </div>

                </article>
            </section>

            <section className={"px-20 py-10 md:px-32 md:py-16 mt-10 bg-[#f6f6f6]"}>
                {/*section-wrapper*/}
                <article className={"grid grid-cols-4 lg:grid-cols-12"}>
                    <img src="/images/reliable.svg" className={"mt-4 md:my-auto md:mx-0 col-span-4 order-2 lg:col-span-8 lg:col-start-3"} alt=""/>

                    {/*group-text*/}
                    <div className={"text-group order-1 text-center lg:col-start-2 lg:col-span-10"}>
                        <h2 className={"text-3xl font-serif font-bold"}>RELIABLE TECH FOR STAYING CLOSE</h2>
                        <p>
                            Low-latency voice and video feels like you’re in the same room.
                            Wave hello over video, watch friends stream their games, or gather up and have a drawing
                            session with screen share.
                        </p>
                    </div>
                </article>
            </section>

            <section className={"px-20 pb-10 bg-[#f6f6f6]"}>
                <div className={"space-y-5 w-full text-center"}>
                    <img src="/images/colors.svg" className={"mt-4 md:my-auto md:mx-0 col-span-4 inline-block"} alt=""/>
                    <h2 className={"text-3xl font-serif font-bold "}>Ready to start your journey?</h2>
                    <button
                        className={"px-[32px] hover:shadow-lg duration-200 transition ease-out rounded-full text-white py-[16px] border bg-[#5865f2] w-full md:w-2/5 lg:w-1/5"}>Download
                        for Windows
                    </button>
                </div>
            </section>

            <footer className={"bg-[#23272a] text-white pt-32 lg:px-28 px-10 pb-24"}>
                {/*container*/}
                <section className={"grid grid-cols-4 md:grid-cols-8 gap-7 lg:grid-cols-12"}>
                    {/*info-box*/}
                    <article className={"col-span-4  md:col-span-3 lg:col-span-4  md:row-span-2 mb-20"}>
                        <div className={"m-0"}>
                            <h4 className={"font-sans text-2xl lg:text-lg text-[#5865f2]"}>IMAGINE A PLACE</h4>
                            <div className={"flex items-center space-x-2 m-0 text-[20px] lg:text-[16px] my-10 "}>
                                <img src="" alt="FLAG"/>
                                <span>English, USA</span>
                                <BiChevronDown/>
                            </div>

                            {/*social-media*/}
                            <div className={"space-x-5"}>
                                <button className={"text-[2.3rem] lg:text-xl"}> <AiOutlineTwitter/></button>
                                <button className={"text-[2.3rem] lg:text-xl"}> <BsInstagram/></button>
                                <button className={"text-[2.3rem] lg:text-xl"}> <FaFacebookSquare/></button>
                                <button className={"text-[2.3rem] lg:text-xl"}> <BsYoutube/></button>
                            </div>
                        </div>
                    </article>

                    {/*spacer*/}
                    <div className="hidden md:block lg:hidden col-span-full h-[1px] bg-[#f6f6f6] mb-12"/>

                    {/*footer-links group*/}
                    <article className={"text-sm col-span-2 lg:col-start-6 space-y-1"}>
                        <h5 className={"text-[#5865f2] text-lg"}>Products</h5>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                    </article>

                    <article className={"text-sm col-span-2 lg:col-start-8 space-y-1"}>
                        <h5 className={"text-[#5865f2] text-lg"}>Products</h5>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                    </article>

                    <article className={"text-sm col-span-2 lg:col-start-10 space-y-1"}>
                        <h5 className={"text-[#5865f2] text-lg"}>Products</h5>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                    </article>

                    <article className={"text-sm col-span-2 lg:col-start-12 space-y-1"}>
                        <h5 className={"text-[#5865f2] text-lg"}>Products</h5>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                        <p>Download</p>
                    </article>

                    {/*divider*/}
                    <div className="col-span-full h-[1px] bg-[#f6f6f6] mb-12"/>
                </section>

                <section className={"flex items-center justify-between"}>
                    <figure className={"relative w-32 h-12"}>
                        <Image layout={"fill"} objectFit={"cover"} src={logo}/>
                    </figure>

                    <button className={"px-5 py-2 rounded-full bg-white text-black"}>Sign up</button>
                </section>

            </footer>
        </main>
    );
};

export default Home;