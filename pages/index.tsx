import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Edans Construction Company - Building Excellence</title>
        <meta name="description" content="Edans Construction Company - Crafting visionary spaces with precision and passion." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1>Crafting Visionary Spaces with Precision and Passion.</h1>
              <p>Edans Construction Company. transforms ambitious ideas into architectural masterpieces, delivering unparalleled quality and innovation.</p>
              <div className={styles.heroCta}>
                <Button href="/projects" variant="primary">Explore Our Work</Button>
                <Button href="/contact" variant="secondary">Get a Consultation</Button>
              </div>
            </div>
            <div className={styles.heroImageOverlay}></div>
            <Image
              src="/consbanner.jpg"
              alt="Modern architectural building under construction"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              className={styles.heroBackground}
            />
          </section>

          {/* About Us Section */}
          <AnimateOnScroll>
            <section className={styles.aboutSection}>
              <div className={styles.aboutContent}>
                <h2 className={styles['heading-left']}>About Edans Construction Company</h2>
                <p>
                  With a legacy built on integrity and innovation, Edans Construction Company stands at the forefront of modern construction. Our dedicated team of experts combines cutting-edge techniques with timeless craftsmanship to deliver projects that not only meet but exceed expectations. We are committed to sustainable practices and client-centric solutions, ensuring every build is a testament to our unwavering pursuit of excellence.
                </p>
                <Button href="/about" variant="primary">Learn More About Us</Button>
              </div>
              <div className={styles.aboutImage}>
                <Image
                  src="/contractor.jpg"
                  alt="Construction team collaborating on site"
                  layout="fill"
                  objectFit="cover"
                  className={styles.roundedImage}
                />
              </div>
            </section>
          </AnimateOnScroll>

          {/* What We Do Section */}
          <AnimateOnScroll>
            <section className={styles.servicesSection}>
              <h2>What We Do</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <Image src="/icon-residential.svg" alt="General Construction Icon" width={60} height={60} />
                  <h3>General Construction</h3>
                  <p>We offer comprehensive general construction services, managing projects from initial concept to final completion with expertise and precision.</p>
                </div>
                <div className={styles.serviceCard}>
                  <Image src="/monbag.svg" alt="Land Sales Icon" width={60} height={60} />
                  <h3>Buying & Selling of Land</h3>
                  <p>Our services include the strategic acquisition and sale of land, providing valuable opportunities for development and investment.</p>
                </div>
                <div className={styles.serviceCard}>
                  <Image src="/compass.svg" alt="Architectural Drawings Icon" width={60} height={60} />
                  <h3>Architectural Drawings</h3>
                  <p>We provide expert architectural drawing services, transforming your visions into detailed and functional designs ready for construction.</p>
                </div>
                <div className={styles.serviceCard}>
                  <Image src="/dcs.svg" alt="Surveying Icon" width={60} height={60} />
                  <h3>Surveying & Land Documentation</h3>
                  <p>We conduct precise land surveying and handle all necessary documentation, ensuring legal compliance and accurate project planning.</p>
                </div>
                <div className={styles.serviceCard}>
                  <Image src="/projmanage.svg" alt="Project Management Icon" width={60} height={60} />
                  <h3>Construction Project Management</h3>
                  <p>Efficiently overseeing all phases of your construction project, ensuring timely completion and budget adherence.</p>
                </div>
                <div className={styles.serviceCard}>
                  <Image src="/depot.svg" alt="Infrastructure Icon" width={60} height={60} />
                  <h3>Infrastructure Development</h3>
                  <p>Developing essential infrastructure projects, including roads, bridges, and public utilities, to support community growth.</p>
                </div>
              </div>
              <div className={styles.sectionCta}>
                <Button href="/services" variant="secondary">View All Services</Button>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Featured Projects Section */}
          <AnimateOnScroll>
            <section className={styles.projectsSection}>
              <h2>Showcasing Our Craft</h2>
              <div className={styles.projectsGrid}>
                <div className={styles.projectItem}>
                  <Image src="/villa.jpg" alt="Luxury Villa Construction" width={700} height={500} objectFit="cover" className={styles.roundedImage} />
                  <div className={styles.projectInfo}>
                    <h3>The Grand Residence</h3>
                    <p>A bespoke luxury villa, meticulously crafted with sustainable materials and smart home technology.</p>
                    <Button href="/projects" variant="primary">View Project</Button>
                  </div>
                </div>
                <div className={styles.projectItem}>
                  <Image src="/office.jpg" alt="Modern Office Complex" width={700} height={500} objectFit="cover" className={styles.roundedImage} />
                  <div className={styles.projectInfo}>
                    <h3>Metropolitan Business Hub</h3>
                    <p>A state-of-the-art commercial complex designed for efficiency and collaborative workspaces.</p>
                    <Button href="/projects" variant="primary">View Project</Button>
                  </div>
                </div>
                <div className={styles.projectItem}>
                  <Image src="/retail.jpg" alt="Urban Retail Space" width={700} height={500} objectFit="cover" className={styles.roundedImage} />
                  <div className={styles.projectInfo}>
                    <h3>The Urban Retail Gallery</h3>
                    <p>A vibrant retail destination, blending modern design with functional commercial spaces.</p>
                    <Button href="/projects" variant="primary">View Project</Button>
                  </div>
                </div>
              </div>
              <div className={styles.sectionCta}>
                <Button href="/projects" variant="secondary">Discover All Projects</Button>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Call to Action Section */}
          <section className={styles.finalCtaSection}>
            <div className={styles.finalCtaContent}>
              <h2>Ready to Build Your Future?</h2>
              <p>Partner with Edans Construction Company for unparalleled expertise and a commitment to bringing your vision to life.</p>
              <Button href="/contact" variant="primary">Start Your Project Today</Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}