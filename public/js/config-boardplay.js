
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
  
  static getHirigana(deviceWidth) {
    let arrJPWord = new Map();
    if (deviceWidth < 400) { 
      arrJPWord.set('a','あ');
      /*.set('i','い')
      .set('u','う')
      .set('e','え')
      .set('o','お')
      .set('ka','か')
      .set('ki','き')
      .set('ku','く')
      .set('ke','け')
      .set('ko','こ')
      .set('sa','さ')
      .set('shi','し')
      .set('su','す')
      .set('se','せ')
      .set('so','そ')
      .set('ta','た')
      .set('chi','ち')
      .set('tsu','つ')
      .set('te','て')
      .set('to','と')
      .set('na','な')
      .set('ni','に')
      .set('nu','ぬ')
      .set('ne','ね')
      .set('no','の')
      .set('ha','は')
      .set('hi','ひ')
      .set('fu','ふ')
      .set('he','へ')
      .set('ho','ほ')
      .set('ma','ま')
      .set('mi','み')
      .set('mu','む')
      .set('me','め')
      .set('mo','も')
      .set('ya','や')
      .set('yu','ゆ')
      .set('yo','よ')
      .set('ra','ら')
      .set('ri','り')
      .set('ru','る')
      .set('re','れ')
      .set('ro','ろ')
      .set('wa','わ')
      .set('wo','を')
      .set('n','ん');*/
    } else {
      arrJPWord.set('1', '一');
      /*.set('2', '二')
      .set('3', '三')
      .set('4', '四')
      .set('5', '五')
      .set('6','六')
      .set('7','七')
      .set('8','八')
      .set('9','九')
      .set('10','十')
      .set('a','あ')
      .set('i','い')
      .set('u','う')
      .set('e','え')
      .set('o','お')
      .set('ka','か')
      .set('ki','き')
      .set('ku','く')
      .set('ke','け')
      .set('ko','こ')
      .set('sa','さ')
      .set('shi','し')
      .set('su','す')
      .set('se','せ')
      .set('so','そ')
      .set('ta','た')
      .set('chi','ち')
      .set('tsu','つ')
      .set('te','て')
      .set('to','と')
      .set('na','な')
      .set('ni','に')
      .set('nu','ぬ')
      .set('ne','ね')
      .set('no','の')
      .set('ha','は')
      .set('hi','ひ')
      .set('fu','ふ')
      .set('he','へ')
      .set('ho','ほ')
      .set('ma','ま')
      .set('mi','み')
      .set('mu','む')
      .set('me','め')
      .set('mo','も')
      .set('ya','や')
      .set('yu','ゆ')
      .set('yo','よ')
      .set('ra','ら')
      .set('ri','り')
      .set('ru','る')
      .set('re','れ')
      .set('ro','ろ')
      .set('wa','わ')
      .set('wo','を')
      .set('n','ん');*/
    }
    return arrJPWord;
  }
}