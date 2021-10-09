
export default class ConfigBoard{
  static getListBG(deviceWidth) {
    if (deviceWidth < 400) {
      return new Set([
        'https://wallpapercave.com/wp/wp5152417.jpg',
        'https://wallpapercave.com/wp/wp6289765.jpg',
        'https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80',
        'https://wallpapercave.com/wp/wp5333475.jpg'
      ]);
    } else {
      return new Set([
        'https://free4kwallpapers.com/uploads/originals/2020/10/25/winter-in-shirakawa-japan-wallpaper.jpg',
        'https://www.thebalance.com/thmb/gF4v7ZVXURl4T1bJV6-vW5ZfujA=/735x0/sunset-at-kiyomizu-dera-temple-and-cherry-blossom-season--sakura--on-spring-time-in-kyoto--japan-577613124-5c51bbe146e0fb0001c0dd97.jpg',
        'https://img1.goodfon.com/original/1920x1080/0/de/yaponiya-stratovulkan-gora-7679.jpg',
        'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2017/07/Kiyomizudera-Temple-Kyoto.jpg'
      ]);
    }
  }
}