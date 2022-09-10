export const distanceBetweenPoints = (points: Array<any>, sortkey: string) => {
    try {
        console.log ("distanceBetweenPoints", points, sortkey);    
        const value = 123;
        const units = "km";
        return {
            value,
            units,
        };
    } catch (error) {
        console.log ("distanceBetweenPoints error", error); 
    }
}
