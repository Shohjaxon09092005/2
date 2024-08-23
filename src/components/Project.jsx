import React, { useEffect, useState } from 'react'
import '../styles/project.css'
import { URL } from '../utils/url';
function Project() {
      const [project, setProject] = useState(null);
      const [data, setData] = useState(null);
    
    useEffect(() => {
        getProject()
        getData()
    }, [])
    async function getProject() {
        let fetchProject = await fetch(`${URL}/all-projects`)
        let json = await fetchProject.json()
        setProject(json?.data[0])
    }
    async function getData() {
        let fetchData = await fetch(`${URL}/projects`)
        let json = await fetchData.json()
        setData(json?.data)
    }
    
    return (
        
  
    <section className='project'>
        <div className="container">
            <h2>{project?.title}</h2>
            <p>{project?.description}</p>
            <div className="project__wrapper">
                {data?.map((item)=>{
                    return(
                        <div className="project__card" key={item?._id}>
                            <img width={300} height={200} src={item?.imageLink} alt="" />
                        </div>
                    )
                })}
            </div>
            <button className='button'>Все проекты</button>
            
        </div>
    </section>
  )
}

export default Project
