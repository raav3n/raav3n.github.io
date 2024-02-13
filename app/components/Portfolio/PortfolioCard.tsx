import {PortfolioType} from "./PortfolioType"

const PortfolioCard: React.FC<PortfolioType> = ({style_bg_color = "bg-blue-400", title, description, tools, image, link, date}) =>
{
    return (
        <div className={`${style_bg_color} flex flex-col md:flex-row gap-10 min-h-full min-w-80 pl-5 pt-5`}>

            <div className="w-4/6">
                <p>{title}</p>
                <p>{description}</p>
                <p>{date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</p>

                <div>
                    <p>Stack: {tools}</p>  
                </div>
                
            </div>

            <div className="w-1/4">
                <img src={image} alt={`${title} image`} />
            </div>

        </div>
    )
}

export default PortfolioCard;