import React from 'react'

function Home(){
    return(
<>
<section class="banner">
    <img src="/img/naocale.png" alt="optika mravak banner"></img>
    <div class="dobrodosli">
      <h2>Dobrodošli na stranicu <br/><span>Optike Mravak</span> </h2>
    </div>
  </section>
  <nav class="main-nav">
    <ul>
      <li><a href="/pocetna.html" class="pocetna">Početna stranica</a></li>
      <li><a href="/novosti.html" class="novosti">Novosti</a></li>
      <li><a href="/galerija.html" class="galerija">Galerija</a></li>
      <li><a href="/onama.html" class="onama">O nama</a></li>
    </ul>
  </nav>
  <main>  
    <article>
      <h2>Nekakav, tekst</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae possimus sapiente,
        ducimus asperiores error eum ipsam quasi repellendus iste earum laboriosam nesciunt officiis atque rerum quos incidunt 
        aspernatur velit voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium labore perferendis minus incidunt doloribus,
        eligendi repudiandae earum dignissimos est neque deserunt consequatur. Repudiandae autem maxime magnam eveniet! Atque, suscipit amet. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Praesentium labore perferendis minus incidunt doloribus, eligendi repudiandae earum dignissimos est neque 
        deserunt consequatur. Repudiandae autem maxime magnam eveniet! Atque, suscipit amet.</p>
    </article>
    <ul class="images">
      <label>Suncane1:</label>
      <li><img src="/img/suncane1.jpg" alt="suncane1"></img></li>
      <label>Suncane2:</label>
      <li><img src="/img/suncane2.jpg" alt="suncane2"></img></li>
    </ul>
    </main>
  
  <section class="pocetna">
    <h2>Unesite e-mail!</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dignissimos minus voluptatem.</p>
    <form>
      <input type="email" name="email" placeholder="Type email and hit enter" required />
    </form>
  </section>

</>
    );

}
export default Home;