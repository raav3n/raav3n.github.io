import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub, FaGitlab } from "react-icons/fa";
import Image from "next/image";

export default function Heading(){
    return (
        <div className="flex md:flex-row flex-col w-screen h-screen items-center justify-center md:gap-5 mt-5">

            <div className="flex flex-row md:flex-col gap-12 md:pr-5 md:mt-0 mt-10 pb-10">
                <a href="https://linkedin.com/in/frank-mancia" target="_blank"><TiSocialLinkedin fontSize={25} className="hover:text-yellow-300 md:fixed"/></a>
                <a href="https://github.com/raav3n" target="_blank"><FaGithub fontSize={25} className="hover:text-yellow-300 md:fixed"/></a>
                <a href="https://gitlab.com/raaven" target="_blank"><FaGitlab fontSize={25} className="hover:text-yellow-300 md:fixed"/></a>
            </div>

            <div className="h-1/2 md:w-1/3 lg:1/2 flex items-center justify-center ">
                {/* <Image src={"/images/me.jpeg"} alt='Frank Image' width={500} height={500} className="rounded-full"/> */}
                <img src="/images/me.jpeg"alt='Frank Image'  className="rounded-full" />
            </div>
            
            <div className="h-1/2 md:w-1/2 grid grid-rows-5 grid-col-3 place-items-center md:place-items-start font-sans">
                <p className='row-start-1 row-start-2 text-6xl'>Hi,<br></br> I&#39;m <span className="text-yellow-100">Frank Mancia</span></p>
                <div className="row-end-5 text-wrap m-5 md:ml-0">
                    <p className="text-3xl font-semibold">About Me</p>
                    <p className="text-xl mt-3">Graduated from <a href="https://www.csulb.edu" className="hover:text-yellow-300">CSULB </a> 
                    with a B.S. in Computer Science and a minor Cyber Security Applications. Interested in cybersecurity, cloud, and software development.</p>
                </div>
            </div>
            
        </div>
    )
}