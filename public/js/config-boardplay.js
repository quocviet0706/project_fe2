
export default class ConfigBoard{
  static getListBG(deviceWidth) {
    if (deviceWidth < 400) {
      return new Set([
        'https://wallpapercave.com/wp/wp5152417.jpg',
        'https://wallpapercave.com/wp/wp6289765.jpg',
        'https://wallpapercave.com/wp/wp6289800.jpg',
        'https://wallpapercave.com/wp/wp5333475.jpg'
      ]);
    } else {
      return new Set([
        'https://free4kwallpapers.com/uploads/originals/2020/10/25/winter-in-shirakawa-japan-wallpaper.jpg',
        'https://free4kwallpapers.com/uploads/originals/2019/10/29/city-of-japan-wallpaper.jpg',
        'https://free4kwallpapers.com/uploads/wallpaper/tokyo-japan-wallpaper-1024x768-wallpaper.jpg',
        'https://c4.wallpaperflare.com/wallpaper/662/966/394/japan-tokyo-street-building-wallpaper-preview.jpg'
      ]);
    }
  }
}