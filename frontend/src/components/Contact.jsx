import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (mock)
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="min-h-screen bg-black dark:bg-white px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Left Side */}
          <div>
            <h2 className="text-[8vw] md:text-6xl font-light text-white dark:text-black mb-8">
              Let's Make It Happen
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-white dark:text-black mb-12">
              Say Hello
            </h3>
            <div className="space-y-6 text-gray-400 dark:text-gray-600">
              <p className="text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-3">
                <p>
                  <span className="text-gray-600 dark:text-gray-500">Email:</span><br />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-[#00aeef] transition-colors">
                    {personalInfo.email}
                  </a>
                </p>
                <p>
                  <span className="text-gray-600 dark:text-gray-500">Phone:</span><br />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-[#00aeef] transition-colors">
                    {personalInfo.phone}
                  </a>
                </p>
                <p>
                  <span className="text-gray-600 dark:text-gray-500">Location:</span><br />
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-transparent border-b border-gray-700 dark:border-gray-400 rounded-none px-0 py-4 text-white dark:text-black placeholder:text-gray-600 dark:placeholder:text-gray-500 focus:border-[#00aeef]"
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="bg-transparent border-b border-gray-700 dark:border-gray-400 rounded-none px-0 py-4 text-white dark:text-black placeholder:text-gray-600 dark:placeholder:text-gray-500 focus:border-[#00aeef]"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={6}
                className="bg-transparent border-b border-gray-700 dark:border-gray-400 rounded-none px-0 py-4 text-white dark:text-black placeholder:text-gray-600 dark:placeholder:text-gray-500 resize-none focus:border-[#00aeef]"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white dark:bg-black text-black dark:text-white hover:bg-[#00aeef] hover:text-white dark:hover:bg-[#00aeef] py-6 rounded-none font-normal group"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
