import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/Home.module.css"; // Reusing Home.module.css for general page styling
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Edans Construction Company</title>
        <meta name="description" content="Learn more about Edans Construction Company" />
      </Head>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          <AnimateOnScroll>
            <section className={`${styles.aboutSection} ${styles.sectionPadding}`}> {/* Reusing aboutSection for consistent styling */}
              <div className={styles.aboutContent}>
                <h2>Our Story: Building a Legacy of Excellence in Ghana</h2>
                <p>
                  Edans Construction Company was born from a simple idea: to build better. To build with passion, with quality, and with the client at the heart of everything we do. From our roots in Ghana, we've grown into a leading name in the construction industry, known for turning ambitious visions into reality. We don't just build structures; we craft spaces that inspire and are built to last.
                </p>
                <p>
                  Our journey has been one of continuous growth and learning. We're always pushing the boundaries of what's possible, embracing sustainable practices, and building strong, lasting relationships with our clients and partners. Every project is a new opportunity to prove our commitment to precision, safety, and exceeding expectations. We're proud of the legacy we're building, one project at a time.
                </p>
                <Button href="/projects" variant="primary">See Our Portfolio</Button>
              </div>
              <div className={styles.aboutImage}>
                <Image
                  src="/edans-site.jpg" // Placeholder for an engaging image
                  alt="Edans Construction Company team meeting on site"
                  width={600}
                  height={400}
                  objectFit="cover"
                  className={styles.roundedImage}
                />
              </div>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section className={`${styles.servicesSection} ${styles.sectionPadding}`}> {/* Reusing servicesSection for consistent styling */}
              <h2>Our Core Values</h2>
              <div className={styles.servicesGrid}> {/* Reusing servicesGrid for consistent layout */}
                <div className={styles.serviceCard}>
                  <h3>Integrity</h3>
                  <p>Upholding the highest ethical standards and transparency in every interaction.</p>
                </div>
                <div className={styles.serviceCard}>
                  <h3>Excellence</h3>
                  <p>Committed to delivering superior quality and craftsmanship in every detail.</p>
                </div>
                <div className={styles.serviceCard}>
                  <h3>Innovation</h3>
                  <p>Embracing cutting-edge technologies and creative solutions for modern challenges.</p>
                </div>
                <div className={styles.serviceCard}>
                  <h3>Collaboration</h3>
                  <p>Fostering strong partnerships with clients, teams, and communities.</p>
                </div>
                <div className={styles.serviceCard}>
                  <h3>Sustainability</h3>
                  <p>Building for a greener future with environmentally responsible practices.</p>
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          <section className={`${styles.finalCtaSection} ${styles.sectionPadding}`}> {/* Reusing finalCtaSection */}
            <div className={styles.finalCtaContent}>
              <h2>Meet Our Expert Team</h2>
              <p>Our success is built on the expertise and dedication of our diverse team of professionals. Learn more about the people who make Edans Construction Company a leader in construction.</p>
              <Button href="/contact" variant="secondary">Contact Our Team</Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
