import PortfolioCard from "./PortfolioCard"
import createDateFromMonthYearString from "./utils"

export default function PortfolioContainer() 
{
    return (
        // <div className="overflow-x-auto gap-5 h-screen items-center justify-center md:pt-10 md:pl-24">
        <div className="h-screen items-center justify-center md:pt-10 md:pl-24 md:mr-10">

            <PortfolioCard 
                title={'Real Time Chat Application'} 
                description={'Web app for real time chat rooms. Deploys to AWS through a CI/CD pipeline on GitLab.'} 
                tools={['React.js', 'Node.js', 'Socket.io', 'Terraform', 'GitLab', 'AWS']} 
                link={'https://gitlab.com/raaven/realtime-chat-fullstack'}
                image={"/images/realtime-chat.png"}
                date={createDateFromMonthYearString("January, 2024")}/>

            <PortfolioCard 
                title={'Campustalk'} 
                description={'University student web forum for CSULB senior group project. Deployed to a Google Cloud VM with Docker containers for nginx, client, and backend.'} 
                tools={['React.js', 'Node.js', 'GCP', 'MySQL', 'Docker']} 
                link={'#'}
                image={"/images/campustalk.png"}
                date={createDateFromMonthYearString("December, 2023")}/>

    
        </div>
    )
}