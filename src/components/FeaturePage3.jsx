import React from 'react'
import ReusableHeader from './sub_component/ReusableHeader'
import './Featurepage3.css'
const FeaturePage3 = () => {
    const features = [
        {
          title: "Sed ut perspiciatis",
          image: "../public/images/feature1.jpeg",
          description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
        },
        {
          title: "Lorem ipsum dolor",
          image: "../public/images/feature2.jpeg",
          description: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        },
        {
          title: "Nemo enim ipsam",
          image: "../public/images/feature3.jpeg",
          description: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        }
      ];
  return (
    <>
      <ReusableHeader Title={'Make your photos more stylish'}/>
      <div className="feature-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <img src={feature.image} alt={feature.title} className="feature-image" />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default FeaturePage3
