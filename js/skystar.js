// poem
var words=[
    '你的长夏永不凋落',
    '追风赶月莫停留',
    '平芜尽处是春山',
    '人生事',
    '清风一枕',
    '浊酒千杯',
    '归去来兮',  
    '愿为江水',
    '与君重逢',
    '一日不见兮',
    '思之若狂',
    '故人入我梦',
    '明我长相忆',
    '相识满天下',
    '知心能几人',
    '莫愁千里路',
    '自有到来风',
    '一微尘里三千界',
    '半刹那间八万春',
    '取次花丛懒回顾',
    '半缘修道半缘君',
    '三笑徒然当一痴',
    '人生若只如初见',
    '愿君人间漫浪',
    '平生事 南北西东',
    '髣髴兮若轻云之蔽月',
    '飘颻兮若流风之回雪',
    '春蚕到死丝方尽',
    '蜡炬成灰泪始干',
    '今夜何夕',
    '见此良人',
    '愿我如星君如月',
    '夜夜流光相皎洁',
    '远而忘之',
    '皎若太阳升朝霞',
    '迫而察之',
    '灼若芙蕖出渌波',
    '玉堂金马',
    '正年少归来',
    '风流如画',
    '若有知音见采',
    '花开花落花无悔',
    '缘来缘去缘如水',
    '瓌姿艳逸',
    '仪静体闲',
    '柔情绰态',
    '媚于语言',
    '翩若惊鸿',
    '宛若游龙',
    '荣曜秋菊',
    '华茂春松',
    '恰同学少年',
    '风华正茂',
    '书生意气 挥斥方遒',
    '是非得丧皆闲事',
    '休向南柯与梦争',
    '垆边人似月',
    '皓腕凝霜雪',
    '悟已往之不谏',
    '知来者之可追',
    '晓看天色暮看云',
    '行也思君 坐也思君',
    '众里嫣然通一顾',
    '人间颜色如尘土',
    '自歌自舞自开怀',
    '无拘无束无碍'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '岁岁平安 年年如意';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '快乐常伴左右，幸福永驻心间';
        texttwo.innerHTML = '希望萌 天天开心';
        textthree.innerHTML = '愿岁并谢 与长友兮';
      },112500)


 
