-- Seed data for Carma
insert into public.users (email, display_name) values
('demo@carma.dev', 'Demo User')
on conflict do nothing;

insert into public.vendors (name) values
('Demo Vendor')
on conflict do nothing;

insert into public.parts (title, description, price)
values ('OEM Wheel', '17 inch OEM alloy wheel', 150.00)
on conflict do nothing;

insert into public.events (title, description, location)
values ('Cars & Coffee', 'Weekly meetup', 'Downtown Lot')
on conflict do nothing;
