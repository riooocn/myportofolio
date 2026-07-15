import styles from './about.module.css'

export const metadata = {
  title: 'About | David Rio',
  description: 'About David Rio - Full Stack Developer',
}

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>About Me</h1>
      </div>

      <div className={styles.grid}>
        {/* Left Column */}
        <div>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Who am I?</h2>
            <p className={styles.text}>
              I am a passionate Full Stack Web Developer with experience in designing and developing modern web applications from concept to deployment. I specialize in building responsive, 
              scalable, and user-friendly applications using Laravel, Next.js, React, Vue.js, and CodeIgniter. I am proficient in PHP, JavaScript, Python, and Java, with MySQL as my primary 
              database management system. To enhance productivity and streamline development, I also leverage AI-assisted tools such as Google Antigravity IDE, Figma AI, ChatGPT, and Claude 
              while maintaining clean, efficient, and maintainable code.
            </p>
            <p className={styles.text}>
              Beyond web development, I have a strong interest in data-related fields. I have experience to be a Data Analyst and Scientist include data preprocessing, machine learning modeling, and data visualization using Python, 
              along with foundational Data Engineering skills such as developing simple ETL pipelines and writing efficient SQL queries for data extraction and transformation. I am comfortable 
              working with tools including Visual Studio Code, Google Antigravity IDE, MySQL Workbench, XAMPP, Laravel Herd, Git, Microsoft Office, and Google Workspace. I enjoy continuously 
              learning new technologies and building practical software solutions that deliver real value to users and businesses.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <ul className={styles.timeline}>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDate}>2026</div>
                <div className={styles.timelineTitle}>"Rencana Karierku" Project - Full Stack Engineer</div>
                <div className={styles.timelineDescription}>Developed Rencana Karierku, a web-based career planning and
                   self-assessment platform for high school students using Laravel, Tailwind CSS, and MySQL. Built the application 
                   as a full-stack developer, including participant and admin dashboards, role management, CRUD modules for 
                   assessments and administrators, and a database system to store participants' assessment responses and career planning data.
                </div>
              </li>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDate}>2026</div>
                <div className={styles.timelineTitle}>Website Company Profile Project - PT. Satria Lintas Intermoda</div>
                <div className={styles.timelineDescription}>Developed a company profile website for PT. Satria Lintas Intermoda, 
                  a sea freight logistics company, using WordPress. The website showcases the company's services and profile, 
                  and was submitted to Google Search Console to improve search engine indexing and online visibility.
                </div>
              </li>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDate}>2024 - 2025</div>
                <div className={styles.timelineTitle}>Lecturer Research Project - Student Study Sustainability Detection System</div>
                <div className={styles.timelineDescription}>Collaborated with a university lecturer to develop a student study sustainability 
                  detection system using Deep Learning techniques. The project focused on applying Convolutional Neural Networks (CNN) to identify 
                  students at risk of dropping out based on academic performance data. The system was developed using Python in Google Colab, 
                  covering data preprocessing, model training, evaluation, and performance analysis.
                </div>
              </li>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDate}>2024 - 2025</div>
                <div className={styles.timelineTitle}>Indonesian Baptist Youth Conference (IBYC) - IT & Database</div>
                <div className={styles.timelineDescription}>Managed and maintained participant data using SQL databases while 
                  supporting data requests from the Membership Division. Monitored the online registration system, 
                  reported website issues and bugs to the National Church Governing Board as the system owner, and helped ensure data accuracy 
                  and smooth registration operations throughout the event.
                </div>
              </li>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDate}>2023 - 2024</div>
                <div className={styles.timelineTitle}>PT. Kanisius - Front End Engineer</div>
                <div className={styles.timelineDescription}>Developed a web-based permit management system for employees and security staff, 
                  covering leave requests and lost item reporting. The application was built using CodeIgniter 3 and Bootstrap while 
                  collaborating with a university development team using GitHub and Visual Studio Code to implement features, resolve issues, 
                  and improve the overall user experience.
                </div>
              </li>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDate}>2023 - 2024</div>
                <div className={styles.timelineTitle}>E-Commerce Project - Full Stack Engineer</div>
                <div className={styles.timelineDescription}>Developed a web-based e-commerce application as an academic project using Laravel, 
                  Tailwind CSS, and MySQL. The system included core features such as user authentication, product management, shopping cart, 
                  and order management, while the payment gateway module was intentionally excluded as it was outside the project scope.
                </div>
              </li>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDate}>2024</div>
                <div className={styles.timelineTitle}>Website Kost Omah Agatha Yogyakarta - Web Developer</div>
                <div className={styles.timelineDescription}>Developed a responsive company profile and landing page website for 
                  Kost Omah Agatha using the Laravel framework. The website was designed to introduce the boarding house, present its 
                  facilities and room information, and provide an integrated email contact feature that allows prospective tenants to 
                  communicate directly with the owner.
                </div>
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Hobbies</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>Vibe Coding</li>
              <li className={styles.listItem}>Reading Tech Blogs</li>
              <li className={styles.listItem}>Playing Guitar</li>
              <li className={styles.listItem}>Traveling</li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <ul className={styles.timeline}>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDate}>2022 - 2026</div>
                <div className={styles.timelineTitle}>Bachelor of Computer Science</div>
                <div className={styles.timelineDescription}>Sanata Dharma University. Graduated with Honors. Focused on Software Engineering and Web Technologies. Graduated with a final GPA score of 3.82</div>
              </li>
            </ul>
            <ul className={styles.timeline}>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDate}>2019 - 2022</div>
                <div className={styles.timelineTitle}>Senior High School</div>
                <div className={styles.timelineDescription}>Kristen Kalam Kudus Senior High School. Completed the Science (IPA) program and graduated with a final academic score of 84.83.</div>
              </li>
            </ul>
            <ul className={styles.timeline}>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDate}>2016 - 2019</div>
                <div className={styles.timelineTitle}>Junior High School</div>
                <div className={styles.timelineDescription}>Kristen Kalam Kudus Junior High School. Graduated with a final academic score of 84.83</div>
              </li>
            </ul>
            <ul className={styles.timeline}>
              <li className={styles.timelineItem}>
                <div className={styles.timelineDate}>2010 - 2016</div>
                <div className={styles.timelineTitle}>Elementary School</div>
                <div className={styles.timelineDescription}>Kristen Manahan Elementary School. Graduated with a final academic score of 84.83.</div>
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.skillsContainer}>
              <span className={styles.skillBadge}>Laravel</span>
              <span className={styles.skillBadge}>Tailwind CSS</span>
              <span className={styles.skillBadge}>PHP</span>
              <span className={styles.skillBadge}>MySQL</span>
              <span className={styles.skillBadge}>Git</span>
              <span className={styles.skillBadge}>JavaScript</span>
              <span className={styles.skillBadge}>TypeScript</span>
              <span className={styles.skillBadge}>React</span>
              <span className={styles.skillBadge}>Vue.js</span>
              <span className={styles.skillBadge}>Next.js</span>
              <span className={styles.skillBadge}>Node.js</span>
              <span className={styles.skillBadge}>Data Engineer</span>
              <span className={styles.skillBadge}>Data Science</span>
              <span className={styles.skillBadge}>Data Analyst</span>
              <span className={styles.skillBadge}>Machine Learning</span>
              <span className={styles.skillBadge}>Recommender System</span>
              <span className={styles.skillBadge}>Python</span>
              <span className={styles.skillBadge}>Pandas</span>
              <span className={styles.skillBadge}>NumPy</span>
              <span className={styles.skillBadge}>Sklearn</span>
              <span className={styles.skillBadge}>CNN</span>
              <span className={styles.skillBadge}>IT Support</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
