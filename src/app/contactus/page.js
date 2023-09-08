import ContactCard from "../components/ContactCard";
import styles from '@/app/contactus/contact.module.css'
import ContactForm from "../components/ContactForm";

export default function page() {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <ContactCard />

      <section className={styles.contact_section}>
        <h2>We'd love to hear <span> from you </span></h2>
        <ContactForm />
      </section>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14320.763713732647!2d92.36626614096883!3d26.19046668815129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ace0b80ff6ac9%3A0x8843385bb15a540e!2sDharamtul%2C%20Assam!5e0!3m2!1sen!2sin!4v1694194644562!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={styles.mapping}referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
  )
}
