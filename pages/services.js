import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import styles from "@/styles/Home.module.css"; // Reusing Home.module.css for general page styling

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Edans Construction Company</title>
        <meta name="description" content="Explore the comprehensive construction services offered by Edans Construction Company" />
      </Head>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          {/* Services Hero Section */}
          <section className={styles.servicesHeroSection}>
            <Image
              src="/crane.jpg" 
              alt="Our Services"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              className={styles.heroBackground}
            />
            <div className={styles.heroImageOverlay}></div>
            <div className={styles.heroContent}>
              <h1>Our Services</h1>
            </div>
          </section>

          <section className={`${styles.servicesSection} ${styles.sectionPadding}`}> {/* Reusing servicesSection for consistent styling */}
            <h2>Comprehensive Construction Solutions</h2>
            <p className={styles.sectionDescription}>
              Edans Construction Company provides a full spectrum of construction services, meticulously tailored to meet the unique demands of each project. Our expertise ensures exceptional results from concept to completion.
            </p>
            <div className={styles.servicesGrid}> {/* Reusing servicesGrid for consistent layout */}
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
              <Button href="/contact" variant="primary">Request a Service Quote</Button>
            </div>
          </section>

          <section className={`${styles.finalCtaSection} ${styles.sectionPadding}`}> {/* Reusing finalCtaSection */}
            <div className={styles.finalCtaContent}>
              <h2>Your Vision, Our Expertise.</h2>
              <p>Let's collaborate to bring your next construction project to life with unparalleled quality and efficiency.</p>
              <Button href="/contact" variant="secondary">Get in Touch Today</Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
