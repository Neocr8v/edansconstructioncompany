import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import styles from "@/styles/Home.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Edans Construction Company</title>
        <meta name="description" content="Get in touch with Edans Construction Company for your construction needs." />
      </Head>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          <section className={`${styles.sectionPadding}`}>
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
              <h2 className={styles.sectionTitle}>Get in Touch: Let's Build Together</h2>
              <p className={styles.sectionDescription}>
                We'd love to hear from you! Whether you have a question about our services, need a detailed quote, or want to discuss a potential partnership, our team is ready to assist you. Reach out to us through the form below or directly via our contact details.
              </p>
            </div>
            <div className={styles.contactContainer}>
              <div style={{ flex: 1 }}>
                <div className={styles.contactInfo}>
                  <p><strong>Phone:</strong> <a href="tel:+233551594206">+233 55 159 4206</a></p>
                  <p><strong>Email:</strong> <a href="mailto:@edansconstructioncompany@gmail.com">edansconstructioncompany@gmail.com</a></p>
                  <p><strong>Address:</strong> Aburi, Ghana</p>
                  <p><strong>Business Hours:</strong> Mon - Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <form className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message:</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                  </div>
                  <Button type="submit" variant="primary">Send Message</Button>
                </form>
              </div>
            </div>
            <br />
          </section>

          <section className={`${styles.finalCtaSection} ${styles.sectionPadding}`}>
            <div className={styles.finalCtaContent}>
              <h2>Visit Our Office</h2>
              <p>We welcome you to visit our office during business hours to discuss your project in person.</p>
              <div style={{ width: '100%', height: '300px', backgroundColor: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', marginTop: '2rem' }}>
                <p style={{ color: '#666', fontSize: '1.2rem' }}>Map Placeholder</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}