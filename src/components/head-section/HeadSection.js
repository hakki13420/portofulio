import './headSection.css'

const HeadSection = ({title,description}) => {
    return (
        <div className='headSection'>
            <h3>{title}</h3>   
            <h5>{description}</h5>   
        </div>
    )
}

export default HeadSection
