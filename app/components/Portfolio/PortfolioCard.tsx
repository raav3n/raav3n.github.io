import {PortfolioType} from "./PortfolioType"
import "./portfolio.css"

const PortfolioCard: React.FC<PortfolioType> = ({title, description, tools, image, link, date}) =>
{
    return (
        <div className={`flex flex-col md:flex-row gap-10 min-h-full min-w-80 pl-5 md:pt-5 portfolio_card justify-center items-center`}>

            <div className="md:w-1/2 md:w-3/6 min-h-full flex flex-col gap-20">
                <div>
                    <p id="title"><a href={link} target="_">{title}</a></p>
                    <p id="description">{description}</p>
                </div>

                <div className="tools_stack">
                    <p>{tools.slice(0, -1).map(t => t + ', ')}{tools.slice(-1)+''}</p>  
                    <p id="date" className="text-md">{date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</p>
                </div>
                
            </div>

            <div className="md:w-1/2 mr-5">
                <img src={image} alt={`${title} image`} />
            </div>
{/* DONT WANT WIDTH ON MOBIEL< ONLY BIG */}
        </div>
    )
}

export default PortfolioCard;