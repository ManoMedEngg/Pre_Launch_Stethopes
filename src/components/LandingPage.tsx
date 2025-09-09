import { useState } from 'react';
import { VideoIcon, Heart, Cpu, Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Header } from './Header';
import { ManualModal } from './ManualModal';
import { ImageWithFallback } from './figma/ImageWithFallback';
import bioauraImage from 'figma:asset/45542653ccdd8da694f05e1d1b87da7a40ed78aa.png';
import heroBackgroundImage from 'figma:asset/74c75aa8f9658624649852519779fe6779418c8b.png';

interface LandingPageProps {
  onTryNow: () => void;
}

export function LandingPage({ onTryNow }: LandingPageProps) {
  const [isManualOpen, setIsManualOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onTryNow={onTryNow} onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-80 z-0"
          style={{
            backgroundImage: `url(${heroBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent z-10" />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                An IoT Based AI Integrated Stethoscope
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Connect with healthcare providers through our innovative telemedicine
                platform featuring real-time IoT stethoscope integration and
                AI-powered heart monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={onTryNow}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
                >
                  Try Now
                </Button>
                <Button
                  onClick={() => setIsManualOpen(true)}
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-white/20 text-white px-6 py-3 rounded-lg text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="events" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <VideoIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Video Meeting</h3>
              <p className="text-gray-400">
                Connect with healthcare professionals through secure, high-quality
                video calls from anywhere.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">IoT Stethoscope</h3>
              <p className="text-gray-400">
                Share real-time heart and lung sounds with your doctor using our
                advanced IoT stethoscope.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI Heart Analysis</h3>
              <p className="text-gray-400">
                Get preliminary insights about your heart health with our AI-powered
                analysis tools.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Secure Platform</h3>
              <p className="text-gray-400">
                Your health data is protected with end-to-end encryption and
                HIPAA-compliant security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <ImageWithFallback
                src={bioauraImage}
                alt="Bioaura'25 - IoT-based AI Integrated Stethoscope with Digital Health Monitoring"
                className="rounded-lg w-full h-auto object-cover shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">About Stethopes</h2>
              <p className="text-gray-300 mb-4">
                Stethopes is an innovative telemedicine platform that combines IoT
                technology with healthcare expertise to provide remote heart monitoring
                and consultation services.
              </p>
              <p className="text-gray-300 mb-4">
                Our platform enables patients to connect with healthcare providers
                remotely, share real-time heart data through our IoT stethoscope, and
                receive professional medical advice without leaving home.
              </p>
              <p className="text-gray-300 mb-6">
                Developed by a team of medical and technology experts at Kings
                Engineering College, Bioaura'25 aims to make healthcare more accessible,
                efficient, and personalized.
              </p>
              <Button
                onClick={onTryNow}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
              >
                Try Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
              <p className="text-gray-400">+91 7358878062</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-400">blackdevilmedengg@gmail.com</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
              <p className="text-gray-400">Kings Engineering College</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-pacifico text-white">Stethopes</h1>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Facebook className="w-5 h-5" />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Twitter className="w-5 h-5" />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Stethopes. All rights reserved. Developed by BioMedical Engineer</p>
          </div>
        </div>
      </footer>

      <ManualModal isOpen={isManualOpen} onClose={() => setIsManualOpen(false)} />
    </div>
  );
}