/**
 * This function is helper to detect the current 
 * scolling in the screen
 * The return will be in percent, 0% is top, 100% is bottom 
 */
export default function getScrolled(){
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height;
    return scrolled*100
}