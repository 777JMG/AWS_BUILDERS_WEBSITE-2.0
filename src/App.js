import React, { useRef } from 'react';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const testimony = useRef(null);
  const orgChartRef = useRef(null);

  const [showModal, setShowModal] = React.useState(false);
  const [showAboutModal, setShowAboutModal] = React.useState(false);
  const [showTeamModal, setShowTeamModal] = React.useState(false);
  const [showEventsModal, setShowEventsModal] = React.useState(false);
  const [showFAQModal, setShowFAQModal] = React.useState(false);

  // modal states
  const [teamModalPage, setTeamModalPage] = React.useState('main'); // 'main' or 'officers'
  const [activeTeamSection, setActiveTeamSection] = React.useState('lead');

  // project teams
  const teamSections = [
    {
      key: 'lead',
      label: 'Project Lead',
      content: {
        title: 'Project Lead',
        leader: 'Ijed Luzele J. Yañez',
        leaderRole: 'AWS Builders Club, Project Lead ',
        members: [
          { name: 'Placeholder', role: 'Placeholder' },
          { name: 'Placeholder', role: 'Placeholder' },
          { name: 'Placeholder', role: 'Placeholder' },
          { name: 'Placeholder', role: 'Placeholder' }
        ]
      }
    },
    {
      key: 'leaders',
      label: 'Leaders',
      content: {
        title: 'Leaders',
        leaders: [
          { name: 'Josh Marco C. Goc-Ong', role: 'AWS Builder Club, Website Manager' },
          { name: 'James Nathaniel F. Tan', role: 'AWS Builder Club, Discord Community Manager' }
        ],
        members: [
          { name: 'Placeholder', role: 'Placeholder' },
          { name: 'Placeholder', role: 'Placeholder' }
        ]
      }
    },
    {
      key: 'cdt',
      label: 'Content and Design Team',
      content: {
        title: 'Content and Design Team',
        leader: 'Elykah A. Cascaro',
        leaderRole: 'AWS Builder Club, Lead Content Writer',
        members: [
          { name: 'Trixie Nin D. Canete', role: 'Graphic Designer' },
          { name: 'Zidane M. Pasaje', role: 'Flex Assistant' }
        ]
      }
    },
    {
      key: 'fet',
      label: 'Front-End Team',
      content: {
        title: 'Front-End Team',
        leader: 'Joshua Marc N. Masellones',
        leaderRole: 'AWS Builder Club, Lead Front-End Developer',
        members: [
          { name: 'Lance Rannielle J. Andres', role: 'Developer' },
          { name: 'Abe Jaylil M. Javier', role: 'Developer' },
          { name: 'Chass Clayton C. Estomo', role: 'Developer' }
        ]
      }
    },
    {
      key: 'act',
      label: 'AWS Cloud Team',
      content: {
        title: 'AWS Cloud Team',
        leader: 'Karyll Grace K. Bontuyan',
        leaderRole: 'AWS Builder Club, Lead Solutions Architect',
        members: [
          { name: 'Arabella L. Ortega', role: 'AWS Developer' }
        ]
      }
    },
    {
      key: 'mt',
      label: 'Moderation Team',
      content: {
        title: 'Moderation Team',
        leader: 'Renzi S. Albastro',
        leaderRole: 'AWS Builders Club, Lead Moderator',
        members: [
          { name: 'Gerald Andre C. Nagliba', role: 'Moderator' },
          { name: 'Kurt Arnyle C. Gadingan', role: 'Moderator' }
        ]
      }
    },
    {
      key: 'eet',
      label: 'Event & Engagement Team',
      content: {
        title: 'Event & Engagement Team',
        leader: 'Shanica B. Diaz',
        leaderRole: 'AWS Builders Club, Event Organizer',
        members: [
          { name: 'Beau Renfro A. Crieta', role: 'Event Organizer' },
          { name: 'Desiree Joy D. Bigot', role: 'Content/Resource Center' },
          { name: 'Jamril Maclain J. Parreño', role: 'Content/Resource Center' }
        ]
      }
    },
    {
      key: 'qat',
      label: 'Quality Assurance Team',
      content: {
        title: 'Quality Assurance Team',
        leader: 'Hezron A. Nallos',
        leaderRole: 'AWS Builders Club, QA Lead',
        members: [
          { name: 'James Virgil S. Co', role: 'QA Tester' },
          { name: 'John Bernard D. Mendoza', role: 'QA Tester' }
        ]
      }
    }
  ];

  // aws officers
/*  const awsOfficersSections = [
    {
      key: 'president',
      label: 'President',
      content: {
        title: 'President',
        leader: 'Ijed Luzele J. Yañez',
        leaderRole: 'AWS Builders Club, President',
        members: [
          { name: 'Placeholder', role: 'Placeholder' }
        ]
      }
    },
    {
      key: 'vicepresidentext',
      label: 'Vice President (External)',
      content: {
        title: 'Vice President (External)',
        leader: 'James Nathaniel F. Tan',
        leaderRole: 'AWS Builders Club, Vice President (External)',
        members: [
          { name: 'Placeholder', role: 'Placeholder' }
        ]
      }
    },
        {
      key: 'vicepresidentint',
      label: 'Vice President (Internal)',
      content: {
        title: 'Vice President (Internal)',
        leader: 'Josh Marco C. Goc-Ong',
        leaderRole: 'AWS Builders Club, Vice President (Internal)',
        members: [
          { name: 'Placeholder', role: 'Placeholder' }
        ]
      }
    },
    {
      key: 'secretary',
      label: 'Secretary',
      content: {
        title: 'Secretary',
        leader: 'Shanica B. Diaz',
        leaderRole: 'AWS Builders Club, Secretary',
        members: [
          { name: 'Placeholder', role: 'Placeholder' }
        ]
      }
    },
        {
      key: 'treasury',
      label: 'Treasury',
      content: {
        title: 'Treasury',
        leader: 'Karylle Grace K. Bontuyan',
        leaderRole: 'AWS Builders Club, Treasury',
        members: [
          { name: 'Placeholder', role: 'Placeholder' }
        ]
      }
    }
  ]; */

  const [activeOfficerSection, setActiveOfficerSection] = React.useState('president');

  const githubRepos = [
    { 
      name: "aws-related-stuff", 
      url: "https://github.com/",
      description: "Lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      issues: 0
    },
    { 
      name: "aws-related-stuff", 
      url: "https://github.com/",
      description: "lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus.",
      language: "Python",
      stars: 0,
      forks: 0,
      issues: 0
    },
    { 
      name: "aws-related-stuff", 
      url: "https://github.com/",
      description: "lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus.",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      issues: 0
    }
  ];

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutClick2 = (e) => {
    e.preventDefault();
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const handleAboutClick3 = (e) => {
    e.preventDefault();
    if (testimony.current) {
      testimony.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);
  const openAboutModal = () => setShowAboutModal(true);
  const closeAboutModal = () => setShowAboutModal(false);

  return (
    <div className="app-bg app-text app-font min-height flex-col">
      {/* main-navigation */}
      <nav className="navbar">
        <img
          src={require("./images/aws-builder-logo.png")}
          alt="AWS Builders Club Logo"
          className="navbar-logo"
          style={{ height: '48px' }}
        />
        <ul className="navbar-links">
          <li>
            <a href="#home" className="navbar-link" onClick={handleAboutClick2}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link" onClick={handleProjectsClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#aboutus" className="navbar-link" onClick={handleAboutClick}>
              About
            </a>
          </li>
          <li>
            <a href="#goals" className="navbar-link">
              Goals
            </a>
          </li>
              <li>
              <a
                href="#testimonies"
                className="navbar-link"
                onClick={e => {
                  e.preventDefault();
                  if (testimony.current) {
                    testimony.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Testimonies
              </a>
            </li>
          {/* dropdown */}
          <li className="navbar-dropdown-parent">
            <button
              className="navbar-link navbar-dropdown-toggle"
              onClick={e => {
                e.preventDefault();
                document.getElementById('dropdown-getstarted-main').classList.toggle('show');
              }}
              aria-haspopup="true"
              aria-expanded={document.getElementById('dropdown-getstarted-main')?.classList.contains('show')}
            >
              Get Started Today ▼
            </button>
            <div
              id="dropdown-getstarted-main"
              className="navbar-dropdown"
              onMouseLeave={() => document.getElementById('dropdown-getstarted-main').classList.remove('show')}
            >
              <a
                href="#teams"
                className="navbar-dropdown-link"
                onClick={e => {
                  e.preventDefault();
                  setShowTeamModal(true);
                  document.getElementById('dropdown-getstarted-main').classList.remove('show');
                }}
              >
                Meet the team
              </a>
              <a
                href="#events"
                className="navbar-dropdown-link"
                onClick={e => {
                  e.preventDefault();
                  setShowEventsModal(true);
                  document.getElementById('dropdown-getstarted-main').classList.remove('show');
                }}
              >
                Events
              </a>
              <a
                href="#faq"
                className="navbar-dropdown-link"
                onClick={e => {
                  e.preventDefault();
                  setShowFAQModal(true);
                  document.getElementById('dropdown-getstarted-main').classList.remove('show');
                }}
              >
                FAQ
              </a>
            </div>
          </li>
        </ul>
      </nav>

      {/* hero-section */}
      <section id="home" className="hero-section" ref={homeRef}>
        <h2 className="hero-title">Welcome to Ijed's Club</h2>
        <p className="hero-desc">
          Be part of a dynamic community at Mapúa MCM where students learn, collaborate, and innovate with AWS. Gain hands-on experience, build real projects, and jumpstart your cloud career with peers who share the same passion.
        </p>
        <div className="hero-buttons">
          <a
            href="https://discord.gg/UFGUPutKSR"
            className="hero-btn hero-btn-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Cloud Revolution
          </a>
          <a href="/archive" className="hero-btn hero-btn-orange" onClick={handleProjectsClick}>
            Projects
          </a>
        </div>
      </section>

      {/* about us */}
      <section id="aboutus" className="about-section" ref={aboutRef}>
        <h2 className="hero-title" style={{ marginBottom: '32px' }}>
          About Us
        </h2>
        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="highlight-card" style={{ flex: 1, marginRight: '32px' }}>
            <h4 className="highlight-card-title blue">About the Club</h4>
            <p className="highlight-card-desc">
              The AWS Builders Club at Mapúa MCM is a community of learners passionate about cloud technology, collaboration, and innovation. Open to all students, the club provides opportunities for hands-on learning, peer support, and career growth through projects, training, and knowledge-sharing events.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <button
              className="hero-btn hero-btn-blue"
              style={{ minWidth: '140px', padding: '12px 24px', fontSize: '1rem' }}
              onClick={openAboutModal}
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* readmore-modal */}
      {showAboutModal && (
        <div className="modal-overlay" onClick={closeAboutModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">About Us</h2>
              <button className="modal-close" onClick={closeAboutModal}>×</button>
            </div>
            <div style={{ padding: '16px 0' }}>
              <div style={{ marginBottom: '32px' }}>
                <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
                  Vision
                </h3>
                <p className="highlight-card-desc">
                  To build a strong presence in the Mapúa MCM community by showcasing our AWS projects and inspiring students to explore the power of cloud technologies.
                </p>
              </div>
              <div>
                <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
                  Mission
                </h3>
                <p className="highlight-card-desc">
                  To create a community of innovative, skilled students who are empowered to harness AWS projects and inspire students to explore the power of the cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* goals-sect */}
      <section id="goals" className="about-section">
        <h2 className="hero-title" style={{ marginBottom: '32px' }}>
          Our Goals
        </h2>
        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="about-block" style={{ marginBottom: '32px', width: '100%' }}>
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
              Hands-on Training and Skill Development
            </h3>
            <p className="highlight-card-desc">
              Develop hands-on cloud skills by participating in interactive AWS workshops, lab sessions, and community-led events.
            </p>
          </div>
          <div className="about-block" style={{ marginBottom: '32px', width: '100%' }}>
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
              Collaborative Projects And their Repositories
            </h3>
            <p className="highlight-card-desc">
              Build a strong community of learners by collaborating on real-world AWS cloud projects that foster teamwork, shared learning, and collective problem-solving.
            </p>
          </div>
          <div className="about-block" style={{ marginBottom: '32px', width: '100%' }}>
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
              Certification Support
            </h3>
            <p className="highlight-card-desc">
              Equip AWS Builders Club members with the learning tools and mentorship needed to earn AWS certifications and boost their cloud careers.
            </p>
          </div>
          <div className="about-block" style={{ marginBottom: '32px', width: '100%' }}>
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
              Industry Alignment
            </h3>
            <p className="highlight-card-desc">
              Keep pace with emerging cloud technologies and industry-relevant skills sought by today’s top employers.
            </p>
          </div>
          <div className="about-block" style={{ marginBottom: '32px', width: '100%' }}>
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
              Campus Impact
            </h3>
            <p className="highlight-card-desc">
              Help promote cloud-related activities and solutions in different departments around the campus.
            </p>
          </div>
          <div className="about-block" style={{ marginBottom: '32px', width: '100%' }}>
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
              Fundraising
            </h3>
            <p className="highlight-card-desc">
              Empower club growth by launching fundraising activities such as selling custom merchandise or organizing events.
            </p>
          </div>
          <div className="about-block" style={{ marginBottom: '0', width: '100%' }}>
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
              Mentorship and Peer Learning
            </h3>
            <p className="highlight-card-desc">
              Foster a culture of knowledge sharing by pairing experienced members with beginners.
            </p>
          </div>
        </div>
      </section>

      {/* testimonies-sect */}
      <section id="testimonies" className="testimony-section" ref={testimony}>
        <h2 className="hero-title" style={{ marginBottom: '32px' }}>
          Testimonies
        </h2>
        <div className="testimony-content" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: '24px',
          alignItems: 'start',
          padding: '0 16px'
        }}>
          <div className="testimony-block" style={{ 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{ 
              textAlign: 'justify', 
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '16px'
            }}>
              "It's about understanding cloud infrastructure and unlocking the ability to build scalable, secure, and globally accessible solutions. Whether you're a student working on a capstone project or a professional launching a startup, AWS gives you the tools to innovate without limits. AWS has become a necessity for a business to stay ahead and not struggle. Especially in a rapidly evolving industry."
            </p>
            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>— James Co</span>
            </div>
          </div>
          
          <div className="testimony-block" style={{ 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{ 
              textAlign: 'justify', 
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '16px'
            }}>
              "Learning AWS is important because it leads the cloud market and has become the industry standard. This creates better job opportunities and higher salaries. It offers strong tools for quick innovation and testing without significant initial costs, while also teaching basic cloud computing principles that are now essential in today's tech jobs."
            </p>
            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>— John Mendoza</span>
            </div>
          </div>
          
          <div className="testimony-block" style={{ 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{ 
              textAlign: 'justify', 
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '16px'
            }}>
              "Learning AWS opened my eyes to how modern businesses run on the cloud. It's not just theory—it's about applying what we learn to real systems that impact people's lives. AWS makes me feel prepared for the industry."
            </p>
            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>— Zidane Pasaje</span>
            </div>
          </div>
          
          <div className="testimony-block" style={{ 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{ 
              textAlign: 'justify', 
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '16px'
            }}>
              "Amazon Web Services (AWS) is essential in modern technology as it is the leading cloud platform used by businesses worldwide, giving you in-demand skills, better job opportunities, and the tools to innovate in today's tech-driven world. Students can benefit from honing their skills in cloud computing and gain hands-on experience that prepares them for real-world projects, making them more competitive and future-ready in the tech industry."
            </p>
            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>— Ijed Yañez</span>
            </div>
          </div>
          
          <div className="testimony-block" style={{ 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{ 
              textAlign: 'justify', 
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '16px'
            }}>
              "AWS has given me the chance to go beyond classroom learning and actually experience how cloud solutions are built. It's empowering to know I can apply these skills to both academic projects and future career opportunities."
            </p>
            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>— Trixie Cañete</span>
            </div>
          </div>
          
          <div className="testimony-block" style={{ 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{ 
              textAlign: 'justify', 
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '16px'
            }}>
              "For me, learning AWS is about adaptability. Since most companies now rely on the cloud, understanding AWS means you're ready for wherever technology takes us. It gives students like us a head start."
            </p>
            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>— Gerald Nagliba</span>
            </div>
          </div>
          
          <div className="testimony-block" style={{ 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{ 
              textAlign: 'justify', 
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '16px'
            }}>
              "AWS taught me how to think bigger. It's not just about coding—it's about creating scalable solutions that could actually serve thousands of users. That mindset is something every aspiring professional needs."
            </p>
            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>— Renzi Albastro</span>
            </div>
          </div>
          
          <div className="testimony-block" style={{ 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{ 
              textAlign: 'justify', 
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '16px'
            }}>
              "AWS makes learning feel relevant and future-proof. It's more than just earning a certification; it's about developing the confidence to tackle real-world problems with the right tools."
            </p>
            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>— Karyll Bontuyan</span>
            </div>
          </div>
          
          <div className="testimony-block" style={{ 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{ 
              textAlign: 'justify', 
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '16px'
            }}>
              "What I like about AWS is how it bridges theory and practice. You're not just imagining how systems work—you actually build and deploy them. That hands-on experience makes all the difference."
            </p>
            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>— Abe Javier</span>
            </div>
          </div>
          
          <div className="testimony-block" style={{ 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{ 
              textAlign: 'justify', 
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '16px'
            }}>
              "Learning AWS has been a turning point in how I approach technology. Instead of just completing programming assignments, I can now deploy real applications on the cloud, which makes my work feel more meaningful and practical. I realized I could actually build and deploy my own projects just like the professionals. It transformed my confidence as a student. Suddenly, I wasn't just learning theory, I was creating solutions that could scale to millions of users."
            </p>
            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>— Lance Andres</span>
            </div>
          </div>
          
          <div className="testimony-block" style={{ 
            minHeight: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{ 
              textAlign: 'justify', 
              lineHeight: '1.7',
              flex: '1',
              marginBottom: '16px'
            }}>
              "Learning AWS is essential for students because it gives them hands-on experience with cloud tools that power most modern apps and services. It helps them build scalable projects, understand real-world infrastructure, and stay competitive in a tech industry that's rapidly shifting. Learning AWS helped me understand how real-world apps run behind the scenes. As a graduating student, it gave me a serious edge in building cloud-based projects that actually reflect what companies use today."
            </p>
            <div style={{ textAlign: 'right', marginTop: 'auto' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>— Hezron Nallos</span>
            </div>
          </div>
        </div>
      </section>


      {/* org-chart*/}
      <section id="orgchart" className="org-chart-section" ref={orgChartRef}>
        <h2 className="section-title">Our Organization</h2>
        
        <div className="chart-container">
          {/* instructor */}
          <div className="instructor-level">
            <div className="instructor-card">
              <div className="instructor-name">Clyde Chester R. Balaman</div>
              <div className="instructor-role">Instructor</div>
            </div>
          </div>

          {/* connecting-lines */}
          <div className="connection-line vertical-main"></div>
          <div className="connection-line horizontal-officers"></div>

          {/* officers */}
          <div className="officers-level" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            width: '100%',
            maxWidth: '1200px',
            position: 'relative',
            justifyContent: 'center'
          }}>
            <div className="officer-card">
              <div className="officer-name">Ijed Luzele Yañez</div>
              <div className="officer-role">President</div>
            </div>
            <div className="officer-card">
              <div className="officer-name">James Nathaniel Tan</div>
              <div className="officer-role">Vice President (External)</div>
            </div>
            <div className="officer-card">
              <div className="officer-name">Josh Marco Goc-Ong</div>
              <div className="officer-role">Vice President (Internal)</div>
            </div>
            <div className="officer-card">
              <div className="officer-name">Shanica Diaz</div>
              <div className="officer-role">Secretary</div>
            </div>
            <div className="officer-card">
              <div className="officer-name">Karyll Grace Bontuyan</div>
              <div className="officer-role">Treasurer</div>
            </div>
          </div>

          {/* members */}
          <div className="members-level">
            <div className="members-title">Club Members</div>
            <div className="members-grid">
              <div className="member-card">
                <div className="member-name">Renzi Albastro</div>
                <div className="member-role">Lead Moderator</div>
              </div>
              <div className="member-card">
                <div className="member-name">Beau Renfro Crieta</div>
                <div className="member-role">Event Organizer</div>
              </div>
              <div className="member-card">
                <div className="member-name">Zidane Pasaje</div>
                <div className="member-role">Flex Assistant</div>
              </div>
              <div className="member-card">
                <div className="member-name">Lance Ranielle Andres</div>
                <div className="member-role">Developer</div>
              </div>
              <div className="member-card">
                <div className="member-name">Kurt Arnyle Gadingan</div>
                <div className="member-role">Moderator</div>
              </div>
              <div className="member-card">
                <div className="member-name">Gerald Andre Nagliba</div>
                <div className="member-role">Moderator</div>
              </div>
              <div className="member-card">
                <div className="member-name">Desiree Joy Bigot</div>
                <div className="member-role">Content/Resource Center</div>
              </div>
              <div className="member-card">
                <div className="member-name">Chass Clayton Estomo</div>
                <div className="member-role">Developer</div>
              </div>
              <div className="member-card">
                <div className="member-name">Hezron Nallos</div>
                <div className="member-role">QA Lead</div>
              </div>
              <div className="member-card">
                <div className="member-name">Trixie Nin Canete</div>
                <div className="member-role">Graphic Designer</div>
              </div>
              <div className="member-card">
                <div className="member-name">Abe Jaylil Javier</div>
                <div className="member-role">Developer</div>
              </div>
              <div className="member-card">
                <div className="member-name">Arabella L. Ortega</div>
                <div className="member-role">AWS Developer</div>
              </div>
              <div className="member-card">
                <div className="member-name">Jamril Maclain Parreño</div>
                <div className="member-role">Content/Resource Center</div>
              </div>
              <div className="member-card">
                <div className="member-name">Joshua Marc Masellones</div>
                <div className="member-role">Lead Front-End Developer</div>
              </div>
              <div className="member-card">
                <div className="member-name">James Virgil Co</div>
                <div className="member-role">QA Tester</div>
              </div>
              <div className="member-card">
                <div className="member-name">John Bernard Mendoza</div>
                <div className="member-role">QA Tester</div>
              </div>
              <div className="member-card">
                <div className="member-name">Elykah Cascaro</div>
                <div className="member-role">Content Writer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* highlights-sect */}
      <section className="highlights-section">
        <h3 className="highlights-title">Get Involved / Join Us</h3>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="highlight-card" style={{ marginBottom: '2rem' }}>
            <p className="highlight-card-desc" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Whether you're just starting your cloud journey or already exploring AWS, the AWS Builders' Club at Mapúa MCM welcomes you! By joining, you'll gain hands-on experience, connect with like-minded peers, and grow your skills through workshops, study sessions, and real projects. Together, we'll learn, collaborate, and shape our future careers in the cloud.
            </p>
            <a
              href="https://discord.gg/UFGUPutKSR"
              className="hero-btn hero-btn-blue"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
            >
              Join the Club!
            </a>
          </div>
        </div>
      </section>  

      {/* project-modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">GitHub Repositories</h2>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="repo-grid">
              {githubRepos.map(repo => (
                <div key={repo.url} className="repo-card">
                  <div className="repo-header">
                    <svg className="repo-icon" viewBox="0 0 16 16">
                      <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                    </svg>
                    <a
                      href={repo.url}
                      className="repo-name"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <p className="repo-description">{repo.description}</p>
                  <div className="repo-stats">
                    <div className="repo-stat">
                      <svg className="repo-stat-icon" viewBox="0 0 16 16">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
                      </svg>
                      {repo.stars}
                    </div>
                    <div className="repo-stat">
                      <svg className="repo-stat-icon" viewBox="0 0 16 16">
                        <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z"/>
                      </svg>
                      {repo.forks}
                    </div>
                    <div className="repo-stat">
                      <svg className="repo-stat-icon" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                      </svg>
                      {repo.issues}
                    </div>
                    <div className="repo-language">
                      <div
                        className="language-dot"
                        style={{
                          background:
                            repo.language === 'JavaScript' ? '#f1e05a' :
                            repo.language === 'Python' ? '#fbff00ff' :
                            repo.language === 'TypeScript' ? '#2b7489' :
                            '#4285f4'
                        }}
                      ></div>
                      {repo.language}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Meet the Team Modal */}
      {showTeamModal && (
        <div className="modal-overlay" onClick={() => setShowTeamModal(false)}>
          <div className="modal-content" style={{ maxWidth: '900px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Meet the Team</h2>
              <button className="modal-close" onClick={() => setShowTeamModal(false)}>×</button>
            </div>
            
            <div style={{ display: 'flex', gap: '32px', padding: '24px 0' }}>
              {/* Sidebar Navigation */}
              <div style={{
                background: 'var(--primary-blue)',
                borderRadius: '16px',
                padding: '24px 0',
                minWidth: '320px',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {teamSections.map(section => (
                  <button
                    key={section.key}
                    style={{
                      background: activeTeamSection === section.key ? '#0498eeff' : 'none',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 24px',
                      fontWeight: activeTeamSection === section.key ? 'bold' : 'normal',
                      margin: '0 24px 4px 24px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      opacity: activeTeamSection === section.key ? 1 : 0.85,
                      transition: 'background 0.2s'
                    }}
                    onClick={() => setActiveTeamSection(section.key)}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
              
              {/* Main Content */}
              <div style={{ flex: 1 }}>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '8px' }}>
                  {teamSections.find(s => s.key === activeTeamSection).content.title}
                </h2>
                
                {activeTeamSection === 'leaders'
                  ? teamSections.find(s => s.key === activeTeamSection).content.leaders.map((leader, idx) => (
                      <div key={idx} style={{ fontWeight: 'bold', color: '#e53935', marginBottom: '8px' }}>
                        {leader.name}
                        <div style={{ marginBottom: '16px', fontWeight: 'normal', color: '#222' }}>
                          • {leader.role}
                        </div>
                      </div>
                    ))
                  : (
                    <>
                      <div style={{ fontWeight: 'bold', color: '#e53935', marginBottom: '8px' }}>
                        {teamSections.find(s => s.key === activeTeamSection).content.leader}
                      </div>
                      <div style={{ marginBottom: '16px' }}>
                        • {teamSections.find(s => s.key === activeTeamSection).content.leaderRole}
                      </div>
                    </>
                  )
                }
                
                {activeTeamSection !== 'lead' && activeTeamSection !== 'leaders' &&
                  teamSections.find(s => s.key === activeTeamSection).content.members.length > 0 && (
                    <>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>MEMBERS</div>
                      <ul style={{ marginBottom: '24px', paddingLeft: '20px' }}>
                        {teamSections.find(s => s.key === activeTeamSection).content.members.map((member, idx) => (
                          <li key={idx}>
                            {member.name}
                            <span style={{ color: '#888', fontStyle: 'italic', marginLeft: '8px' }}>
                              {member.role}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      )}

      {/* events */}
      {showEventsModal && (
        <div className="modal-overlay" onClick={() => setShowEventsModal(false)}>
          <div className="modal-content" style={{ maxWidth: '800px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Events</h2>
              <button className="modal-close" onClick={() => setShowEventsModal(false)}>×</button>
            </div>
            
            <div style={{ padding: '24px 0' }}>
              {/* event-#1 */}
              <div style={{ 
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '24px',
                border: '1px solid #dee2e6',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: 'var(--secondary-blue)',
                    borderRadius: '50%',
                    marginRight: '12px'
                  }}></div>
                  <h3 style={{ 
                    margin: '0',
                    color: 'var(--primary-blue)',
                    fontSize: '1.4rem',
                    fontWeight: '700'
                  }}>
                    AWS Introduction Workshop & Career Talk
                  </h3>
                </div>
                
                <div style={{ 
                  background: 'rgba(74, 144, 226, 0.1)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  marginBottom: '16px',
                  display: 'inline-block'
                }}>
                  <span style={{ 
                    fontSize: '0.9rem',
                    color: 'var(--primary-blue)',
                    fontWeight: '600'
                  }}>
                    Week 8 (Sept 27) or Week 10 (Oct 11) • Auditorium • 80—90 participants
                  </span>
                </div>
                
                <p style={{ 
                  color: 'var(--text-dark)',
                  lineHeight: '1.6',
                  margin: '0 0 16px 0'
                }}>
                  Led by Sir Clyde and a guest speaker, this workshop introduces cloud computing, covers AWS services 
                  (EC2, S3, Lambda), and provides hands-on practice in the AWS console. Includes interactive demos, 
                  activities, and a Q&A session.
                </p>
                
                <div style={{
                  background: 'var(--accent-orange)',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                   ₱200 registration fee
                </div>
              </div>

              {/* event-#2 */}
              <div style={{ 
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #dee2e6',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: 'var(--accent-orange)',
                    borderRadius: '50%',
                    marginRight: '12px'
                  }}></div>
                  <h3 style={{ 
                    margin: '0',
                    color: 'var(--primary-blue)',
                    fontSize: '1.4rem',
                    fontWeight: '700'
                  }}>
                    AWS Study Group
                  </h3>
                </div>
                
                <div style={{ 
                  background: 'rgba(255, 153, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  marginBottom: '16px',
                  display: 'inline-block'
                }}>
                  <span style={{ 
                    fontSize: '0.9rem',
                    color: 'var(--accent-orange)',
                    fontWeight: '600'
                  }}>
                    Bi-weekly every Saturday •  Sept 20 — Nov 8 • Led by Josh, James, Ijed with Sir Clyde
                  </span>
                </div>
                
                <p style={{ 
                  color: 'var(--text-dark)',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Structured sessions covering AWS Cloud Fundamentals, Core Services, Security & Compliance, 
                  and Management Tools. Hands-on practice, peer collaboration, and guidance for AWS 
                  certification pathways.
                </p>
              </div>
              
              {/* additional-info */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(255, 153, 0, 0.05) 100%)',
                borderRadius: '8px',
                padding: '16px',
                marginTop: '24px',
                textAlign: 'center'
              }}>
                <p style={{ 
                  color: 'var(--text-light)',
                  fontSize: '0.9rem',
                  margin: '0',
                  fontStyle: 'italic'
                }}>
                  Stay tuned for our upcoming events!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

       {/* footer */}
      <footer className="footer">
        <div style={{ marginBottom: "16px" }}>
          <p>
            Contact us at: {""}
            <a
            href="mailto:placeholder@mcm.edu.ph"
            style={{ color: "#ff9900", textDecoration: "none", fontWeight: "bold"}}
            >
              placeholder@mcm.edu.ph
            </a>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "16px" }}>
          <a
            href="https://discord.gg/UFGUPutKSR"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: "#6200ffff", textDecoration: "none"}}
            >
              Discord
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: "#fa02d9ff", textDecoration: "none"}}
            >
              Instagram
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: "#4c95e9ff", textDecoration: "none"}}
            >
              LinkedIn
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: "#1344e2ff", textDecoration: "none"}}
            >
              Facebook
          </a>
          </div>
          <p style={{ fontStyle: "italic", marginBottom: "8px"}}>
            Let's build the future of cloud, together.
          </p>
          <p>&copy; 2025 AWS Builders Club</p>
          
      </footer>

      {/* faq-modal */}
      {showFAQModal && (
        <div className="modal-overlay" onClick={() => setShowFAQModal(false)}>
          <div className="modal-content" style={{ maxWidth: '500px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">FAQ</h2>
              <button className="modal-close" onClick={() => setShowFAQModal(false)}>×</button>
            </div>
            <div style={{ padding: '24px 0' }}>
              <ul style={{ paddingLeft: '20px', fontSize: '1.1rem' }}>
                <li>1. Placeholder</li>
                <li>2. Placeholder</li>
                <li>3. Placeholder</li>
                <li>4. Placeholder</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
