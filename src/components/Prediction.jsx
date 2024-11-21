import React, { useState } from "react";

const Prediction = () => {
  const [formData, setFormData] = useState({
    age: "",
    sleepDuration: "",
    qualityOfSleep: "",
    physicalActivityLevel: "",
    stressLevel: "",
    bmiCategory: "",
    heartRate: "",
    dailySteps: "",
    systolic: "",
    diastolic: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (Object.values(formData).some((value) => !value)) {
      setError("Please fill in all fields.");
      setResult(null);
      return;
    }

    setError("");

    // Prepare the data to match backend requirements
    const formattedData = {
      "Age": Number(formData.age),
      "Sleep Duration": parseFloat(formData.sleepDuration),
      "Quality of Sleep": Number(formData.qualityOfSleep),
      "Physical Activity Level": Number(formData.physicalActivityLevel),
      "Stress Level": Number(formData.stressLevel),
      "BMI Category": Number(formData.bmiCategory),
      "Heart Rate": Number(formData.heartRate),
      "Daily Steps": Number(formData.dailySteps),
      "Systolic": Number(formData.systolic),
      "Diastolic": Number(formData.diastolic),
    };
    console.log(formattedData)

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const resultData = await response.json();
        setResult(resultData); // Assuming 'prediction' is returned by the backend
        console.log(resultData)
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error in prediction. Please try again.");
      }
    } catch (err) {
      setError("There was an error connecting to the server. Please try again.");
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Disease Risk Prediction
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Form Inputs */}
          {[
            { label: "Age", name: "age", type: "number", placeholder: "Enter your age" },
            {
              label: "Sleep Duration (hours)",
              name: "sleepDuration",
              type: "number",
              placeholder: "Enter sleep duration",
            },
            {
              label: "Quality of Sleep (1-10)",
              name: "qualityOfSleep",
              type: "number",
              placeholder: "Enter quality of sleep",
            },
            {
              label: "Physical Activity Level",
              name: "physicalActivityLevel",
              type: "number",
              placeholder: "Enter physical activity level",
            },
            {
              label: "Stress Level (1-10)",
              name: "stressLevel",
              type: "number",
              placeholder: "Enter stress level",
            },
            {
              label: "BMI Category",
              name: "bmiCategory",
              type: "number",
              placeholder: "Enter BMI category",
            },
            {
              label: "Heart Rate (BPM)",
              name: "heartRate",
              type: "number",
              placeholder: "Enter heart rate",
            },
            {
              label: "Daily Steps",
              name: "dailySteps",
              type: "number",
              placeholder: "Enter daily steps",
            },
          ].map((field) => (
            <div key={field.name}>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                placeholder={field.placeholder}
              />
            </div>
          ))}

          {/* Blood Pressure Inputs */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Blood Pressure (Systolic/Diastolic)
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                id="systolic"
                name="systolic"
                value={formData.systolic}
                onChange={handleChange}
                className="w-1/2 px-3 py-2 border rounded"
                placeholder="Systolic"
              />
              <input
                type="number"
                id="diastolic"
                name="diastolic"
                value={formData.diastolic}
                onChange={handleChange}
                className="w-1/2 px-3 py-2 border rounded"
                placeholder="Diastolic"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 bg-blue-900 text-white px-4 py-2 mt-6 rounded hover:bg-blue-700"
          >
            Predict
          </button>
        </div>

        {/* Error and Result Messages */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {result && (
          <div className="mt-6 bg-green-100 p-4 rounded">
            <h3 className="text-xl font-bold mb-4">Prediction Results:</h3>
            <ul className="list-disc ml-6">
              {Object.entries(result).map(([key, value]) => (
                <li key={key} className="text-gray-700">
                  {key}:{" "}
                  <span
                    className={`font-bold ${
                      value ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {value ? "Yes" : "No"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </section>
  );
};

export default Prediction;
