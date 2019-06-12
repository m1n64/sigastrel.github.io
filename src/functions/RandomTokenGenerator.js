/**
 * @return {string}
 */
export default function RandomTokenGenerate() {
    let alp = "abcdefghigklmnopqrtuvwxyz0123456789";
    let retVal = "";
    for (let i = 0, n = alp.length; i < 16; ++i) {
        retVal += alp.charAt(Math.floor(Math.random() * n));
    }

    return retVal;
}