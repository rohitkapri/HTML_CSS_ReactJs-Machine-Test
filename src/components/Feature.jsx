import React from 'react'
import './Feature.css'

const Feature = () => {
    const sections = [
        {
          title: "Sed ut perspiciatis",
          description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          buttonText: "Learn more"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
          buttonText: "Learn more"
        },
        {
          title: "Nemo enim ipsam",
          description: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
          buttonText: "Learn more"
        },
        {
          title: "Tempor incididunt",
          description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
          buttonText: "Learn more"
        }
      ];
    
  return (

    <>
      <div className="grid-container">
      <div className="hero-section">
        <h1>Snap photos and share like <br />never before</h1>
      </div>

      
      {sections.map((section, index) => (
        <div className="section-component" key={index}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <button>{section.buttonText}</button>
        </div>
      ))}
    </div>

    </>
  )
}

export default Feature
