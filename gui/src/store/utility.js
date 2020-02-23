// conv method to update objects properties
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject, // spread op to get all old objs
        ...updatedProperties // replace keys with new set of keys
    }
}