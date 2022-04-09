import './knowledgeItem.css'
import {BiBadgeCheck} from 'react-icons/bi'

const KnowledgeItem = ({knowledges,title}) => {
    return (
        <>
            <div className="knowledge">
            <h4>{title}</h4>
                {
                    knowledges.map(el=>{
                        return <div key={el.id} className="knowledge-item">
                            <div className="knowledge-item-title">
                                <BiBadgeCheck />
                                <h5>{el.title}</h5>
                            </div>
                            <small>{el.level}</small>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default KnowledgeItem
