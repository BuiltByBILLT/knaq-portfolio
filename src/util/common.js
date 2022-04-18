export const toUSD = (cents) => {
    if (!cents) return ""
    return (Number(cents) / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })
}

export const postMedia = (post) => {
    //video
    //image
}