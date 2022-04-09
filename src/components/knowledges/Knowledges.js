import './knowledges.css'
import knowledges from '../../data/knowledges.json'
import KnowledgeItem from './KnowledgeItem'
import HeadSection from '../head-section/HeadSection'

const Knowledges = () => {
    let frontend=knowledges.filter(el=>el.type==='frontend')
    let backend=knowledges.filter(el=>el.type==='backend')
    return (
        <section id="knowledges">
            <HeadSection title='knowledges' 
                        description='fullstack develpper' 
            />
            <div className="knowledges">
                <KnowledgeItem  knowledges={frontend} 
                                title='FrontEnd'                                    
                />            
                <KnowledgeItem  knowledges={backend}
                                title='BackEnd'
                />                        
            </div>
        </section>
    )
}

export default Knowledges
