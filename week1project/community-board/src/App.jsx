import './App.css'

const App = () => {

  return (
    // header
    <div>
      {/* header */}
      <div className='header'>
        <div>
          <img src='src/assets/computer-science-header.png' />
        </div>
      </div>
      {/* title */}
      <h1 className='foodtitle'>Careers in Computer Science</h1>
      {/* message  */}
      <br></br>

      {/* card */}
      <div className='card-row'>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/software-engineering.png' style={{width: '50%', textAlign: 'center'}} />
            <h2><b>Software Engineering</b></h2>
            <p>Design, Develop, Test, and Maintain Applications</p>
            <a href='https://www.coursera.org/articles/software-engineer?msockid=248dfa436fac6f2b0fbdef7d6e6b6e31'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/software-dev.jpg' style={{width: '50%', textAlign: 'center'}} />
            <h2><b>Software Developer</b></h2>
            <p>Design & Build Computer Programs</p>
            <a href='https://www.computerscience.org/careers/software-developer/'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
      </div>

      <div className='card-row'>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/com-info-scientist.png' style={{width: '50%', textAlign: 'center'}} />
            <h2><b>Computer and Information Research Scientist</b></h2>
            <p>Conduct Advanced Research in Computer Science</p>
            <a href='https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/web-dev.jpg' style={{width: '50%', textAlign: 'center'}} />
            <h2><b>Full-Stack Web Developer</b></h2>
            <p>Front-end and Back-end of Web Development</p>
            <a href='https://www.coursera.org/articles/full-stack-developer?msockid=248dfa436fac6f2b0fbdef7d6e6b6e31'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
      </div><div className='card-row'>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/info-security-analyst.jpg' style={{width: '50%', textAlign: 'center'}} />
            <h2><b>Information Security Analyst</b></h2>
            <p>Protect the Computer Networks</p>
            <a href='https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/database-admin.png' style={{width: '50%', textAlign: 'center'}} />
            <h2><b>Database Administrator</b></h2>
            <p>Store & Maintain Information</p>
            <a href='https://www.indeed.com/career-advice/finding-a-job/what-is-a-database-administrator'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
      </div><div className='card-row'>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/digital-designer.jpg' style={{width: '50%', textAlign: 'center'}} />
            <h2><b>Digital Designer</b></h2>
            <p>Create Visual Content</p>
            <a href='https://www.coursera.org/articles/digital-designer?msockid=248dfa436fac6f2b0fbdef7d6e6b6e31'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/com-network.jpg' style={{width: '50%', textAlign: 'center', borderRadius: '8px'}} />
            <h2><b>Computer Network Architect</b></h2>
            <p>Design & Manage Data Communication Networks</p>
            <a href='https://www.indeed.com/career-advice/finding-a-job/what-is-network-architect'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
      </div><div className='card-row'>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/tech-support.png' style={{width: '50%', textAlign: 'center', borderRadius: '8px'}} />
            <h2><b>Computer Support Specialist</b></h2>
            <p>Provide Technical Assistance</p>
            <a href='https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/business-analyst.jpg' style={{width: '50%', textAlign: 'center', borderRadius: '8px'}} />
            <h2><b>Business Analyst</b></h2>
            <p>Use Data to Form Business Insights</p>
            <a href='https://www.coursera.org/articles/what-does-a-business-analyst-do-and-how-to-become-one?msockid=248dfa436fac6f2b0fbdef7d6e6b6e31'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
      </div><div className='card-row'>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/vid-game-designer.jpg' style={{width: '50%', textAlign: 'center', borderRadius: '8px'}} />
            <h2><b>Game Developer</b></h2>
            <p>Transform Game Concepts into Playable Realities</p>
            <a href='https://www.coursera.org/articles/game-developer?msockid=248dfa436fac6f2b0fbdef7d6e6b6e31'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/app-dev.jpg' style={{width: '50%', textAlign: 'center', borderRadius: '8px'}} />
            <h2><b>Application Developer</b></h2>
            <p>Design, Create, Deploy, and Update Programs</p>
            <a href='https://www.indeed.com/career-advice/finding-a-job/application-developer'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
      </div><div className='card-row'>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/cloud-engineer.jpg' style={{width: '50%', textAlign: 'center', borderRadius: '8px'}} />
            <h2><b>Cloud Engineer</b></h2>
            <p>Build & Maintain Cloud Structure</p>
            <a href='https://www.coursera.org/articles/what-is-a-cloud-engineer?msockid=248dfa436fac6f2b0fbdef7d6e6b6e31'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
        <div className='card-column'>
          <div className='card'>
            <img src='src/assets/data-scientist.jpg' style={{width: '50%', textAlign: 'center', borderRadius: '8px'}} />
            <h2><b>Data Scientist</b></h2>
            <p>Use Data to Understand & Explain Phenomena</p>
            <a href='https://www.coursera.org/articles/what-is-a-data-scientist?msockid=248dfa436fac6f2b0fbdef7d6e6b6e31'><button className='learn-more-btn'>Learn More</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
