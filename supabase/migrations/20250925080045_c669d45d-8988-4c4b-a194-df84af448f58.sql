-- Create reviews table
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  product_id TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  helpful_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for reviews
CREATE POLICY "Reviews are viewable by everyone" 
ON public.reviews 
FOR SELECT 
USING (true);

CREATE POLICY "Users can create their own reviews" 
ON public.reviews 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" 
ON public.reviews 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reviews" 
ON public.reviews 
FOR DELETE 
USING (auth.uid() = user_id);

-- Add trigger for timestamps
CREATE TRIGGER update_reviews_updated_at
BEFORE UPDATE ON public.reviews
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create shipping_options table
CREATE TABLE public.shipping_options (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  base_cost DECIMAL(10,2) NOT NULL,
  delivery_days_min INTEGER NOT NULL,
  delivery_days_max INTEGER NOT NULL,
  is_international BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for shipping options (read-only for users)
ALTER TABLE public.shipping_options ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Shipping options are viewable by everyone" 
ON public.shipping_options 
FOR SELECT 
USING (is_active = true);

-- Insert default shipping options
INSERT INTO public.shipping_options (name, description, base_cost, delivery_days_min, delivery_days_max, is_international) VALUES
('Standard Shipping', 'Free shipping on orders above ₹2000', 99.00, 5, 7, false),
('Express Shipping', 'Fast delivery within 2-3 business days', 199.00, 2, 3, false),
('International Shipping', 'Worldwide delivery with tracking', 999.00, 10, 15, true),
('Premium International', 'Express international shipping', 1999.00, 7, 10, true);