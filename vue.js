 var app = new Vue({
        el: '#container',
         components: {
                'mycomments':{
                template: '<h2>COMMENTS</h2>'},
                'myheroimage':{
                  template:'<img src="images/chili.jpg" alt="White Chicken Chili" width="180" />'
                } //local components
        },
        data: {
          isShow1:false,
          isShow2:false,
          isShow3:false,
          isShow4:false,
          image:"/profile.png",
            brianna: {
                author:'Brianna',
                date:'February 18, 2021 @ 3:30 pm',
                reply:'REPLY',
                desc:"Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
                level:'Novice',
                bio:'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!'
              },
            linh: {
                author:'LINH',
                date:'February 15, 2021 @ 9:46 am',
                reply:'REPLY',
                desc:"I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!",
                level:'Newcomer',
                bio:'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.'
              },
            catherine: {
                author:'Catherine',
                date:'February 13, 2021 @ 12:58 pm',
                reply:'REPLY',
                desc:"I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
                level:'Mentor',
                bio:'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!'
              },
             kali: {
                author:'KALI',
                date:'February 13, 2021 @ 11:31 am',
                reply:'REPLY',
                desc:"This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
                level:'Novice',
                bio:"Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!"
              },

        }
    });
    var vm1 = new Vue({
    el: '#headerinfo',
    components: {
        'myheader': {
            template: `<nav class="row navbar navbar-expand-lg navbar-light bg-light">
  <span class="col-4 navbar-brand">Food Blog</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="col-8 navbar-nav">
      <a class="nav-item nav-link active" href="#">Home</a>
      <a class="nav-item nav-link" href="#">Recipes</a>
      <a class="nav-item nav-link" href="#">Lifestyles</a>
      <a class="nav-item nav-link" href="#">Videos</a>
      <a class="nav-item nav-link" href="#">About</a>
    </div>
  </div>
</nav>`
        }
    }
}) // Local components