import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                🚀 Professional IT Support Services
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl">
              Your Trusted Partner for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IT Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-600">
              We provide comprehensive IT support and managed services to keep your business running smoothly. 
              Available 24/7 with expert technicians ready to solve your tech challenges.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">24/7 Technical Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Certified IT Professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Rapid Response Time</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800"
              alt="IT Support Team"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
