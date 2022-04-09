import HeadSection from '../head-section/HeadSection'
import './about.css'
import me from '../../assets/me.png'

const About = () => {
    return (
        <section id='about'>
           <HeadSection title="About me" 
                        description='Informatic Ingneer'
           />
           <div className="about">
               <div className="about__img">
                    <img src={me} alt={me} />
               </div>
               <div className="about__details">
                   <div className="about__card">
                        <div className="card">
                            <h4>Projscts</h4>
                            <small>25 projects</small>
                        </div>
                        <div className="card">
                            <h4>projscts</h4>
                            <small>25 projects</small>
                        </div>
                        <div className="card">
                            <h4>projscts</h4>
                            <small>25 projects</small>
                        </div>           
                   </div>
                   <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum hic deserunt, nihil ab eum eveniet libero ipsam quisquam minus quos aperiam similique sapiente nesciunt repellendus, nisi odio officia explicabo magnam facere possimus nulla labore! Ipsum reprehenderit obcaecati amet. Incidunt, error.
                   </p>
               </div>
           </div>
        </section>
    )
}

export default About
