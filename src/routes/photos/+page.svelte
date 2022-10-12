<div class="content">
    <h2>
        Here are some of my personal pictures inside flex-box
    </h2>
    <br><br>
    <div class="flexbox-img-container">
        <li> <img src="1.jpg" alt="" class="personalPic"></li>
        <li><img src="2.jpg" alt="" class="personalPic"></li>
        <li><img src="3.jpg" alt="" class="personalPic"></li>
    </div>
</div>

<style>
    * {
    padding: 0;
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
    box-sizing: border-box;
}

.content {
    position: absolute;
    top: 30%;
    left: 8%;
    width: 55vw;
}

.flexbox-img-container {
    list-style-type: none;
}

.flexbox-img-container {
    display: flex;
    flex-wrap: nowrap;
    justify-items: center;
    align-items: center;
}

.flexbox-img-container>li>img {
    max-width: 90%;
    max-height: 90%;
}

img {
    object-fit: cover;
    width: 230px;
    height: 230px;
}
</style>