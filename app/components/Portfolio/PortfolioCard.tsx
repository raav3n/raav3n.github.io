import {PortfolioType} from "./PortfolioType"

const PortfolioCard: React.FC<PortfolioType> = ({title, tools, image, link}) =>
{
    return (
        <div className="bg-blue-400 flex flex-col min-h-80 min-w-80">
            <p>{title}</p>
            <p>Stack: {tools}</p>            
        </div>
    )
}

export default PortfolioCard;