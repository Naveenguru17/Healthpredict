const About = () => (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">About the Project</h2>
      <p className="text-gray-700 leading-7">
        This project aims to create an integrated prediction model that assesses 
        disease risks by analyzing both genetic data and lifestyle factors. 
        Our mission is to provide personalized insights into health risks.
      </p>
      <div className="mt-4">
        <ul className="list-disc pl-6">
          <li>Analyze genetic predispositions</li>
          <li>Incorporate lifestyle habits like diet and exercise</li>
          <li>Provide actionable health recommendations</li>
        </ul>
      </div>
    </section>
  );
  
  export default About;
  