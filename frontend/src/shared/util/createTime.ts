


export const createTime = () => {
    let hour = new Date().getHours()
    let min = new Date().getMinutes()
    return `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}`
}