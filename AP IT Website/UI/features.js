import { Clock, Award, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: Clock,
    title: 'Rapid Response',
    description: 'Average response time under 15 minutes for critical issues'
  },
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Team of Microsoft, Cisco, and CompTIA certified professionals'
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    description: 'Personal point of contact who understands your business'
  },
  {
    icon: TrendingUp,
    title: 'Proactive Monitoring',
    description: 'We identify and resolve issues before they impact your business'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                alt="IT Professional working"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-blue-600">Why Choose Us</span>
              <h2 className="text-4xl mt-4 mb-6">
                Experience the API IT Support Difference
              </h2>
              <p className="text-xl text-gray-600">
                We don't just fix problems—we prevent them. Our proactive approach keeps your business running smoothly 24/7.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
