import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlePredictionClick = () => {
    navigate("/prediction");
  };

  return (
    <section className="container mx-auto px-4 py-8 text-center ">
      <h2 className="text-4xl font-bold mb-4">Welcome to Disease Risk Assessment</h2>
      <p className="text-lg text-gray-700">
        Discover how genetics and lifestyle factors can predict disease risks.
        Explore our integrated model for comprehensive assessments.
      </p>
      
      <div className="mt-8">
        <button
          onClick={handlePredictionClick}
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Check your health
        </button>
      </div>

      {/* Functionality Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        

        {/* Functionality 2: Disease Prediction Models */}
        <div className="bg-gray-100 p-6 rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Disease Prediction Models</h3>
          <p className="text-gray-600">
            Our AI-powered models predict potential health risks using advanced data analytics.
          </p>
        </div>

        {/* Functionality 3: Lifestyle Recommendations */}
        <div className="bg-gray-100 p-6 rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Lifestyle Recommendations</h3>
          <p className="text-gray-600">
            Receive tailored recommendations to improve your overall well-being and reduce risks.
          </p>
        </div>

        {/* Functionality 1: Personalized Assistance */}
        <div className="bg-gray-100 p-6 rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Personalized Assistance</h3>
          <p className="text-gray-600">
            Receive dedicated guidance and support throughout your health journey, with personalized care to help you through your recovery process.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Home;
