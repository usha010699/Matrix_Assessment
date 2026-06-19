import "../Services/Services.css"
import serviceBg from '../../assets/3780749_77848.jpg'
const services = [
  {
    id: "01",
    title: "Operational Assessment",
    description:
      "Identify operational gaps and uncover opportunities for improvement."
  },
  {
    id: "02",
    title: "Risk Management",
    description:
      "Reduce vulnerabilities through proactive risk evaluation and mitigation."
  },
  {
    id: "03",
    title: "Performance Optimization",
    description:
      "Improve efficiency and maximize operational effectiveness."
  },
  {
    id: "04",
    title: "Business Resilience",
    description:
      "Build sustainable frameworks that support long-term growth."
  }
];

function Services() {
  return (
    <section
      className="services"
      style={{
        backgroundImage: `
      linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${serviceBg})
    `,
      }}
      id="services"
    >

      {/* <div className="section-header">
        <span>SERVICES</span>

        <h2>
          Capabilities That Drive
          Sustainable Value
        </h2>
      </div> */}

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            {/* <span className="service-number">
              {service.id}
            </span> */}

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;