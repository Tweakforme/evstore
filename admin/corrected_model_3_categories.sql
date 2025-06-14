-- Corrected Tesla Model 3 Categories - Using Exact Database Category Names
-- Clean up existing subcategories first
DELETE FROM product_category WHERE parent_category_id IN (
    SELECT id FROM product_category WHERE name LIKE 'Model 3 -%'
);

-- 10 - BODY subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_1001', 'M3 1001 - Bumper and Fascia', 'm3-1001-bumper-fascia', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Body'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Body') || '.pcat_m3_1001',
 '{"code": "1001", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1010', 'M3 1010 - Body Panels', 'm3-1010-body-panels', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Body'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Body') || '.pcat_m3_1010',
 '{"code": "1010", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1020', 'M3 1020 - Windshield and Body Glass', 'm3-1020-windshield-body-glass', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Body'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Body') || '.pcat_m3_1020',
 '{"code": "1020", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 11 - CLOSURE COMPONENTS subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_1120', 'M3 1120 - Trunk', 'm3-1120-trunk', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Closure Components'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Closure Components') || '.pcat_m3_1120',
 '{"code": "1120", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1133', 'M3 1133 - Closure Assist Mechanisms and Hinges', 'm3-1133-closure-assist-mechanisms-hinges', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Closure Components'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Closure Components') || '.pcat_m3_1133',
 '{"code": "1133", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1145', 'M3 1145 - Exterior Door Handles', 'm3-1145-exterior-door-handles', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Closure Components'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Closure Components') || '.pcat_m3_1145',
 '{"code": "1145", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1150', 'M3 1150 - Door Glass Regulators', 'm3-1150-door-glass-regulators', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Closure Components'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Closure Components') || '.pcat_m3_1150',
 '{"code": "1150", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1170', 'M3 1170 - Seals Body Closures', 'm3-1170-seals-body-closures', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Closure Components'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Closure Components') || '.pcat_m3_1170',
 '{"code": "1170", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 13 - SEATS subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_1301', 'M3 1301 - Front Seat Tracks and Motors', 'm3-1301-front-seat-tracks-motors', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Seats'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Seats') || '.pcat_m3_1301',
 '{"code": "1301", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1302', 'M3 1302 - 2nd Row Seat Tracks and Motors', 'm3-1302-2nd-row-seat-tracks-motors', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Seats'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Seats') || '.pcat_m3_1302',
 '{"code": "1302", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1304', 'M3 1304 - Front Seat Assemblies and Hardware', 'm3-1304-front-seat-assemblies-hardware', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Seats'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Seats') || '.pcat_m3_1304',
 '{"code": "1304", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1305', 'M3 1305 - 2nd Row Seat Assemblies and Hardware', 'm3-1305-2nd-row-seat-assemblies-hardware', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Seats'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Seats') || '.pcat_m3_1305',
 '{"code": "1305", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1307', 'M3 1307 - Front Seat Covers, Pads and Trims', 'm3-1307-front-seat-covers-pads-trims', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Seats'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Seats') || '.pcat_m3_1307',
 '{"code": "1307", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1308', 'M3 1308 - 2nd Row Seat Covers, Pads and Trims', 'm3-1308-2nd-row-seat-covers-pads-trims', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Seats'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Seats') || '.pcat_m3_1308',
 '{"code": "1308", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 14 - INSTRUMENT PANEL subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_1405', 'M3 1405 - Instrument Panel', 'm3-1405-instrument-panel', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Instrument Panel'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Instrument Panel') || '.pcat_m3_1405',
 '{"code": "1405", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 15 - INTERIOR TRIM subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_1505', 'M3 1505 - Interior Mirror and Sun Visors', 'm3-1505-interior-mirror-sun-visors', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Interior Trim'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Interior Trim') || '.pcat_m3_1505',
 '{"code": "1505", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1511', 'M3 1511 - Trunk Trim', 'm3-1511-trunk-trim', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Interior Trim'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Interior Trim') || '.pcat_m3_1511',
 '{"code": "1511", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1513', 'M3 1513 - Door Trim', 'm3-1513-door-trim', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Interior Trim'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Interior Trim') || '.pcat_m3_1513',
 '{"code": "1513", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1518', 'M3 1518 - Pillar and Sill Trim', 'm3-1518-pillar-sill-trim', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Interior Trim'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Interior Trim') || '.pcat_m3_1518',
 '{"code": "1518", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1519', 'M3 1519 - Center Console', 'm3-1519-center-console', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Interior Trim'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Interior Trim') || '.pcat_m3_1519',
 '{"code": "1519", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1520', 'M3 1520 - Headliner', 'm3-1520-headliner', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Interior Trim'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Interior Trim') || '.pcat_m3_1520',
 '{"code": "1520", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1524', 'M3 1524 - Luggage Compartment Trim', 'm3-1524-luggage-compartment-trim', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Interior Trim'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Interior Trim') || '.pcat_m3_1524',
 '{"code": "1524", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1530', 'M3 1530 - Carpeting and Mats', 'm3-1530-carpeting-mats', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Interior Trim'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Interior Trim') || '.pcat_m3_1530',
 '{"code": "1530", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 16 - HV BATTERY SYSTEM subcategories (using correct name "Hv Battery Trim")
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_1601', 'M3 1601 - HV Battery Assembly', 'm3-1601-hv-battery-assembly', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Hv Battery Trim'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Hv Battery Trim') || '.pcat_m3_1601',
 '{"code": "1601", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1630', 'M3 1630 - HV Battery Electrical Components', 'm3-1630-hv-battery-electrical-components', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Hv Battery Trim'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Hv Battery Trim') || '.pcat_m3_1630',
 '{"code": "1630", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 17 - ELECTRICAL subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_1701', 'M3 1701 - 12V Battery and Fuses', 'm3-1701-12v-battery-fuses', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1701',
 '{"code": "1701", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1702', 'M3 1702 - LV Battery', 'm3-1702-lv-battery', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1702',
 '{"code": "1702", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1710', 'M3 1710 - Harnesses', 'm3-1710-harnesses', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1710',
 '{"code": "1710", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1715', 'M3 1715 - Electronic Control Modules', 'm3-1715-electronic-control-modules', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1715',
 '{"code": "1715", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1720', 'M3 1720 - Radar Sensors', 'm3-1720-radar-sensors', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1720',
 '{"code": "1720", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1723', 'M3 1723 - Front Camera', 'm3-1723-front-camera', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1723',
 '{"code": "1723", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1724', 'M3 1724 - Interior Camera', 'm3-1724-interior-camera', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1724',
 '{"code": "1724", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1727', 'M3 1727 - Parking Sensors', 'm3-1727-parking-sensors', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1727',
 '{"code": "1727", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1740', 'M3 1740 - Exterior Lights', 'm3-1740-exterior-lights', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1740',
 '{"code": "1740", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1745', 'M3 1745 - Keyless Entry and Security', 'm3-1745-keyless-entry-security', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1745',
 '{"code": "1745", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1750', 'M3 1750 - Wipers and Washers', 'm3-1750-wipers-washers', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1750',
 '{"code": "1750", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1753', 'M3 1753 - Horn', 'm3-1753-horn', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1753',
 '{"code": "1753", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1755', 'M3 1755 - Accelerator Pedal', 'm3-1755-accelerator-pedal', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1755',
 '{"code": "1755", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1756', 'M3 1756 - Temperature and Humidity Sensors', 'm3-1756-temperature-humidity-sensors', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Electrical'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Electrical') || '.pcat_m3_1756',
 '{"code": "1756", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 18 - THERMAL MANAGEMENT subcategories (using correct name "Thermal Engagement")
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_1810', 'M3 1810 - Cabin HVAC', 'm3-1810-cabin-hvac', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Thermal Engagement'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Thermal Engagement') || '.pcat_m3_1810',
 '{"code": "1810", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1820', 'M3 1820 - Refrigerant System', 'm3-1820-refrigerant-system', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Thermal Engagement'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Thermal Engagement') || '.pcat_m3_1820',
 '{"code": "1820", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1830', 'M3 1830 - Cooling System', 'm3-1830-cooling-system', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Thermal Engagement'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Thermal Engagement') || '.pcat_m3_1830',
 '{"code": "1830", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1840', 'M3 1840 - Thermal System', 'm3-1840-thermal-system', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Thermal Engagement'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Thermal Engagement') || '.pcat_m3_1840',
 '{"code": "1840", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_1850', 'M3 1850 - Air Distribution', 'm3-1850-air-distribution', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Thermal Engagement'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Thermal Engagement') || '.pcat_m3_1850',
 '{"code": "1850", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 20 - SAFETY AND RESTRAINT subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_2001', 'M3 2001 - Air Bags', 'm3-2001-air-bags', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Safety and Restraint'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Safety and Restraint') || '.pcat_m3_2001',
 '{"code": "2001", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_2005', 'M3 2005 - Seat Belts', 'm3-2005-seat-belts', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Safety and Restraint'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Safety and Restraint') || '.pcat_m3_2005',
 '{"code": "2005", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_2010', 'M3 2010 - Pre-Tensioners', 'm3-2010-pre-tensioners', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Safety and Restraint'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Safety and Restraint') || '.pcat_m3_2010',
 '{"code": "2010", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_2020', 'M3 2020 - Sensors', 'm3-2020-sensors', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Safety and Restraint'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Safety and Restraint') || '.pcat_m3_2020',
 '{"code": "2020", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 21 - INFOTAINMENT subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_2107', 'M3 2107 - Touchscreen', 'm3-2107-touchscreen', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Infotainment'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Infotainment') || '.pcat_m3_2107',
 '{"code": "2107", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_2110', 'M3 2110 - Car Computer', 'm3-2110-car-computer', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Infotainment'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Infotainment') || '.pcat_m3_2110',
 '{"code": "2110", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_2121', 'M3 2121 - Audio System - Speakers, Subwoofer and Amplifier', 'm3-2121-audio-system-speakers', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Infotainment'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Infotainment') || '.pcat_m3_2121',
 '{"code": "2121", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_2122', 'M3 2122 - Audio System - AM, FM and HD Radio', 'm3-2122-audio-system-radio', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Infotainment'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Infotainment') || '.pcat_m3_2122',
 '{"code": "2122", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_2130', 'M3 2130 - Antenna - AM, FM and HD Radio', 'm3-2130-antenna-radio', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Infotainment'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Infotainment') || '.pcat_m3_2130',
 '{"code": "2130", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_2132', 'M3 2132 - Antenna - GPS', 'm3-2132-antenna-gps', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Infotainment'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Infotainment') || '.pcat_m3_2132',
 '{"code": "2132", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_2133', 'M3 2133 - Antenna - Wi-Fi', 'm3-2133-antenna-wifi', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Infotainment'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Infotainment') || '.pcat_m3_2133',
 '{"code": "2133", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 30 - CHASSIS subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_3001', 'M3 3001 - Chassis and Subframes', 'm3-3001-chassis-subframes', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Chassis'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Chassis') || '.pcat_m3_3001',
 '{"code": "3001", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 32 - STEERING subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_3201_new', 'M3 3201 - Steering Rack and Lower Column', 'm3-3201-steering-rack-lower-column', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Steering'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Steering') || '.pcat_m3_3201_new',
 '{"code": "3201", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_3205_new', 'M3 3205 - Upper Column and Steering Wheel', 'm3-3205-upper-column-steering-wheel', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Steering'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Steering') || '.pcat_m3_3205_new',
 '{"code": "3205", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 33 - BRAKES subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_3301', 'M3 3301 - Brake Discs and Calipers', 'm3-3301-brake-discs-calipers', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Brake'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Brake') || '.pcat_m3_3301',
 '{"code": "3301", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_3303', 'M3 3303 - Brake Pipes and Hoses', 'm3-3303-brake-pipes-hoses', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Brake'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Brake') || '.pcat_m3_3303',
 '{"code": "3303", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_3310', 'M3 3310 - ABS, Traction and Stability Control', 'm3-3310-abs-traction-stability', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Brake'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Brake') || '.pcat_m3_3310',
 '{"code": "3310", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_3320', 'M3 3320 - Electromechanical Brake Booster', 'm3-3320-electromechanical-brake-booster', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Brake'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Brake') || '.pcat_m3_3320',
 '{"code": "3320", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_3325', 'M3 3325 - Brake Pedal', 'm3-3325-brake-pedal', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Brake'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Brake') || '.pcat_m3_3325',
 '{"code": "3325", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 34 - WHEELS AND TIRES subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_3401', 'M3 3401 - Wheels', 'm3-3401-wheels', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Wheels and Tires'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Wheels and Tires') || '.pcat_m3_3401',
 '{"code": "3401", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_3402', 'M3 3402 - Tires', 'm3-3402-tires', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Wheels and Tires'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Wheels and Tires') || '.pcat_m3_3402',
 '{"code": "3402", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_3404', 'M3 3404 - Tire Pressure Monitoring System (TPMS)', 'm3-3404-tpms', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Wheels and Tires'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Wheels and Tires') || '.pcat_m3_3404',
 '{"code": "3404", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 39 - FRONT DRIVE UNIT subcategories (note the missing space: "Model 3 -Front Drive Unit")
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_3901', 'M3 3901 - Front Drive Unit Assembly', 'm3-3901-front-drive-unit-assembly', 
 (SELECT id FROM product_category WHERE name = 'Model 3 -Front Drive Unit'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 -Front Drive Unit') || '.pcat_m3_3901',
 '{"code": "3901", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_3920', 'M3 3920 - Front Drive Inverter', 'm3-3920-front-drive-inverter', 
 (SELECT id FROM product_category WHERE name = 'Model 3 -Front Drive Unit'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 -Front Drive Unit') || '.pcat_m3_3920',
 '{"code": "3920", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_3930', 'M3 3930 - Front Gearbox and Halfshafts', 'm3-3930-front-gearbox-halfshafts', 
 (SELECT id FROM product_category WHERE name = 'Model 3 -Front Drive Unit'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 -Front Drive Unit') || '.pcat_m3_3930',
 '{"code": "3930", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 40 - REAR DRIVE UNIT subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_4001', 'M3 4001 - Rear Drive Unit Assembly', 'm3-4001-rear-drive-unit-assembly', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Rear Drive Unit'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Rear Drive Unit') || '.pcat_m3_4001',
 '{"code": "4001", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_4020', 'M3 4020 - Rear Drive Inverter', 'm3-4020-rear-drive-inverter', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Rear Drive Unit'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Rear Drive Unit') || '.pcat_m3_4020',
 '{"code": "4020", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_4030', 'M3 4030 - Rear Gearbox and Halfshafts', 'm3-4030-rear-gearbox-halfshafts', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - Rear Drive Unit'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - Rear Drive Unit') || '.pcat_m3_4030',
 '{"code": "4030", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- 44 - HIGH VOLTAGE SYSTEM subcategories
INSERT INTO product_category (id, name, handle, parent_category_id, mpath, metadata, created_at, updated_at) VALUES
('pcat_m3_4401', 'M3 4401 - Charge System Inlet', 'm3-4401-charge-system-inlet', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - High Voltage System'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - High Voltage System') || '.pcat_m3_4401',
 '{"code": "4401", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW()),

('pcat_m3_4450', 'M3 4450 - HV Harnesses', 'm3-4450-hv-harnesses', 
 (SELECT id FROM product_category WHERE name = 'Model 3 - High Voltage System'),
 (SELECT mpath FROM product_category WHERE name = 'Model 3 - High Voltage System') || '.pcat_m3_4450',
 '{"code": "4450", "vehicle": "Tesla Model 3", "regions": "CH,US"}', NOW(), NOW());

-- VERIFICATION QUERY
SELECT 'TESLA MODEL 3 CATEGORIES CREATED SUCCESSFULLY:' as status;

SELECT 
    p.name as main_category,
    COUNT(c.id) as subcategory_count
FROM product_category p
LEFT JOIN product_category c ON c.parent_category_id = p.id
WHERE p.name LIKE 'Model 3 -%' 
GROUP BY p.id, p.name
HAVING COUNT(c.id) > 0
ORDER BY p.name;

SELECT 'Total Model 3 subcategories created:' as summary, COUNT(*) as count
FROM product_category 
WHERE parent_category_id IN (SELECT id FROM product_category WHERE name LIKE 'Model 3 -%');