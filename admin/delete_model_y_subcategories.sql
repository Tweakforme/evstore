-- Delete All Model Y Subcategories
-- This will remove all subcategories under Model Y main categories

-- First, let's see what Model Y subcategories exist
SELECT 'Current Model Y subcategories to be deleted:' as info;
SELECT 
    p.name as main_category,
    c.name as subcategory,
    c.id as subcategory_id
FROM product_category p
LEFT JOIN product_category c ON c.parent_category_id = p.id
WHERE p.name LIKE 'Model Y -%' 
AND c.id IS NOT NULL
ORDER BY p.name, c.name;

-- Delete product-category relationships first
DELETE FROM product_category_product 
WHERE product_category_id IN (
    SELECT c.id
    FROM product_category p
    JOIN product_category c ON c.parent_category_id = p.id
    WHERE p.name LIKE 'Model Y -%'
);

-- Delete the subcategories themselves
DELETE FROM product_category 
WHERE parent_category_id IN (
    SELECT id FROM product_category WHERE name LIKE 'Model Y -%'
);

-- Verify deletion
SELECT 'Verification - Remaining Model Y subcategories after deletion:' as status;
SELECT 
    p.name as main_category,
    COUNT(c.id) as remaining_subcategories
FROM product_category p
LEFT JOIN product_category c ON c.parent_category_id = p.id
WHERE p.name LIKE 'Model Y -%' 
GROUP BY p.id, p.name
ORDER BY p.name;

-- Show what Model Y main categories still exist (these should remain)
SELECT 'Model Y main categories (should still exist):' as info;
SELECT name FROM product_category WHERE name LIKE 'Model Y -%' ORDER BY name;