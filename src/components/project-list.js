import uuid from 'react-uuid';
import "./project.css"
function Projects (){
    const projects=[
        {
            "name":"Project 1",
            "desc":"I did a lot of work writing radnom shit to fill up white space and see if it axually makes any sende.Still adding thigs to make it better",
            "image":"Some image source",
            "duration":"1-10-2020",
            "company":"Flipkart"
        },
        {
            "name":"Project 2",
            "desc":"I did a lot of work ",
            "image":"Some image source",
            "duration":"1-10-2020",
            "company":"Flipkart"
        },
        {
            "name":"Project 3",
            "desc":"I did a lot of work ",
            "image":"Some image source",
            "duration":"1-10-2020",
            "company":"Flipkart"
        
        }
    ]
    return(
        <div>
           {projects.map((item)=>{
                return(
                    <div key={uuid()} className="project-container">
                        <div className="project-desc">
                            <h1>{item.name}</h1>
                            <p>{item.duration}.<span>{item.company}</span></p>
                            <p>{item.desc}</p>
                        </div>
                    
                        
                        <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2019Q1/why-pm-is-important/why-is-project-management-important-header@2x.png" className="project-img"></img>
                        
                        
                    </div>
                )
           })}
        </div>
    )
}

export default Projects