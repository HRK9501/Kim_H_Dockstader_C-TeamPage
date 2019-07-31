(() => {
    console.log('fired!');

    const teams = document.querySelectorAll('.teamContainer'),
          bannerImages = document.querySelector('#bioImages'),
          bioName = document.querySelector("#bio-name"),
          bioInfo = document.querySelector(".bio-info");



    const bioData = [ 
        ["Hyeryn Kim", `My name is Hyeryn Kim, from Seoul, Korea. I like to make short videos and music video by using adobe premiere and aftereffects. Also, I am a hobby of doing a graphic design using Photoshop and Illustrations. 
        Before I came to Canada, I had worked at a video editing team in a book publishing company in Korea, where I gained valuable experience.`],

        ["NAME", `INFORMATION`]
    ];



    function animateBanner() {

        let offset = 600,
            multiplier = this.dataset.offset; 

        console.log((offset * multiplier) + "px");


        bannerImages.style.right = `${offset * multiplier + "px"}`;

        bioName.textContent = `${bioData[multiplier][0]}`;
        bioInfo.textContent = bioData[multiplier][1]; 
    }

    teams.forEach(team => team.addEventListener("click", animateBanner));
})(); 