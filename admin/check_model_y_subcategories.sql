-- Check and Count Model Y Subcategories

-- First, let's see exactly what Model Y categories exist
SELECT 'All Model Y categories (main and sub):' as info;
SELECT 
    id,
    name,
    parent_category_id,
    CASE 
        WHEN parent_category_id IS NULL THEN 'MAIN CATEGORY'
        ELSE 'SUBCATEGORY'
    END as category_type
FROM product_category 
WHERE name LIKE 'Model Y%' OR name LIKE 'MY %' OR name LIKE '%Model Y%'
ORDER BY name;

-- Count subcategories by parent
SELECT 'Model Y subcategories count by parent:' as info;
SELECT 
    p.name as main_category,
    COUNT(c.id) as subcategory_count,
    STRING_AGG(c.name, ', ') as subcategory_names
FROM product_category p
LEFT JOIN product_category c ON c.parent_category_id = p.id
WHERE p.name LIKE 'Model Y%' 
GROUP BY p.id, p.name
HAVING COUNT(c.id) > 0
ORDER BY p.name;

-- Find any orphaned Model Y subcategories (ones that might not have proper parent relationships)
SELECT 'Orphaned Model Y subcategories (no proper parent):' as info;
SELECT 
    id,
    name,
    parent_category_id
FROM product_category 
WHERE (name LIKE 'MY %' OR name LIKE '%Model Y%') 
AND parent_category_id IS NOT NULL
AND parent_category_id NOT IN (
    SELECT id FROM product_category WHERE name LIKE 'Model Y -%'
);

-- Look for any categories with Model Y in the name that might be missed
SELECT 'All categories containing "Model Y" or "MY":' as info;
SELECT 
    id,
    name,
    parent_category_id
FROM product_category 
WHERE name ILIKE '%model y%' OR name ILIKE 'my %'
ORDER BY name;

-- Total count
SELECT 'Total count summary:' as summary;
SELECT 
    COUNT(*) as total_model_y_related_categories
FROM product_category 
WHERE name ILIKE '%model y%' OR name ILIKE 'my %';