export default function Projects() {
    return (
      <div id="projects" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl mb-5">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Repeat this div for each project */}
          <div className="bg-white shadow-md p-5">
            <h3 className="text-xl mb-2">Project Title</h3>
            <p className="mb-2">Brief description of the project...</p>
            <a href="#" className="text-blue-500">View Project</a>
          </div>
        </div>
      </div>
    )
  }
  