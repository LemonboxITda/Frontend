export function mallLink(name) {
    if (name === 'vitamin') {
        return 'https://lifevitamin.kr/category/인생종합비타민/43/'
    } else if (name === 'probio') {
        return 'https://lifevitamin.kr/category/인생프로바이오틱스/44/'
    } else if (name === 'omega') {
        return 'https://lifevitamin.kr/category/인생루테인&오메가3/45/'
    } else if (name === 'all') {
        return 'https://lifevitamin.kr/category/전체상품/42/'
    } else {
        return 'https://lifevitamin.kr/'
    }
}