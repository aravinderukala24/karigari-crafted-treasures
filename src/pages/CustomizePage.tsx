import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { products } from '@/data/products';
import { toast } from 'sonner';
import { ArrowLeft, Palette, Ruler, Package } from 'lucide-react';

const CustomizePage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  
  const [customizations, setCustomizations] = useState({
    size: '',
    color: '',
    material: '',
    pattern: '',
    engraving: '',
    notes: ''
  });

  const [pricing, setPricing] = useState({
    basePrice: 0,
    customizationFee: 0,
    totalPrice: 0
  });

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find(p => p.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
        setPricing(prev => ({
          ...prev,
          basePrice: foundProduct.price,
          totalPrice: foundProduct.price
        }));
      }
    }
  }, [productId]);

  useEffect(() => {
    // Calculate customization fees
    let fee = 0;
    if (customizations.size && customizations.size !== 'standard') fee += 200;
    if (customizations.color && customizations.color !== 'original') fee += 150;
    if (customizations.material && customizations.material !== 'original') fee += 300;
    if (customizations.pattern && customizations.pattern !== 'none') fee += 250;
    if (customizations.engraving) fee += 400;

    setPricing(prev => ({
      ...prev,
      customizationFee: fee,
      totalPrice: prev.basePrice + fee
    }));
  }, [customizations]);

  const handleCustomizationChange = (key: string, value: string) => {
    setCustomizations(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('Please sign in to place a custom order');
      navigate('/auth');
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('custom_orders')
        .insert({
          user_id: user.id,
          product_id: product.id,
          product_name: product.name,
          base_price: pricing.basePrice,
          customizations: customizations,
          total_price: pricing.totalPrice,
          notes: customizations.notes
        });

      if (error) throw error;

      toast.success('Custom order placed successfully!', {
        description: 'We will contact you within 2-3 business days to confirm details.'
      });
      
      navigate('/profile');
    } catch (error: any) {
      toast.error('Failed to place order: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Product not found</p>
        <Button onClick={() => navigate('/')} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
    );
  }

  const customizationOptions = {
    sizes: ['standard', 'small', 'medium', 'large', 'extra-large'],
    colors: ['original', 'natural', 'burgundy', 'navy', 'emerald', 'golden', 'ivory'],
    materials: ['original', 'premium-cotton', 'silk', 'bamboo-fiber', 'organic-cotton'],
    patterns: ['none', 'traditional', 'contemporary', 'geometric', 'floral', 'abstract']
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-serif font-bold">Customize Your Product</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Product Preview */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Product Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{product.category}</Badge>
                <Badge variant="outline">{product.origin}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Pricing Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Base Price</span>
                <span>₹{pricing.basePrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Customization Fee</span>
                <span>₹{pricing.customizationFee.toLocaleString('en-IN')}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total Price</span>
                <span>₹{pricing.totalPrice.toLocaleString('en-IN')}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customization Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Customize Your Order
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="size" className="flex items-center gap-2">
                      <Ruler className="h-4 w-4" />
                      Size
                    </Label>
                    <Select value={customizations.size} onValueChange={(value) => handleCustomizationChange('size', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {customizationOptions.sizes.map(size => (
                          <SelectItem key={size} value={size}>
                            {size.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            {size !== 'standard' && ' (+₹200)'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="color">Color</Label>
                    <Select value={customizations.color} onValueChange={(value) => handleCustomizationChange('color', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        {customizationOptions.colors.map(color => (
                          <SelectItem key={color} value={color}>
                            {color.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            {color !== 'original' && ' (+₹150)'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="material">Material</Label>
                  <Select value={customizations.material} onValueChange={(value) => handleCustomizationChange('material', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      {customizationOptions.materials.map(material => (
                        <SelectItem key={material} value={material}>
                          {material.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          {material !== 'original' && ' (+₹300)'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="pattern">Pattern</Label>
                  <Select value={customizations.pattern} onValueChange={(value) => handleCustomizationChange('pattern', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select pattern" />
                    </SelectTrigger>
                    <SelectContent>
                      {customizationOptions.patterns.map(pattern => (
                        <SelectItem key={pattern} value={pattern}>
                          {pattern.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          {pattern !== 'none' && ' (+₹250)'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="engraving">Custom Engraving/Text</Label>
                  <Input
                    id="engraving"
                    value={customizations.engraving}
                    onChange={(e) => handleCustomizationChange('engraving', e.target.value)}
                    placeholder="Enter custom text (optional, +₹400)"
                    maxLength={50}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Max 50 characters. Additional ₹400 if specified.
                  </p>
                </div>

                <div>
                  <Label htmlFor="notes">Special Instructions</Label>
                  <Textarea
                    id="notes"
                    value={customizations.notes}
                    onChange={(e) => handleCustomizationChange('notes', e.target.value)}
                    placeholder="Any special requests or instructions..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Placing Order...' : `Place Custom Order - ₹${pricing.totalPrice.toLocaleString('en-IN')}`}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Custom orders take 7-14 business days to complete. We'll contact you within 2-3 days to confirm details.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomizePage;