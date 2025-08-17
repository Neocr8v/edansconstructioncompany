import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "../../data/projects";

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Head>
        <title>{project.title} - Edans Construction Company</title>
        <meta name="description" content={project.description} />
      </Head>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          <section className={`${styles.projectsSection} ${styles.sectionPadding}`}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2>{project.title}</h2>
              {project.video ? (
                <video controls muted loop playsInline className={styles.roundedImage} style={{ width: '100%', objectFit: 'cover' }}>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image src={project.image} alt={project.title} width={700} height={500} objectFit="cover" className={styles.roundedImage} />
              )}
              <p style={{ marginTop: '2rem', textAlign: 'left' }}>{project.details}</p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/projects" passHref>
                  <Button variant="primary">Back to Projects</Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
