export default function Experience() {
    return (
      <div id="experience" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl mb-5">Experience</h2>
        <div className="max-w-prose mx-auto text-left">
          {/* Repeat this for each job you want to list */}
          <div className="mb-5">
            <h3 className="text-xl mb-1">Job Title - Company</h3>
            <p className="mb-1 text-gray-500">Start Date - End Date</p>
            <p>Short description of your responsibilities and achievements in the role...</p>
          </div>
        </div>
      </div>
    )
  }
  