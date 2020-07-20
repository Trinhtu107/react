import React , { useState,useEffect } from 'react';

function Welcome(props) {
    return <h1>Demo {props.name}</h1>;
}

// function Demo() {
//     return (
//         <div>
//             <Welcome name="1" />
//             <Welcome name="2" />
//             <Welcome name="3" />
//         </div>
//     );
// }
//
// function Example() {
//     // Declare a new state variable, which we'll call "count"
//     let [countt, setCount] = useState(0);
//     const list=[{id:1,name:'aa'},{id:2,name:'bb'}];
//
//     useEffect(() => {
//             console.log(countt); //thay doi thi chay vao day
//         }  ,[countt]);
//     return (
//         <div>
//             <p>You clicked {countt} times</p>
//             <button onClick={() => setCount(countt + 10)}>
//                 Click me
//             </button>
//             <input type="text" onChange={event => {
//                 console.log(event.target.value)
//             }}/>
//
//             {list.map(item=>(<h1>key {item.id} name {item.name}</h1>))}
//
//         </div>
//     );
// }


function Webtu({randomItem}) {
    let list = [
        "https://66.media.tumblr.com/56662f7a19dda16764c6478e75f417fa/tumblr_pdqqhluiOL1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/09029b0499d943b2eb4cc5ec0ad0ca20/tumblr_pcwtwcGcci1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/1f3bf25340a1b9fc34273cc15834ad5b/tumblr_pcw1bhrpQX1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/a77093c8c6e713a47d5ef3bd7246682e/tumblr_pcv4h1etPz1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/e3d3938cecd7941854b487e9a9a850fc/tumblr_pcthxeuAlg1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/4cbae1f3cee6cff11771897b5ea63581/tumblr_pct8jzrAOL1vf8b0wo1_1280.png",
        "https://66.media.tumblr.com/c38512556ba934dce51a5e03d3200852/tumblr_pcpxupXGgF1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/e5e26e74d5d38aa2770edce66dead001/tumblr_pcjy3atKyc1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/9e26127563e0f8ec9388995462b1a8d7/tumblr_pcgg752usA1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/2b9ea27613afe19561c139c797e61207/tumblr_pc8on0CqNa1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/649f2f864fce66ba980e2f0a0dff437c/tumblr_pc8oe1E8Oa1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/13004fcaf026088b364b78de84b8dcbf/tumblr_pc7bjkrhME1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/3d30e1f82520645c02445d22f446612d/tumblr_pc7biajng61vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/3e7c99dbee80a50296430b8d6bdeabc6/tumblr_pc7bgdBIJl1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/c1fd82538c5c3b5256e38e3fa02570a1/tumblr_pc0g1wsotn1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/8f8c72166a1726c78efc56f12a171d4c/tumblr_pbzuzoXShE1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/6780757c04cb236e4aed8c7a647a146b/tumblr_pbuaqsVmwT1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/ee4c9b1fb1af619d43e054e3287ead35/tumblr_pbrds2xAGs1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/e9952cd5ac99ef8b4463f04c0373841c/tumblr_p86xu35FGm1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/b0cc80d736d00854018d4b06d4fd60e8/tumblr_pbqh2tOUeu1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/8a56450c847c8b7eb1ab5a72a384216e/tumblr_p334flYdmi1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/8a059c74f97d736b051f79a1cb5e9d54/tumblr_pboo3pf3Od1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/02d88211d9911f27c8ccd8a1eda4ac69/tumblr_pblzd3J0z11vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/a991ee651c234d2b43aee2c315f9b411/tumblr_pbj0i3gIvh1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/ee305db1b0c62bfc39bf3f76472d7113/tumblr_pbcndzx9We1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/d41ed4a943fbaba8137f84443e6792b7/tumblr_pazoq5pWPL1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/fd7cbb05dfb7825ca4589edf6789de39/tumblr_pavw6suNhp1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/c43525f911d09f608b898a73d44b0ea6/tumblr_pavvzlDQ2S1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/24ae508a99473c32cc0e4ceea0393049/tumblr_pavvvl9Fkm1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/029238c5311bcbd5920892a1e39f4770/tumblr_pavvt6KDKb1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/3889ed9e1538b61420f5dbeb733a3ff3/tumblr_parcm7DQdB1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/b7f335c56f34b327843db45321e68120/tumblr_parcklPimM1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/4616136d99e21c84c1b38fb2abe34666/tumblr_parbs0nTOq1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/1a2dfd783d22681720bab59287dfd5a3/tumblr_paivdwy0yt1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/2909b62928bae6622c3e73cd0f5b517c/tumblr_paiv60AIKB1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/8ac1f0d5a11189c9800d6bb955482d2c/tumblr_paiv3tFlaQ1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/81f901fbf387eb4c529675e0dd90d2b6/tumblr_paiuylKQ8p1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/153b1bdafe722d8ef32ebcc0211fb3b9/tumblr_pa3a2rHdEW1vf8b0wo1_1280.png",
        "https://66.media.tumblr.com/c85aba75868e6e07f47eb2ca62212c35/tumblr_p9e3q8Wmse1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/04e25972ac2936712936889562bb70af/tumblr_p9e3nrpRpz1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/81a631a3c8139e4e804b452f6d2e3946/tumblr_p9e3ldDjm51vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/30c90c3b9c4cdedf4f6dccf2edb1b518/tumblr_p98j76tOYC1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/d5a8d46be2f6586cb0bb7a602cf3f8d7/tumblr_p98j5j7dzB1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/ca0355e78ca0cd7cd6da12c4a524e41c/tumblr_p8v5zlroAJ1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/789431de826e1eb7d350ea933ea62a4b/tumblr_p897o1tNmW1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/e9952cd5ac99ef8b4463f04c0373841c/tumblr_p86xu35FGm1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/ae6656aa1674f7bfc7b30ac64a2e126a/tumblr_p81zydQJ8z1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/434e60c4dd85232231c4ba8ac5d81425/tumblr_p81zv8Grkk1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/9cd2078ccff08a8ece8e768bb8abec45/tumblr_p81zq0kQOO1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/e158c829165bc0f048296c6cc8ae2e11/tumblr_p81zjg06Dk1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/c65756ac8aaa707592692d58ca3e0154/tumblr_p81gu84ahl1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/a87f38927c1db59660363266611ab9c4/tumblr_p81gqfjwb51vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/efa77e9159c6670d4870f4700c348c30/tumblr_p81gnxJHCX1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/dd1293c55b027cd48b8af5340e2c95a6/tumblr_p7xi5fA55N1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/307d39327b592c666c94a6f8a5f19e06/tumblr_p7xcsetoKz1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/bc7cfabe0bf653aeb659bc07a0378759/tumblr_p7wce87H6u1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/ca1cd2286d2972392d431d55d02354e0/tumblr_p7wcbtfrIO1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/6d9010514059bd81ed92dd9c984d1e2b/tumblr_p7wca0sYot1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/3ede0e7d9e516253d12a7d348a0ca992/tumblr_p7wc7q8AOv1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/4f55fb1b92ed7ffeae7a98ab2c4da3b9/tumblr_p7u2skUgDu1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/0bc7212577114e9afcf21772ab4435c0/tumblr_p7r6y1bsWT1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/6aa4085c588c2d49ed1eb91181a8ff11/tumblr_p7qjegvRDw1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/84afa62aad0d4057acb1cc3706a4a06c/tumblr_p7qjbzACkc1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/4e5c61a1d6262323d35f415514f1d0c1/tumblr_p7qf62TZfv1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/3062982cebb395245049e82bda694277/tumblr_p7qey6qdU41vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/d1781661cdb966d879cd8fed04561687/tumblr_p7qeu5HHNo1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/08b9d3daa4edc72407288250838ce607/tumblr_p7p65j0P9E1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/38920f2430565beacce7f15749042800/tumblr_p7ota2vyEa1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/8c0f07037fbfb74a200c3bb1d0082808/tumblr_p7ofacc0tv1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/2501c1570b62d3948874cbbce4bfbc39/tumblr_p7of9qhgtW1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/374df6666c3d7f5e626ba89dc1cc8bbb/tumblr_p7of78DTO61vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/58d038e3de237fe5d8c33e81daf0e77f/tumblr_p7of5f31Hp1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/2242a123973ce2790c9495577bec4ffa/tumblr_p7of3fWxOM1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/a3a35b8dd3c860615cabdf31e8080276/tumblr_p7h03n4o2R1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/6e5e732fb721a7a431440e2f82145fe3/tumblr_p7h027E5781vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/35495bbd88957b2c01847376022557b7/tumblr_p7bfujizFp1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/e466caa95ed4fee337fbff8a1a71cfcb/tumblr_p66q67DAh41vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/b133476195c15e9aa20f5c2949ca6318/tumblr_p66q3e103I1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/57c8cd794114903436905d1f8af34cc8/tumblr_p615zrTStf1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/0bc7212577114e9afcf21772ab4435c0/tumblr_p615wm4n6J1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/3ef03956bf7408eececa51ae29f4805c/tumblr_p615vdKTb91vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/1b50d275470a80d847d91c27762d953d/tumblr_p615u0mrdH1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/f078bb01f71f2ccb6a77ff0d3ab82a5a/tumblr_p615lt9gP71vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/e0a7e71386fa78b08ccae8fef89b6604/tumblr_p5xgfftuLs1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/6843bcad9b15b3c2a641cf7ce9e2ed25/tumblr_p5xgaaTOLr1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/5edc19003ef45eb45e08e2e468f79591/tumblr_p5xga17D5d1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/7a21c3fe1b0bb409e35cde8e091d5d8f/tumblr_p5xga1mSHB1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/87fc50338603253ce3939db42443b644/tumblr_p5cx0gMNRW1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/c925c95677b2cc3d98912f6ffe5ef009/tumblr_p5ax6g6igb1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/8e25d83d3b836696e0b4406513970d2f/tumblr_p5a0naCrVc1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/b7bb58a97d6e9a2de1e4e00de9e8b124/tumblr_p59dyyje8r1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/8588a88f2affddda3ea5c4bfdf29859d/tumblr_p56b9qNiuf1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/6a7c6890b2669b0b9a02d30e46272706/tumblr_p56b2khRV01vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/49a280b60dff35b6aa2f39a49387e364/tumblr_p4wp9qP4ds1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/c8cc725f830342bbd25344950a69905f/tumblr_p4wor1ay1K1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/49a438ba1ed844fc551c39426b1f1872/tumblr_p4wi0u7XO61vf8b0wo1_1280.png",
        "https://66.media.tumblr.com/f5e4d66aae746901b3b65bd844854be8/tumblr_p3469tHSkS1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/e8d0b4d8fd0bc6407e016755cb3d23c7/tumblr_p3460l5deu1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/d9fffa9111c33b0cd4a2cbfe7390df52/tumblr_p345wkh7LP1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/2392d6a39564bb39a00850283dda37cb/tumblr_p345r95pOg1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/8f5b2209579b3caab5edfeec21f6d0a0/tumblr_p3441vn03V1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/697fd504fe33732ba3c1723f1c4ea619/tumblr_p33aa2phj81vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/cb39c9f2c2151793f93465c65d7309eb/tumblr_p33a54gbzO1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/631c8f618c0a66f98b5fd1f53f7e93a5/tumblr_p334liNkdF1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/8a56450c847c8b7eb1ab5a72a384216e/tumblr_p334flYdmi1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/c700351e737d875f8a0d8352d7ae352e/tumblr_p32dwpFh3P1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/683226c998966b72c8dadb671bd57b1e/tumblr_p2zvp2V86h1vf8b0wo1_1280.png",
        "https://66.media.tumblr.com/634abcf85749405914154824f4d6ab94/tumblr_p2yjg3NFvu1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/424342e518be5009fb8a199b08d8ee3a/tumblr_p2y4dr8nmM1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/fd3c62ccbf48ebc263d95eb4b0ab2acc/tumblr_p2wq5s96OO1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/abca2c128d3a52ea5ba899aa375d5baa/tumblr_p2wdwxdcxL1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/495b70e7bc03f66ba48c858492bb48ff/tumblr_p2wdu0HLBi1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/aee724b454a8dad5fa5f01ffb0216ba8/tumblr_p2wdrnlnQe1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/859e7e836ed478513c4b6ad542f9aa77/tumblr_p2wbo49jzH1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/0ef72d3691fc51735fa0f8d355696c35/tumblr_p2wbm1YNv51vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/98dfca55eb6180f73ee6157fbe3a064c/tumblr_p2txawLmGK1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/eedba120c539fd3923d255da23d99aa9/tumblr_p2tx9unjNN1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/a7ee531eb2c2be893dd92a9e2a8cfd55/tumblr_p1kst27cVI1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/06afedbcdca07b054c04410893964b8a/tumblr_p1kmhqytB21vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/47a7d31ec1b9892fbf0f4475187d657a/tumblr_p1kmdzxbC61vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/af99492e9041634d9fad44842f74076f/tumblr_p1km9yMAN61vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/6fad8fbdfc15f9d2522f99ba51b2ab0a/tumblr_p11c99KZWO1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/24017bd4d3d968a97dc23e0bd7fcb16c/tumblr_p11c45E2S61vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/07312daaa9c94ca39e758173103faac2/tumblr_p0ufydvs761vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/5daf4c8c77227b39285b7a97dace95d9/tumblr_p0ufw3YvEf1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/2a536440f29f54c95577dfb9c871b925/tumblr_oz2ulqtMaT1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/ae7d2eee46d44bed17f4a0567eb0aaa7/tumblr_oxlftdiFDS1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/990e3154df592eb32848e11c288b048b/tumblr_oxlfrk7wUg1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/8018aaa22e1c3cc021562de112ce874d/tumblr_oxlfpq3mrN1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/6e65b55afa1ab6a07278b22efe81a47e/tumblr_owhfa0upiF1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/332c089aa4d82e83db73648622a8f337/tumblr_owhf7fGRl91vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/62e7b58cee3c184ec40b699f68911395/tumblr_owha3rrMe41vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/3a6b149b699c23e683df011905de25f0/tumblr_owha16cf5e1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/fb71ca22010aa94d840e1eb8ea5b6010/tumblr_owgpb3GndC1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/bb3a48875a669e1b1e81b6a9ad5a89c6/tumblr_owgp6h97do1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/4725cc473cacdbf681f09fbffea0d42a/tumblr_or6gg7HAgx1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/cbf5cfade43b6c4053c1619bfc24b142/tumblr_oq7jdqnUKk1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/834e668013215be3943bd58b7dd9ea5d/tumblr_oq7j6jwwjr1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/57d9718c6499de6ca350e6625293a78d/tumblr_oq7j51ll7d1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/c52ac8eaf520c32481f312f0a63f40c4/tumblr_oq7j2nrAOz1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/ef21a7cb8b0a4595040e449231c15232/tumblr_oq7iyyxwx81vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/b0c30be6033cde4439f6bbbb524ce1bc/tumblr_oq7ixm421Z1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/c23b6f828c32ac9424dad856bb1cdc7d/tumblr_oq7iwjBFxI1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/80021ff97c00ae11261e06c3941446fd/tumblr_opov1pCioH1vf8b0wo1_540.png",
        "https://66.media.tumblr.com/2b47218fa38b9c3b338fa8bbcd8be69e/tumblr_oo7914fRKB1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/956e49364509720db3fd831f6823bb9d/tumblr_oo7485CUSO1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/3b3d5597998c5c573b5bb5efcce8b0c5/tumblr_oo744mR88s1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/d72e2e167070c63e88589d27fc2c1d2d/tumblr_od0p9kKnb11vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/2514dd5ed272d7bf3febce2eecd5bc3e/tumblr_nzmaz4BjAq1ujzr68o1_1280.jpg",
        "https://66.media.tumblr.com/8b122daf3eb723e421e3a1d31c4f1dd5/tumblr_od0orbTKyH1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/f01b0c9cdb4702efeb2dc2656118edb9/tumblr_od0oowCd7g1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/7e434c7e8d1a13ca8af9ce5692960cbb/tumblr_od0omniHSL1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/f13cccb4fbba42b5a2f3ffec0df3a75a/tumblr_oczlzadSJv1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/43c1a0924c439a8d6f0d58363ca6dde3/tumblr_oczlvlSQif1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/07147e287cf9971f8a296b510c9c55fb/tumblr_oczllmnNQj1vf8b0wo1_1280.jpg",
        "https://66.media.tumblr.com/155145e48b1c8e35940d0633195596fa/tumblr_oczlisfdRk1vf8b0wo1_1280.jpg",
        ];

    return (
        <div>
            {list[randomItem]}
            {/*<img src={list[randomItem]} alt="" />*/}
        </div>
    );

}

function Taolatu() {
    const [shows, setShows] = useState(0);
    const [randomItem, setRandomItem] = useState(0);

    const runRandom = () => {
        setShows(0);
        setTimeout(() => {
            setShows(shows + 1);
            setRandomItem(Math.floor(Math.random() * 30));
        }, 2000);
    };
    return (
        <div>
            <button onClick={() =>runRandom()}>Show</button>

            { shows && <Webtu randomItem={randomItem} />}

        </div>
    );
}

export default Taolatu;