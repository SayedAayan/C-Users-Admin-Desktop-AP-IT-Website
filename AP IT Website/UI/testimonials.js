import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    content: 'API IT Support has been instrumental in our growth. Their proactive approach means we can focus on our business without worrying about IT issues.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, DataFlow Systems',
    content: 'The level of expertise and responsiveness is outstanding. They\'ve helped us modernize our infrastructure and improve security significantly.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Manager, HealthPlus',
    content: 'Switching to API IT Support was the best decision we made. Their 24/7 support gives us peace of mind knowing help is always available.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600">Testimonials</span>
          <h2 className="text-4xl mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it—hear from businesses we've helped succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
