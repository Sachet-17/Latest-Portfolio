import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
    <section id="contact" className="bg-[#0F0F0F] text-[#F5F1E8] px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-8">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Open to job opportunities, collaborations, and interesting conversations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                <Mail className="w-5 h-5 mt-1 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-[#F5F1E8] hover:text-gray-300 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                <Phone className="w-5 h-5 mt-1 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-[#F5F1E8] hover:text-gray-300 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                <MapPin className="w-5 h-5 mt-1 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-[#F5F1E8]">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-800">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-700 rounded-full hover:bg-[#F5F1E8] hover:text-[#0F0F0F] hover:border-[#F5F1E8] transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-700 rounded-full hover:bg-[#F5F1E8] hover:text-[#0F0F0F] hover:border-[#F5F1E8] transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-transparent border-b border-gray-700 rounded-none px-0 py-4 text-[#F5F1E8] placeholder:text-gray-600 focus:border-[#F5F1E8] transition-all duration-300"
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="bg-transparent border-b border-gray-700 rounded-none px-0 py-4 text-[#F5F1E8] placeholder:text-gray-600 focus:border-[#F5F1E8] transition-all duration-300"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={6}
                className="bg-transparent border-b border-gray-700 rounded-none px-0 py-4 text-[#F5F1E8] placeholder:text-gray-600 resize-none focus:border-[#F5F1E8] transition-all duration-300"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F5F1E8] text-[#0F0F0F] hover:bg-[#E8E4DA] py-6 rounded-full font-normal group transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
