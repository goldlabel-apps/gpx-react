
export const filterDocs = (docsArray: any, filter: any) => {
    if(filter === "") return docsArray
    let newArray:any = []
    for ( let i = 0; i < docsArray.length; i++ ){
        const { meta, text } = docsArray[i]
        const { displayName } = meta
        const { offerText, termsText, ctaText } = text
        let continueLooking = true
        if (displayName.toLowerCase().includes(filter.toLowerCase())) {
            newArray.push(docsArray[i])
            continueLooking = false
        }
        if (continueLooking){
            if (offerText.toLowerCase().includes(filter.toLowerCase())) {
                newArray.push(docsArray[i])
                continueLooking = false
            }
        }
        if (continueLooking){
            if (termsText.toLowerCase().includes(filter.toLowerCase())) {
                newArray.push(docsArray[i])
                continueLooking = false
            }
        }
        if (continueLooking){
            if (ctaText.toLowerCase().includes(filter.toLowerCase())) {
                newArray.push(docsArray[i])
                continueLooking = false
            }
        }
    }        
    return newArray
}
