import React from 'react'
import '../Framework/Framework.css'
import serviceBg from '../../assets/3780749_77848.jpg'
import img1 from "../../assets/10.jpg"
import img2 from "../../assets/11.avif"
import img3 from "../../assets/12.avif"
import img4 from "../../assets/13.jpg"

function Framework() {
  const frameworkSteps = [
    {
      id: "01",
      title: "Assess",
      image: img1,
      description:
        "Evaluate operational challenges, risks, and opportunities."
    },
    {
      id: "02",
      title: "Analyze",
      image: img2,
      description:
        "Transform findings into actionable intelligence."
    },
    {
      id: "03",
      title: "Optimize",
      image: img3,
      description:
        "Implement strategies that improve performance."
    },
    {
      id: "04",
      title: "Generate Value",
      image: img4,
      description:
        "Deliver measurable outcomes and sustainable growth."
    }
  ];
  return (
    <div>
      <section className="framework"
        style={{
          backgroundImage: `
           linear-gradient(
             rgba(0, 0, 0, 0.5),
             rgba(0, 0, 0, 0.5)
           ),
           url(${serviceBg})
         `,
        }}>

      
 

  <div className="framework-grid">

        {frameworkSteps.map((step) => (
          <div className="framework-card" key={step.id} >

            <div className="step-number">
              {step.id}
            </div>

            <img className="step-image" src={step.image} alt={step.title} />

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}

      </div>

    </section>
    </div >
  )
}

export default Framework