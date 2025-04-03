export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">Resume</h2>
        <div className="flex justify-center">
          <a
            href="/Rishikesh_Khot_Resume.pdf"
            download
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  )
}

