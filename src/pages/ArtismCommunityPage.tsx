import { useState } from 'react';
import { MessageCircle, Users, Calendar, Award, Palette, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ArtismCommunityPage = () => {
  const [activeTab, setActiveTab] = useState('forums');

  const communityStats = [
    { icon: Users, label: "Community Members", value: "15,000+" },
    { icon: MessageCircle, label: "Active Discussions", value: "2,500+" },
    { icon: Award, label: "Featured Artisans", value: "500+" },
    { icon: Calendar, label: "Monthly Events", value: "25+" }
  ];

  const forumTopics = [
    {
      title: "Traditional Pottery Techniques",
      category: "Ceramics",
      replies: 156,
      lastActive: "2 hours ago",
      featured: true
    },
    {
      title: "Sustainable Dyeing Methods",
      category: "Textiles",
      replies: 89,
      lastActive: "5 hours ago",
      featured: false
    },
    {
      title: "Wood Carving Tool Recommendations",
      category: "Woodcraft",
      replies: 234,
      lastActive: "1 day ago",
      featured: true
    },
    {
      title: "Marketing Your Handicrafts Online",
      category: "Business",
      replies: 445,
      lastActive: "3 hours ago",
      featured: false
    }
  ];

  const featuredArtisans = [
    {
      name: "Rajesh Kumar",
      craft: "Blue Pottery",
      location: "Jaipur, Rajasthan",
      experience: "25 years",
      specialty: "Traditional Persian patterns"
    },
    {
      name: "Lakshmi Devi",
      craft: "Madhubani Painting",
      location: "Madhubani, Bihar", 
      experience: "30 years",
      specialty: "Nature and mythology themes"
    },
    {
      name: "Mohammad Ali",
      craft: "Pashmina Weaving",
      location: "Srinagar, Kashmir",
      experience: "20 years",
      specialty: "Fine cashmere and silk blends"
    }
  ];

  const upcomingEvents = [
    {
      title: "Pottery Workshop: Wheel Throwing Basics",
      date: "Oct 15, 2024",
      time: "2:00 PM IST",
      type: "Workshop",
      participants: 45
    },
    {
      title: "Textile Dyeing Masterclass",
      date: "Oct 22, 2024", 
      time: "10:00 AM IST",
      type: "Masterclass",
      participants: 78
    },
    {
      title: "Artisan Success Stories Panel",
      date: "Oct 28, 2024",
      time: "4:00 PM IST",
      type: "Panel Discussion",
      participants: 156
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            Artism Community
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Connect with fellow artisans, share knowledge, learn new techniques, and grow together in the world of traditional Indian handicrafts.
          </p>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Join Our Community
          </Button>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="warm-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="forums">Discussion Forums</TabsTrigger>
              <TabsTrigger value="artisans">Featured Artisans</TabsTrigger>
              <TabsTrigger value="events">Events & Workshops</TabsTrigger>
              <TabsTrigger value="resources">Learning Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="forums" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-serif font-bold">Active Discussions</h2>
                <Button>Start New Discussion</Button>
              </div>
              <div className="grid gap-4">
                {forumTopics.map((topic, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{topic.title}</h3>
                            {topic.featured && <Badge variant="secondary">Featured</Badge>}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Badge variant="outline">{topic.category}</Badge>
                            <span>{topic.replies} replies</span>
                            <span>Last active {topic.lastActive}</span>
                          </div>
                        </div>
                        <MessageCircle className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="artisans" className="space-y-6">
              <h2 className="text-2xl font-serif font-bold">Featured Artisans</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArtisans.map((artisan, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                        <Palette className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle>{artisan.name}</CardTitle>
                      <CardDescription>{artisan.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Craft:</span>
                          <span className="text-sm text-muted-foreground">{artisan.craft}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Experience:</span>
                          <span className="text-sm text-muted-foreground">{artisan.experience}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Specialty:</span>
                          <p className="text-muted-foreground mt-1">{artisan.specialty}</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        View Profile
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <h2 className="text-2xl font-serif font-bold">Upcoming Events & Workshops</h2>
              <div className="grid gap-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <span>{event.time}</span>
                            <Badge variant="outline">{event.type}</Badge>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Users className="h-4 w-4 text-primary" />
                            <span>{event.participants} participants registered</span>
                          </div>
                        </div>
                        <Button>Register</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <h2 className="text-2xl font-serif font-bold">Learning Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5 text-primary" />
                      Technique Guides
                    </CardTitle>
                    <CardDescription>
                      Step-by-step tutorials for traditional handicraft techniques
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Blue Pottery Glazing Techniques</li>
                      <li>• Madhubani Color Preparation</li>
                      <li>• Wood Carving Safety & Tools</li>
                      <li>• Natural Dye Extraction Methods</li>
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      Browse All Guides
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Business Resources
                    </CardTitle>
                    <CardDescription>
                      Tools and guides to grow your handicraft business
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Pricing Your Handmade Products</li>
                      <li>• Online Marketing Strategies</li>
                      <li>• Photography Tips for Crafts</li>
                      <li>• Export Documentation Guide</li>
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      View Resources
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Community Guidelines
              </CardTitle>
              <CardDescription className="max-w-2xl mx-auto">
                Our community thrives on respect, knowledge sharing, and mutual support. Here are our core principles:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold mb-2">Respect & Inclusion</h3>
                  <p className="text-sm text-muted-foreground">
                    We welcome artisans from all backgrounds and experience levels. Treat everyone with kindness and respect.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Knowledge Sharing</h3>
                  <p className="text-sm text-muted-foreground">
                    Share your expertise freely and learn from others. Together, we preserve and evolve traditional crafts.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Authentic Content</h3>
                  <p className="text-sm text-muted-foreground">
                    Share genuine experiences, original work, and authentic traditional knowledge.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ArtismCommunityPage;