
const talks = [`Hey,fatma How you doin??,,, i know not fine, raat se tera mood off hai
                    or tu theek se baat nahi kar rahi hai mere se and i know mein bhi tere se 
                    theek se baat nahi kar raha hu 1-2 din se
                    <br>
                    <br>
                    and mujhe iss bare mein kuch bolna hai toh next button click kar aur aagey padti reh :/</br>`,
    `So I will start , thodi si sharam arahi actually bahut hi arahi hai :||, so yaad hai uss din tune mujhe subah us ladke ke
                   baare mein bataya tha ki teri friend wants you to set up with him and you are kinda in talking phase with him from 3-4 days and tujhe woh
                   accha nahi laga and then I said block him ,maat baat kar and aisa waisa
                   <br>
                   <br>
                   <br>
                   so tune mujhe bataya ki mein kuch suggestion du tujhe par mene tb bahut selfish and ghatiya cheez ki`,
    `  So tb mene woh sb bola woh yeh nahi soch ke bola ki mujhe teri fikr hai ya tere galat sahi soch ke nahi bola
                   woh sb mene sirf khud ki selfisness(nahi aati spelling iss ki),jealousy and anger mein bola or dekha jaye toh keh sakte hai manipulate
                   karne ki koshiish ki tujhe
                   <br>
                   <br>
                   <br>
                   now you may wondering mujhe kaunsi selfisness , jealousy and anger`,
    ` So the thing is :\ , i don't know kaise samjhao but tune jb yeh bataya toh mujhe accha nahi laga felt like tu mujhe durr
                  ho rahi or isliye jealous hua and tu 3-4 din se baat kar rahi or tune bataya nahin isliye gussa hua and yeh sb feelings 
                  ek saath hit ki toh bura bhi laga and mene yeh tk nahi janna ne ki koshish ki person kaisa ,tujhe kya chahiye teri kya
                  feelings hai ,mene sirf mere baare mein socha or khud ki ego satisfy karne usko block karne bol diya bina kuch soche samjhe
                  <br>
                  <br>
                  <br>
                  and mein emotions barabar kabhi bhi samjh ya samjha nahi pata ,yeh upar itna sb likhne ke baad bhi mein terko samjha nahi paya 
                  ki kya bolna cha raha hun so agar short mein bolu toh i am kinda addicted/obbessed with you,and kabhi socha nahi that you are also 
                  a person who is single and can date whoever she wants and achanak se tune yeh bataya toh thoda se track off hogaya mein`,
    `  and phir jb tu gayi or thoda akela baitha toh mene socha kitna galat kiya mene khud ki wajah se terko kyun...
                   <br>
                   then mein tere se bhi thoda naraz tha(i know teri koi galti nahi hai) and khud se bhi Coz tu meri sbse close hai and tu hi
                   hai jo mujhe humesa acche se care se rakhti hai and mein kuch bhi pagal wali harkat karta rehta hun ya kuch na kuch natak hote hi
                   hai mere phir bhi tune mujhe humesha dosti rakhi maloom kitni baar toh laga hai iss bar toh pakka fatma baat nahi karegi mere se
                   phir bhi haar baar tu aaati hai samne se baat karne or kuch bhi hota hai usko sort out kar deti hai (iss sb ke lie waise dil  se thank you)
                   phir bhi jb bhi meri baari hoti hai mein kabhi tujhe acchi advise ya jo emotional support chahiye woh nahi de pata
                   <br>
                   <br>
                   <br>
                    and i am bad with dealing emotions and mein bhi jaise samjhna cha raha hun waise nahi kar pa raha so sorry agar kuch baatien head 
                    ke upar jaa rahi ho toh , and back to me and mein humesa kuch na kuch karta hun sorry bolta hun par kabhi sudharta nahin hun and iss baar zyada hogaya
                    mene phele toh uss din jo bola (koi haq nahi hai mujhe) out of jealousy(jo mujhe nahi rakhni chahiye pata hai) and kal raat ko bhi mein thik se 
                    baat nahi kar paya kyuki mein khud mein hi fasa tha ke yeh mein genuinly tere liye bol raha hun ya mere apne selfisness mein islie kaafi baari
                    message delete karke bhi waps soch ke bhej raha tha`,
    ` and ab or zyada tujhe thaka aaonga nahi yeh last hai mallom itna sb likhne ke baad bhi terko bahut confusing lag raha hoga akhir yeh cherry kehna kya chata hai? mujhe bhi nahi maloom mujhe bhi mahi samjh araha bs mujhe bura lag raha i am confused ,so i will end with mujhe pata hai mere yeh jo emotions aye the yeh galat the ,mene tujhe kind of
                 mere behaviour se hurt kiya , or tu bhi thodi cold behaviour hai mere liye abhi but mujhe accha nahi lagta se tere mere beech yeh sb hota hai
                <br>
                <br>
                <br>
                so i am sorry ,next time kabhi bhi aisa hoga toh tere baare mein phele sochunga and off track nahi haunga and please mujhe share karna band mat karna kuch mein try karunga sudhrane ka`]

const imgs = ["./assests/img/istockphoto-866080898-612x612.jpg", "./assests/img/premium_photo-1661508610592-773bc69b01c1.jpeg", "./assests/img/istockphoto-494239609-612x612.jpg", "./assests/img/images.jpeg", "./assests/img/sddefault.jpg", "./assests/img/WhatsApp Image 2024-08-26 at 13.26.51.jpeg"]

const talk = document.querySelector(".talk")

const myImg = document.querySelector(".image")

const next = document.querySelector("button")

const prev = document.querySelector(".button-17")

let current = 0


myImg.src = imgs[current]

talk.innerHTML = talks[current]

next.addEventListener("click", () => {


    current = (current + 1) % talks.length

    if (current == 1) {
        let btn = document.createElement("button")
        btn.textContent = "PREV"
        btn.classList.add("button-17")
        btn.addEventListener("click", (e) => {

            if(current==1){
                e.target.remove()
            }

            if(current==talks.length-1){
                document.querySelector(".footer").appendChild(next)
            }

            current-=1

            myImg.src = imgs[current]

            talk.innerHTML = talks[current]
        })
        document.querySelector(".prev").appendChild(btn)
    }

    if(current==talks.length-1){
        next.remove()
    }

    myImg.src = imgs[current]

    talk.innerHTML = talks[current]
})