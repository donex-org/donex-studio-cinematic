-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contacts;
DROP POLICY IF EXISTS "Anyone can submit testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Anyone can read approved testimonials" ON public.testimonials;

-- Create permissive policies for contacts
CREATE POLICY "Anyone can submit contact form" 
ON public.contacts 
FOR INSERT 
TO public
WITH CHECK (true);

-- Create permissive policies for testimonials
CREATE POLICY "Anyone can submit testimonials" 
ON public.testimonials 
FOR INSERT 
TO public
WITH CHECK (true);

CREATE POLICY "Anyone can read approved testimonials" 
ON public.testimonials 
FOR SELECT 
TO public
USING (is_approved = true);