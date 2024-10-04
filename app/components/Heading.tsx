import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub, FaGitlab, FaFilePdf } from "react-icons/fa";

const Heading: React.FC = () => {
    return (
        <div className="flex md:flex-row flex-col w-screen h-screen items-center justify-center md:gap-5 pt-10">

            <div className="flex flex-row md:flex-col gap-12 md:pr-5 md:mt-0 mt-10 pb-10">
                <a href="https://linkedin.com/in/frank-mancia" target="_blank"><TiSocialLinkedin fontSize={25} className="hover:text-yellow-300 md:fixed"/></a>
                <a href="https://github.com/raav3n" target="_blank"><FaGithub fontSize={25} className="hover:text-yellow-300 md:fixed"/></a>
                <a href="https://gitlab.com/raaven" target="_blank"><FaGitlab fontSize={25} className="hover:text-yellow-300 md:fixed"/></a>
                {/* <a href="/resume" target="_blank"><FaFilePdf fontSize={25} className="hover:text-yellow-300 md:fixed"/></a> */}
            </div>

            <div className="h-1/2 md:w-1/3 lg:1/2 flex items-center justify-center ">
                <img src="/images/me.jpeg"alt='Frank Image'  className="rounded-full" />
            </div>
            
            <div className="h-1/2 md:w-1/2 grid grid-rows-4 grid-col-3 place-items-center md:place-items-start font-sans">
                <p className='md:row-start-2 row-end-2 text-6xl ml-5 mt-10 md:ml-0 md:mt-0 md:mr-0 mr-1'>Hi,<br></br> I&#39;m <span className="text-yellow-100">Frank Mancia</span></p>
                <div className="md:row-start-3 row-start-3 text-wrap m-5 md:ml-0 mb-5">
                    {/* <p className="text-3xl font-semibold mt-16 sm:mt-5 md:mt-10 lg:mt-0">About Me</p> */}
                    <p className="text-xl mt-8">Information Security Analyst at CSU Chancellor Office. Interested in cybersecurity, cloud, and software development.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Heading;