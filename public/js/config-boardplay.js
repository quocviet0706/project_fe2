
export default class ConfigBoard{
  static getListBG(deviceWidth) {
    if (deviceWidth < 400) {
      return new Set([
        'https://wallpaperboat.com/wp-content/uploads/2019/05/japanese-29-920x1636.jpg',
        'https://wallpaperboat.com/wp-content/uploads/2019/05/japanese-20-920x1636.jpg',
        'https://wallpaperboat.com/wp-content/uploads/2019/05/japanese-15-920x1636.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDESAafDQ_gqIq12tpuGoSNUlEjGkAInaxdQ&usqp=CAU',
        'https://i.pinimg.com/236x/95/a2/78/95a27815e41d7f17149da42a34746013.jpg',
        'https://wallpapercave.com/wp/wp5152417.jpg',
        'https://wallpapercave.com/wp/wp6289765.jpg',
        'https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80',
        'https://wallpapercave.com/wp/wp5333475.jpg'
      ]);
    } else {
      return new Set([
        'https://images2.alphacoders.com/594/thumbbig-594278.webp',
        'https://images4.alphacoders.com/665/thumbbig-665663.webp',
        'https://images5.alphacoders.com/591/thumbbig-591757.webp',
        'https://images4.alphacoders.com/589/thumb-1920-589596.jpg',
        'https://images6.alphacoders.com/585/thumb-1920-585420.jpg',
        'https://free4kwallpapers.com/uploads/originals/2020/10/25/winter-in-shirakawa-japan-wallpaper.jpg',
        'https://www.thebalance.com/thmb/gF4v7ZVXURl4T1bJV6-vW5ZfujA=/735x0/sunset-at-kiyomizu-dera-temple-and-cherry-blossom-season--sakura--on-spring-time-in-kyoto--japan-577613124-5c51bbe146e0fb0001c0dd97.jpg',
        'https://images2.alphacoders.com/575/thumb-1920-575820.jpg',
        'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2017/07/Kiyomizudera-Temple-Kyoto.jpg'
      ]);
    }
  }
}