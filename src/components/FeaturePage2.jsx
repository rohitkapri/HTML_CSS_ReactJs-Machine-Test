import React from 'react'
import ReusableHeader from './sub_component/ReusableHeader'
import './FeaturePage2.css'

const FeaturePage2 = () => {
    const sections = [
        {
          title: "Sed ut perspiciatis",
          description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          
        },
        {
          title: "Lorem ipsum dolor",
          description: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
       
        },
        {
          title: "Nemo enim ipsam",
          description: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
         
        }
      ];
  return (
    <>
      <ReusableHeader Title={'Have you ever posted any photo on social media?'}/>
      <div className='feature-container'>
        <div className='feature-cards'>
            {
                sections.map((section,index) =>(
                    <div className='card' key={index}>
                        <h2>{section.title}</h2>
                        <p>{section.description}</p>
                    </div>
                ))
            }

        </div>
        <div className='feature-image'>
        <img src="../public/images/Building.jpeg" alt="feature-img" />
        </div>
      </div>
    </>
  )
}

export default FeaturePage2

