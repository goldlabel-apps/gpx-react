export const filterFunc = (data: any, dataFilters: any) => {
    const newArray:any = []
    const filterApiKey = dataFilters["api_key"].value
    const filterPassword = dataFilters["password"].value
    if (!filterApiKey && !filterPassword) return data
    for ( let i = 0; i < data.length; i++ ){
        if (filterApiKey){
            if (data[i]["api_key"] === null){
                newArray.push(data[i])
            } 
        }
        if (filterPassword){
            if (!data[i]["password"] || data[i]["password"] === ""){
                newArray.push(data[i])
            } 
        }
    }
    return newArray
}
