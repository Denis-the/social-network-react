
export const updateObjectInArray = (items, itemId,  objIdPropName, newObjProps) => {
    return items.map(item => item[objIdPropName] === itemId ? { ...item, ...newObjProps } : item);
}


