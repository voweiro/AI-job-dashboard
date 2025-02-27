export default function About() {
    return (
      <div className="max-w-5xl mx-auto py-16 px-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-900">About AI Job Match</h1>
        <p className="text-center text-gray-700 mt-3 text-lg">
          AI Job Match is an intelligent job search platform that connects job seekers with the best job opportunities based on their skills and experience.
        </p>
  
        {/* ✅ Mission Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 mt-3">
            Our mission is to revolutionize the hiring process by leveraging artificial intelligence to provide precise job matches and career growth insights.
          </p>
          <img src="/mission.jpg" alt="Mission" className="mx-auto mt-6 w-full md:w-2/3 rounded-lg shadow-lg" />
        </div>
  
        {/* ✅ Why Choose Us Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center text-gray-900">Why Choose AI Job Match?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 bg-blue-100 rounded-lg shadow-md text-center">
              <img src="/ai-icon.svg" alt="AI Matching" className="mx-auto w-12 h-12" />
              <h3 className="text-lg font-semibold mt-4">AI-Powered Job Matching</h3>
              <p className="text-gray-700 mt-2">We use AI to connect you with the best opportunities based on your skills.</p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md text-center">
              <img src="/growth-icon.svg" alt="Career Growth" className="mx-auto w-12 h-12" />
              <h3 className="text-lg font-semibold mt-4">Career Growth Insights</h3>
              <p className="text-gray-700 mt-2">Access salary trends and skill recommendations to boost your career.</p>
            </div>
            <div className="p-6 bg-yellow-100 rounded-lg shadow-md text-center">
              <img src="/resume-icon.svg" alt="Smart Resume" className="mx-auto w-12 h-12" />
              <h3 className="text-lg font-semibold mt-4">Smart Resume Analysis</h3>
              <p className="text-gray-700 mt-2">Get AI-driven feedback to improve your resume and increase interview chances.</p>
            </div>
          </div>
        </div>
  
        {/* ✅ Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Join Thousands of Job Seekers Today</h2>
          <p className="text-gray-600 mt-3">Take the next step in your career with AI-powered job matching.</p>
          <a href="/jobs">
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Find Your Dream Job
            </button>
          </a>
        </div>
      </div>
    );
  }
  