import PortfolioCard from "./PortfolioCard"
import createDateFromMonthYearString from "./utils"

export default function PortfolioContainer() 
{
    return (
        <div className="overflow-x-auto gap-5 h-full items-center justify-center pt-10 md:pl-24">

            <PortfolioCard 
                title={'Real Time Chat Application'} 
                description={'Chat web application built with React.js, Node.js/Express.js, and Socket.io. Deploys to AWS EC2 and s3 using Terraform through a CI/CD pipeline on GitLab.'} 
                tools={['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Terraform', 'GitLab']} 
                link={'https://gitlab.com/raaven/realtime-chat-fullstack'}
                image={"https://cdn1.vectorstock.com/i/1000x1000/19/60/web-app-icon-simple-element-from-development-vector-34151960.jpg"}
                date={createDateFromMonthYearString("January, 2024")}/>

            <PortfolioCard 
                title={'Real Time Chat Application'} 
                description={'Chat web application built with React.js, Node.js/Express.js, and Socket.io. Deploys to AWS EC2 and s3 using Terraform through a CI/CD pipeline on GitLab.'} 
                tools={['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Terraform', 'GitLab']} 
                link={'https://gitlab.com/raaven/realtime-chat-fullstack'}
                image={"https://cdn1.vectorstock.com/i/1000x1000/19/60/web-app-icon-simple-element-from-development-vector-34151960.jpg"}
                date={createDateFromMonthYearString("January, 2024")}/>

    
        </div>
    )
}