import { Users, Heart, Globe, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Charitha",
      role: "Team Captain & Full Stack Developer",
      description: "Leading the development team with expertise in React, Node.js and system architecture. Passionate about creating seamless user experiences."
    },
    {
      name: "Aravind", 
      role: "Frontend Developer & UI/UX Designer",
      description: "Specializing in modern frontend technologies and creating beautiful, responsive interfaces that bring artisan stories to life."
    },
    {
      name: "Mani",
      role: "Backend Developer & DevOps Engineer", 
      description: "Expert in server-side development, database optimization, and cloud infrastructure. Ensures our platform runs smoothly at scale."
    },
    {
      name: "Sathvika",
      role: "Mobile App Developer",
      description: "Developing cross-platform mobile applications to make handicrafts accessible on-the-go. Expert in React Native and mobile optimization."
    },
    {
      name: "Nagi",
      role: "Data Scientist & AI Engineer",
      description: "Implementing machine learning algorithms for personalized recommendations and analyzing user behavior to improve the platform."
    },
    {
      name: "Peena",
      role: "Quality Assurance & Testing Lead",
      description: "Ensuring robust code quality through comprehensive testing strategies and maintaining high standards across all features."
    }
  ];

  const stats = [
    { icon: Users, label: "Artisans", value: "2,000+" },
    { icon: Globe, label: "Countries Served", value: "45+" },
    { icon: Heart, label: "Happy Customers", value: "50,000+" },
    { icon: Award, label: "Awards Won", value: "15+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            About KΛRIGΛRI
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Connecting authentic Indian handicrafts with the world, empowering artisans and preserving centuries-old traditions through modern technology.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-6">
                KΛRIGΛRI was born from a simple yet powerful vision: to create a bridge between India's incredibly talented artisans and the global market that values authentic, handcrafted products. We recognized that while India is home to some of the world's most skilled craftspeople, many of them struggled to reach customers who would truly appreciate their artistry.
              </p>
              <p className="mb-6">
                Our journey began when we witnessed the extraordinary skill of potters, weavers, woodcarvers, and jewelry makers in small villages across India. These artisans carry forward traditions that have been passed down through generations, yet they often lack access to fair markets for their work.
              </p>
              <p>
                Today, KΛRIGΛRI serves as more than just a marketplace. We're a community that celebrates craftsmanship, ensures fair trade, and helps preserve India's rich cultural heritage for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="warm-gradient rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Genesis */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Meet Team Genesis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of founders and leaders working to revolutionize the handicrafts industry and empower artisans across India.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Authenticity</h3>
                <p className="text-muted-foreground">
                  Every product on our platform is genuine, handcrafted by skilled artisans using traditional techniques passed down through generations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Fair Trade</h3>
                <p className="text-muted-foreground">
                  We ensure artisans receive fair compensation for their work and provide them with the tools and platform to grow their businesses.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Cultural Preservation</h3>
                <p className="text-muted-foreground">
                  We're committed to preserving India's rich cultural heritage by supporting traditional crafts and helping them thrive in the modern world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a customer looking for authentic handicrafts or an artisan wanting to showcase your work, we invite you to be part of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="hero-gradient text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Shop Collections
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
              Become an Artisan Partner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;