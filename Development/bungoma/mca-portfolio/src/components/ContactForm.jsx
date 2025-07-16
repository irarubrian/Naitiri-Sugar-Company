import React from 'react';

const ContactForm = () => (
  <form style={{ maxWidth: '400px', margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <input type="text" placeholder="Your Name" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
    <input type="email" placeholder="Your Email" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
    <textarea placeholder="Your Message" rows={4} style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
    <button type="submit" style={{ padding: '0.75rem', borderRadius: '4px', background: '#2563eb', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Send</button>
  </form>
);

export default ContactForm;
