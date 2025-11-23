import { Server, Cloud, Shield, Headphones, Database, Laptop } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Server,
    title: 'Network Management',
    description: 'Complete network infrastructure setup, monitoring, and maintenance to ensure optimal performance.',
    color: 'text-blue-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Seamless cloud migration, management, and optimization for Azure, AWS, and Google Cloud.',
    color: 'text-purple-600'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business from threats and ensure compliance.',
    color: 'text-red-600'
  },
  {
    icon: Headphones,
    title: 'Help Desk Support',
    description: '24/7 technical support from certified professionals to resolve issues quickly.',
    color: 'text-green-600'
  },
  {
    icon: Database,
    title: 'Data Backup & Recovery',
    description: 'Automated backup solutions and disaster recovery planning to protect your critical data.',
    color: 'text-orange-600'
  },
  {
    icon: Laptop,
    title: 'Hardware & Software',
    description: 'Procurement, installation, and maintenance of all your IT hardware and software needs.',
    color: 'text-cyan-600'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600">Our Services</span>
          <h2 className="text-4xl mt-4 mb-6">
            Comprehensive IT Solutions for Your Business
          </h2>
          <p className="text-xl text-gray-600">
            From network management to cybersecurity, we offer a full suite of IT services to meet all your technology needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-blue-600 transition-all duration-300 hover:shadow-xl group"
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors ${service.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2 group/btn">
                    Learn More
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
