import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import styles from "@/styles/Home.module.css"; // Reusing Home.module.css for general page styling
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Our Projects - Edans Construction Company</title>
        <meta name="description" content="Explore the portfolio of completed construction projects by Edans Construction Company" />
      </Head>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          <section className={`${styles.projectsSection} ${styles.sectionPadding}`}> {/* Reusing projectsSection for consistent styling */}
            <h2>Our Portfolio: Building Dreams into Reality</h2>
            <p className={styles.sectionDescription}>
              At Edans Construction Company, every project is a testament to our commitment to excellence, innovation, and meticulous craftsmanship. Explore our diverse portfolio of completed works that showcase our capabilities across various sectors.
            </p>
            <div className={styles.projectsGrid}> {/* Reusing projectsGrid for consistent layout */}
              {projects.map((project) => (
                <div className={styles.projectItem} key={project.id}>
                  {project.video ? (
                    <video controls muted loop playsInline className={styles.roundedImage} style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}>
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image src={project.image} alt={project.title} width={700} height={500} objectFit="cover" className={styles.roundedImage} />
                  )}
                  <div className={styles.projectInfo}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Link href={`/projects/${project.id}`} passHref>
                      <Button variant="secondary">View Details</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.sectionCta}>
              <Button href="/contact" variant="primary">Start Your Project</Button>
            </div>
          </section>

          <section className={`${styles.finalCtaSection} ${styles.sectionPadding}`}> {/* Reusing finalCtaSection */}
            <div className={styles.finalCtaContent}>
              <h2>Ready to Transform Your Vision?</h2>
              <p>Connect with our team to discuss your next project and discover how Edans Construction Company can bring your ideas to life.</p>
              <Button href="/contact" variant="secondary">Get a Free Consultation</Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
