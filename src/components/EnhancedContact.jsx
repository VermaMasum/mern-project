import React, { useState } from 'react';

const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="contact-section section-enhanced" id="contact">
      <div className="container">
        <div className="contact-content scroll-reveal">
          <h2 className="heading-secondary text-center">Get In Touch</h2>
          <p className="text-center text-large" style={{ marginBottom: '3rem' }}>
            We'd love to hear from you. Whether you have a question about our products, 
            pricing, or anything else, our team is ready to answer all your questions.
          </p>

          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h3 className="heading-tertiary">Contact Information</h3>
              
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Our Location</h4>
                  <p>Grass Hawk Technologies<br />
                  1234 Innovation Drive<br />
                  Agricultural Park, CA 90210</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Phone Numbers</h4>
                  <p>Sales: <a href="tel:+1-800-GRASS-01">+1 (800) GRASS-01</a><br />
                  Support: <a href="tel:+1-800-GRASS-02">+1 (800) GRASS-02</a><br />
                  Emergency: <a href="tel:+1-555-123-4567">+1 (555) 123-4567</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h4>Email Addresses</h4>
                  <p>General: <a href="mailto:info@grasshawk.com">info@grasshawk.com</a><br />
                  Sales: <a href="mailto:sales@grasshawk.com">sales@grasshawk.com</a><br />
                  Support: <a href="mailto:support@grasshawk.com">support@grasshawk.com</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                  Saturday: 9:00 AM - 4:00 PM PST<br />
                  Sunday: Closed</p>
                </div>
              </div>

              <div className="social-links">
                <h4>Connect With Us</h4>
                <div className="social-icons">
                  <a href="https://facebook.com/grasshawk" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span>Facebook</span>
                  </a>
                  <a href="https://twitter.com/grasshawk" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span>Twitter</span>
                  </a>
                  <a href="https://linkedin.com/company/grasshawk" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://instagram.com/grasshawk" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3 className="heading-tertiary">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    rows="5"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitMessage && (
                  <div className="submit-message">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Contact Sections */}
          <div className="additional-info scroll-reveal">
            <h3 className="heading-tertiary text-center">Additional Ways to Reach Us</h3>
            
            <div className="info-grid">
              <div className="info-card card">
                <h4>Wholesale Inquiries</h4>
                <p>For bulk orders and wholesale pricing:</p>
                <a href="mailto:wholesale@grasshawk.com">wholesale@grasshawk.com</a>
                <a href="tel:+1-800-GRASS-03">+1 (800) GRASS-03</a>
              </div>

              <div className="info-card card">
                <h4>Technical Support</h4>
                <p>For product support and troubleshooting:</p>
                <a href="mailto:tech@grasshawk.com">tech@grasshawk.com</a>
                <a href="tel:+1-800-GRASS-04">+1 (800) GRASS-04</a>
              </div>

              <div className="info-card card">
                <h4>Partnership Opportunities</h4>
                <p>For business partnerships and collaborations:</p>
                <a href="mailto:partnerships@grasshawk.com">partnerships@grasshawk.com</a>
              </div>

              <div className="info-card card">
                <h4>Media & Press</h4>
                <p>For media inquiries and press releases:</p>
                <a href="mailto:media@grasshawk.com">media@grasshawk.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin: 2rem 0;
        }

        .contact-info {
          background: var(--background-secondary);
          padding: 2rem;
          border-radius: 16px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .info-icon {
          font-size: 1.5rem;
          min-width: 30px;
        }

        .info-item h4 {
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .info-item a {
          color: var(--primary-color);
          text-decoration: none;
        }

        .info-item a:hover {
          text-decoration: underline;
        }

        .social-links {
          margin-top: 2rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-link {
          padding: 0.5rem 1rem;
          background: var(--primary-color);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          transition: all var(--transition-normal);
        }

        .social-link:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }

        .contact-form {
          background: var(--background-primary);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: var(--shadow-md);
        }

        .form-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .form-input,
        .form-textarea {
          padding: 12px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color var(--transition-normal);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-message {
          padding: 1rem;
          background: var(--secondary-color);
          color: white;
          border-radius: 8px;
          text-align: center;
          margin-top: 1rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .info-card {
          padding: 1.5rem;
          text-align: center;
        }

        .info-card h4 {
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .info-card a {
          display: block;
          color: var(--primary-color);
          text-decoration: none;
          margin: 0.25rem 0;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default EnhancedContact;
