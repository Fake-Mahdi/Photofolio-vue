<template>
  <div class="hello">
   <div  class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">

            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#togle" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" style="color: white; font-size: 30px;" href="#">PhotoFolio</a>
          </div>
          <div class="collapse navbar-collapse"  id="togle">
            <ul class="nav navbar-nav navbar-right">
               <li><router-link to="/">HOME</router-link></li>
                <li><router-link to="/AboutSection">ABOUT</router-link></li>
                <li><router-link to="/CantactSection">CANTACT</router-link></li>
                <li><router-link to="/ServiceSection">SERVICE</router-link></li>
              </ul>
          </div>
        </div>
      </div>
      
        <section style="margin-top: 100px;">
            <div class="container">
                    <div class="text-center">

                        <div class="space text-center">
                            <h1 style="color: white; font-family: 'Cardo', sans-serif; font-weight: bold;">I'm <span style="color:#27a776">Jenny Wilson</span> a Professional Photographer from New York City</h1>
                        </div>

                            <div class="space2" style="margin-top: 30px; color: grey; font-size: 18px;"><p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p></div>
                        <div class="text-center"><button type="button" class="btn2 btn-success">AVAILABLE FOR HIRE</button></div>
                    </div>
            </div>
        </section>

        <section style="margin-top: 50px; border-bottom: 0.5px solid rgb(82, 82, 82);">
            <div class="container">
                <div class="row" id="display">
                    
                </div>
            </div>
        </section>

        <footer>
            <p>&copy; 2023 Mahdi Boukhouima - All rights reserved</p>
            <p class="name">Mahdi Boukhouima</p>
          </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloSection',
  props: {
    msg: String
  },
  mounted() {
    // JavaScript code to display images
    let display = document.getElementById("display");
    var tableau = [
     "images/gallery-1.jpg",
  "images/gallery-2.jpg",
  "images/gallery-3.jpg",
  "images/gallery-4.jpg",
  "images/gallery-5.jpg",
  "images/gallery-6.jpg",
  "images/gallery-7.jpg",
  "images/gallery-8.jpg",
  "images/gallery-9.jpg",
  "images/gallery-10.jpg",
  "images/gallery-11.jpg",
  "images/gallery-12.jpg",
  "images/gallery-13.jpg",
  "images/gallery-14.jpg",
  "images/gallery-15.jpg",
  "images/gallery-16.jpg"
    ];

    var len = tableau.length;
    let marque = ""; // create an empty string to accumulate the markup
    for (let i = 0; i < len; i++) {
      marque += `<div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                  <img src="${tableau[i]}" class="img-responsive img-rounded" alt="">
                </div>`;
    }

    console.log(marque);
    display.innerHTML = marque;
  },
};
</script>

<style>
*
{
    padding: 0px;
    margin: 0px;
}
body
{
    
    overflow: none;
    background-color: black;
}
.navbar{
    margin-bottom: 0px;
    }
    .navbar-inverse
    {
        background-color: black;
        color: white;
    }
    
    .navbar-inverse .navbar-nav>li>a
    {
        font-size: 14px;
        color: white;
    }
    .navbar-inverse .navbar-nav>li>router-link
    {
        font-size: 14px;
        color: white;
    }
    router-link
    {
      font-size: 14px;
        color: white;
    }
    
    .navbar-default .navbar-nav>li>a:hover {
      
        background-color: grey;
    }
    .navbar-brand {
        color: black;
    }
    .space
    {
        max-width: 450px;
        margin: 0px auto;

    }
    .space2
    {
        max-width: 500px;
        margin: 0px auto;
        margin-bottom: 25px;

    }
    .btn2
     {
        font-family: 'inter', sans-serif;
        background-color: #27a776;
        font-size: 14px;
        color: white;
        border: 1px solid rgb(134, 177, 147);
        padding: 12px 40px;
        border-radius: 4px;
        
     }
     .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
        position: relative;
        min-height: 1px;
        padding: 10px;
    }

    footer {
        background-color: rgb(0, 0, 0);
        color: #fff;
        padding: 20px;
        text-align: center;
        font-size: 16px;
      }
      
      /* Name styles */
      .name {
        font-weight: bold;
      }
</style>
