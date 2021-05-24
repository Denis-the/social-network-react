
export const updateObjectInArray = (items, itemId,  objIdPropName, newObjProps) => (
    items.map(item => item[objIdPropName] === itemId ? { ...item, ...newObjProps } : item)
)


