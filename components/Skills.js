export default function Skills() {
    return (
      <div id = "skills" className="py-20 bg-white text-center">
        <h2 className="text-4xl mb-5">Skills</h2>
        <div className="flex flex-wrap justify-center">
          {/* Repeat this for each skill you want to list */}
          <span className="m-2 inline-block bg-blue-500 text-white py-1 px-3 rounded-full">
            Skill Name
          </span>
        </div>
      </div>
    )
  }
  